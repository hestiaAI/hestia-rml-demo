/*
export default ({ store, $vuetify }) => {
  const { theme } = store.state.config
  if (theme) {
    // override light theme colors
    Object.assign($vuetify.theme.themes.light, theme)
  }
}
*/
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { vuetifyOpts } from 'data-experience'

Vue.use(Vuetify)

export default new Vuetify(vuetifyOpts)