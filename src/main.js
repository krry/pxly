import '@mdi/font/css/materialdesignicons.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import './assets/styles/main.styl' // wraps vuetify styles
import ICONS from './icons.js'
import THEME from './theme.js'
import './registerServiceWorker'
import i18n from './i18n'

Vue.config.productionTip = false

// apply cookie middleware
Vue.use(VueCookies)
VueCookies.config('30d')

// apply vuetify templating middleware
Vue.use(Vuetify, {
    theme: THEME,
    iconfont: 'mdi',
    icons: ICONS
})

// apply router middleware
Vue.use(VueRouter)

// components to route to
import Previously from './components/Previously.vue'
import Presently from './components/Presently.vue'
import Possibly from './components/Possibly.vue'
import Home from './components/Home.vue'
import store from './store'

// routes to the components
const routes = [
    { path: '/', component: Home },
    { path: '/prev', component: Previously },
    { path: '/pres', component: Presently },
    { path: '/poss', component: Possibly }
]

// instantiate router with options
const router = new VueRouter({
  routes // short for `routes: routes`
  //
  // add'l opts go here
  //
})

new Vue({
    i18n,

    // inject the router with routes opts
    // whole app is router-aware
    router,

    store,
    render: h => h(App)
}).$mount('#app')
