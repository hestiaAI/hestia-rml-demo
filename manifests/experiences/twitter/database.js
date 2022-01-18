import { JSONPath } from 'jsonpath-plus'
import * as d3 from 'd3'
import { DB } from '~/utils/sql'

async function getFileFromGlob(glob, fileManager) {
  const matches = fileManager.findMatchingFilePaths(glob)
  if (matches.length === 0) {
    throw new Error(`Missing file: ${glob}`)
  } else if (matches.length > 1) {
    console.warn(`File ${glob} was found multiple times`)
  }
  const file = await fileManager.getPreprocessedText(matches[0])
  return JSON.parse(file)
}

export default async function databaseBuilder(fileManager) {
  const db = new DB()
  await db.init()

  db.create('twitterAds', [
    ['id', 'INTEGER'],
    ['tweetId', 'TEXT'],
    ['advertiserName', 'TEXT'],
    ['displayLocation', 'TEXT'],
    ['time', 'DATE'],
    ['engagement', 'INTEGER']
  ])
  db.create('twitterCriteria', [
    ['id', 'INTEGER'],
    ['adId', 'INTEGER'],
    ['targetingType', 'TEXT'],
    ['targetingValue', 'TEXT']
  ])

  const impressionsFile = await getFileFromGlob(
    '**/ad-impressions.js',
    fileManager
  )
  const engagementsFile = await getFileFromGlob(
    '**/ad-engagements.js',
    fileManager
  )
  const impressions = JSONPath({
    path: '$.*.ad.adsUserData.adImpressions.impressions[*]',
    json: impressionsFile
  })
  const engagements = JSONPath({
    path: '$.*.ad.adsUserData.adEngagements.engagements[*].impressionAttributes',
    json: engagementsFile
  })

  const adsItems = []
  const targetingItems = []
  let targetingItemsId = 0
  let adsId = 0
  // add all impressions and targeting criterias
  impressions.forEach(v => {
    const tweetId = v.promotedTweetInfo?.tweetId ?? null
    const advertiserName = v.advertiserInfo?.advertiserName ?? null
    const displayLocation = v.displayLocation ?? null
    adsItems.push({
      id: adsId,
      tweetId,
      advertiserName,
      displayLocation,
      time: v.impressionTime ?? null,
      engagement: 0
    })
    const criteria = JSONPath({
      path: '$.matchedTargetingCriteria[*]',
      json: v
    })
    criteria.forEach(criterion => {
      let targetingType = null
      let targetingValue = null
      if (criterion) {
        targetingType = criterion.targetingType || null
        targetingValue = criterion.targetingValue || null
      }
      targetingItems.push({
        id: targetingItemsId++,
        adId: adsId,
        targetingType,
        targetingValue
      })
    })
    adsId++
  })

  // Try to detect the impressions that are present in the engagements file
  // There is no identifier in the file, so we have to deduce it.
  // The impressions dates are not the same, so we have to check if they are close enough,
  // as well as other information.
  engagements.forEach(v => {
    const tweetId = v.promotedTweetInfo?.tweetId ?? null
    const advertiserName = v.advertiserInfo?.advertiserName ?? null
    const displayLocation = v.displayLocation ?? null
    const time = v.impressionTime ?? null
    adsItems.forEach(ad => {
      if (
        ad.tweetId === tweetId &&
        ad.advertiserName === advertiserName &&
        ad.displayLocation === displayLocation &&
        Math.abs(d3.timeSecond.count(new Date(ad.time), new Date(time))) < 120
      ) {
        ad.engagement = 1
      }
    })
  })

  db.insert('twitterAds', adsItems)
  db.insert('twitterCriteria', targetingItems)
  return db
}
