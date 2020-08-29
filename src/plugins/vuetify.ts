import Vue from 'vue'
import Vuetify from 'vuetify'
import ja from 'vuetify/src/locale/ja'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#2196f3',
        secondary: '#607d8b',
        accent: '#9c27b0',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#00bcd4',
        success: '#4caf50',
      },
    },
  },
  lang: {
    locales: { ja },
    current: 'ja',
  },
})
