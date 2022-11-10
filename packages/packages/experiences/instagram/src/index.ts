import packageJSON from '../package.json'
import { Experience, ExperienceOptions } from '@/index'
import icon from '@/icons/instagram.png'
import viewBlocks from './blocks'
import databaseConfig from './database'
import messages from './messages.json'
import dataSample from '@/data-samples/instagram.zip'

const options: ExperienceOptions = {
  databaseConfig,
  dataPortal: 'https://help.instagram.com/181231772500920',
  dataPortalMessage:
    '<strong>Important:</strong> To make the experiment work, please request your data in <strong>JSON</strong> format.',
  dataSamples: [dataSample],
  files: {
    messages: '**/messages/inbox/**/message_*.json',
    followers: '**/followers.json',
    followings: '**/following.json',
    postsViewed: '**/posts_viewed.json',
    videosWatched: '**/videos_watched.json',
    adsViewed: '**/ads_viewed.json',
    likedComments: '**/liked_comments.json',
    likedPosts: '**/liked_posts.json'
  },
  hideFileExplorer: false,
  icon,
  messages,
  title: 'Instagram',
  viewBlocks
}

export default new Experience(options, packageJSON, import.meta.url)