import { Experience, ExperienceOptions } from '@/index'
import icon from '@/icons/hsl.png'
import { genericViewers as defaultView } from '@/pipelines/generic'

const options: ExperienceOptions = {
  defaultView,
  hideSummary: false,
  hideFileExplorer: false,
  icon: icon,
  slug: 'hsl',
  title: 'HSL'
}

export default new Experience(options)
