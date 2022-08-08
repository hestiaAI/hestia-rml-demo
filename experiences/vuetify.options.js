import {
  mdiAccount,
  mdiAccountGroup,
  mdiAlert,
  mdiAutorenew,
  mdiCached,
  mdiCalendar,
  mdiChartBar,
  mdiCheckboxBlankOutline,
  mdiCheckCircle,
  mdiChevronLeft,
  mdiChevronRight,
  mdiCircleOutline,
  mdiCircleSlice8,
  mdiClose,
  mdiCloseBox,
  mdiCloseCircle,
  mdiCog,
  mdiContentCopy,
  mdiDatabase,
  mdiDatabaseCog,
  mdiDatabaseRemove,
  mdiDelete,
  mdiDownload,
  mdiExport,
  mdiFileMultipleOutline,
  mdiFileSearch,
  mdiFileUpload,
  mdiFilter,
  mdiFolderInformationOutline,
  mdiFormatQuoteClose,
  mdiFormatQuoteOpen,
  mdiHome,
  mdiInformationOutline,
  mdiLockOpenVariant,
  mdiMagnify,
  mdiMinus,
  mdiMinusBox,
  mdiNumeric1CircleOutline,
  mdiNumeric2CircleOutline,
  mdiPlus,
  mdiSend,
  mdiShare,
  mdiStepForward,
  mdiTable,
  mdiTextBoxEditOutline,
  mdiTranslate,
  mdiTuneVariant,
  mdiTwitter,
  mdiWeb
} from '@mdi/js'

const values = {
  mdiAccount,
  mdiAccountGroup,
  mdiAlert,
  mdiAutorenew,
  mdiCached,
  mdiCalendar,
  mdiChartBar,
  mdiCheckboxBlankOutline,
  mdiCheckCircle,
  mdiChevronLeft,
  mdiChevronRight,
  mdiCircleOutline,
  mdiCircleSlice8,
  mdiClose,
  mdiCloseBox,
  mdiCloseCircle,
  mdiCog,
  mdiContentCopy,
  mdiDatabase,
  mdiDatabaseCog,
  mdiDatabaseRemove,
  mdiDelete,
  mdiDownload,
  mdiExport,
  mdiFileMultipleOutline,
  mdiFileSearch,
  mdiFileUpload,
  mdiFilter,
  mdiFolderInformationOutline,
  mdiFormatQuoteClose,
  mdiFormatQuoteOpen,
  mdiHome,
  mdiInformationOutline,
  mdiLockOpenVariant,
  mdiMagnify,
  mdiMinus,
  mdiMinusBox,
  mdiNumeric1CircleOutline,
  mdiNumeric2CircleOutline,
  mdiPlus,
  mdiSend,
  mdiShare,
  mdiStepForward,
  mdiTable,
  mdiTextBoxEditOutline,
  mdiTranslate,
  mdiTuneVariant,
  mdiTwitter,
  mdiWeb
}

// If you need to access Nuxt context within the options file, you need to export a function instead
// https://github.com/nuxt-community/vuetify-module#optionspath
const optionsFunction = ({ app }) => ({
  icons: {
    iconfont: 'mdiSvg',
    values
  },
  theme: {
    options: {
      customProperties: true
    },
    dark: false,
    themes: {
      light: {
        primary: '#58539e',
        secondary: '#f39506',
        // Following colors are from the MUI default dark palette
        // https://mui.com/customization/palette/#default-values
        info: '#0288d1',
        warning: '#f57c00',
        error: '#d32f2f',
        success: '#388e3c'
      }
    }
  },
  lang: {
    current: 'fr',
    t: (key, ...params) => app.i18n.t(key, params)
  }
})

export default optionsFunction
