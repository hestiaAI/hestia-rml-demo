import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'

const appName = 'HestiaLabs Demo'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate(title) {
      const { appName } = this.context.env
      return title ? `${title} | ${appName}` : appName
    },
    title: '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  vue: {
    config: {
      watch: ['~/manifests/']
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  env: {
    appName
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/semantifyit/RocketRML/issues/20#issuecomment-880192637
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty' // to ignore fs
      }
      config.module.rules.push(
        {
          test: /\.worker\.js$/,
          use: { loader: 'worker-loader' }
        },
        {
          // enable importing yaml file as a string
          test: /\.ya?ml$/i,
          use: 'raw-loader'
        }
      )
    },
    plugins: [
      // to ignore xpath-iterator package, which is a optional packages that uses nodejs c++ addon
      new webpack.IgnorePlugin({
        resourceRegExp: /^/u,
        contextRegExp: /xpath-iterator/u
      })
    ]
  }
}
