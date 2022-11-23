const { resolve } = require('path')

const { CONFIG_NAME = 'dev', NODE_ENV } = process.env

const { experiences } = require(resolve(__dirname, `config/${CONFIG_NAME}.json`))

function handleSpawnOutput({ status, stderr, stdout, error }) {
  if (status) {
    console.error(new Error(`Unexpected error (status ${status})`))
    if (stderr) {
      console.error(stderr.toString('utf8'))
    }
    if (error) {
      console.error(error.toString())
    }
  } else if (stdout) {
    console.info(stdout.toString('utf8'))
  }
}

const dataExperienceModule = '@hestia.ai/data-experience'

if (experiences) {
  if (NODE_ENV === 'production') {
    const { spawnSync } = require('child_process')
    // const { spawnSync, execSync } = require('child_process')
    // const npmrcPath = resolve(__dirname, '.npmrc')
    // const cmd = `echo "//npm.pkg.github.com/:_authToken=$\{HESTIA_OWNER_GITHUB_TOKEN}" >> ${npmrcPath}`
    // execSync(cmd)
    const experiencePackages = experiences.map(
      packageNameAndTag => `@hestia.ai/${packageNameAndTag}`
    )
    const packages = experiencePackages.concat(dataExperienceModule)
    console.info(
      'Installing packages from the npm public registry...\n' +
      packages.join('\n')
    )
    handleSpawnOutput(spawnSync('npm', ['install', ...packages]))
  } else {
    // cross-platform spawn
    const spawn = require('cross-spawn')
    const experiencePackages = experiences.map((packageNameAndTag) => {
      const [name] = packageNameAndTag.split('@')
      return `@hestia.ai/${name}`
    })
    console.info(
      'Linking packages...\n' +
      experiencePackages.join('\n')
    )
    handleSpawnOutput(spawn.sync('npm', ['link', ...experiencePackages]))
  }
}
