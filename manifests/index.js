import preprocessors from './preprocessors'

// require all modules on the path and with the pattern defined
// Warning! The arguments passed to require.context must be literals!
// https://github.com/webpack/docs/wiki/context#context-module-api
// https://stackoverflow.com/a/54066904/8238129
// https://stackoverflow.com/a/57009738/8238129
const reqJSON = require.context(
  './experiences/',
  true,
  /[a-z-]+\/[a-z-]+\.json$/
)
const reqYARRRML = require.context(
  './experiences/',
  true,
  /[a-z-]+\/examples\/[a-z0-9-]+\/[a-z0-9-]+.ya?ml$/
)
const reqSPARQL = require.context(
  './experiences/',
  true,
  /[a-z-]+\/examples\/[a-z0-9-]+\/[a-z0-9-]+.rq$/
)

const extractFirstDirectory = path => path.match(/^(?:\.\/)?([a-z0-9-]+)\//)[1]

// Import configs from JSON files
const manifests = Object.fromEntries(
  reqJSON.keys().map(path => {
    // Extract directory name of the experience
    const dir = extractFirstDirectory(path)

    // Extract JSON config
    const {
      title,
      subtitle = 'Data Experience',
      icon,
      ext,
      files = [],
      multiple = false,
      data = [],
      preprocessor
    } = reqJSON(path)

    // Validate config
    const requiredParams = { title, icon, ext }
    Object.entries(requiredParams).forEach(([name, param]) => {
      if (!param) {
        throw new Error(`[${dir}] ${name} is required`)
      }
    })

    const validExtensions = ['zip', 'csv', 'json', 'js', 'xml']
    if (ext.split(',').some(v => !validExtensions.includes(v))) {
      throw new Error(`[${dir}] parameter ext is invalid`)
    }

    if (dir !== 'playground' && ext.includes('zip') && !files.length) {
      throw new Error(
        `[${dir}] extension zip specified but list of files to extract is empty`
      )
    }

    if (preprocessor && !(preprocessor in preprocessors)) {
      throw new Error(`[${dir}] Preprocessor ${preprocessor} does not exist`)
    }

    return [
      dir,
      {
        title,
        subtitle,
        icon: require(`@/manifests/icons/${icon}`),
        ext,
        files,
        multiple,
        data,
        preprocessor,
        examples: []
      }
    ]
  })
)

reqYARRRML.keys().forEach(path => {
  // Extract directory name of the experience
  const dir = extractFirstDirectory(path)
  // Extract example name
  const name = path.match(/\/examples\/(.+)\//)[1]
  // Add example
  const example = {
    name,
    // assume single YARRRML file per example
    yarrrml: reqYARRRML(path).default,
    // empty Object for all SPARQL samples of the example
    sparql: []
  }
  const { examples } = manifests[dir]
  if (name === 'main') {
    // Add main example to the beginning of the Array
    examples.unshift(example)
  } else {
    examples.push(example)
  }
})

reqSPARQL.keys().forEach(path => {
  // Extract directory name of the experience
  const dir = extractFirstDirectory(path)
  // Extract example name and SPARQL query sample name
  const match = path.match(/\/examples\/(?<example>.+)\/(?<sparql>.+)\.rq/)
  const { example, sparql } = match.groups
  // Add SPARQL sample
  const exampleObj = manifests[dir].examples.find(e => e.name === example)
  exampleObj.sparql.push({
    name: sparql,
    sparql: reqSPARQL(path).default
  })
})

// Add examples from other experiences to playground Array.
Object.entries(manifests).forEach(([key, val]) => {
  if (key !== 'playground') {
    manifests.playground.examples.push(
      ...val.examples.map(ex => ({ ...ex, name: `${key}-${ex.name}` }))
    )
  }
})

// Object -> Array
const manifestsArray = Object.entries(manifests).map(([key, val]) => ({
  key,
  ...val
}))

// Move playground to the end of the Array
manifestsArray.splice(
  manifestsArray.length - 1,
  0,
  ...manifestsArray.splice(
    manifestsArray.findIndex(m => m.key === 'playground'),
    1
  )
)

export default manifestsArray
