import TheDataExperience from './components/TheDataExperience.vue'
// import ChartView from './components/chart/ChartView.vue'
import store from './store'

import { MODULE_NAME } from '@/utils/store-helper'

export default {
  install(Vue, options) {
    if (!options || !options.store) {
      throw new Error('Please initialise plugin with a Vuex store.')
    }

    options.store.registerModule(MODULE_NAME, store)
    Vue.component('TheDataExperience2', TheDataExperience)
  }
}
