import '@mdi/font/css/materialdesignicons.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import './assets/styles/main.styl' // wraps vuetify styles
import ICONS from './icons.js'
import THEME from './theme.js'
import './registerServiceWorker'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueCookies)
VueCookies.config('30d')

Vue.use(Vuetify, {
    theme: THEME,
    iconfont: 'mdi',
    icons: ICONS
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
