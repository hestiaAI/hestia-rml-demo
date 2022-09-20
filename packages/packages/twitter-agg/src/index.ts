import packageJSON from '../package.json'
import { Experience, ExperienceOptions } from '@/index'
import { theEyeballs } from '@/collaborators/index'
import preprocessor from './preprocessor'
import icon from '@/icons/twitter.png'
import viewBlocks from './blocks'
import databaseConfig from './database'

const options: ExperienceOptions = {
  collaborator: theEyeballs,
  databaseConfig,
  dataPortal:
    'https://help.twitter.com/en/managing-your-account/how-to-download-your-twitter-archive',
  dataSamples: ['twitter.zip', 'twitter-sample.zip'],
  files: {
    ads: '**/block00.json',
    personalization: '**/personalization.js'
  },
  icon,
  preprocessors: {
    '**/*.js': preprocessor
  },
  hideFileExplorer: false,
  title: 'Twitter Agg',
  viewBlocks
}

export default new Experience(options, packageJSON, import.meta.url)
