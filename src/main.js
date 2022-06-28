import Vue from 'vue'

import AppLayout from './layout/index.vue'
import router from './router'
import store from './store'

import './mixins'
import './plugins'
import './thirdParty'

import './scss/style.scss'
import './assets/fonts/bebasneue.css'
import 'vue-swipe-actions/dist/vue-swipe-actions.css'

Vue.config.productionTip = false

const commitWindowWidth = () =>
  store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(
      (registration) => {
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        )
      },
      (err) => {
        console.log('ServiceWorker registration failed: ', err)
      }
    )
  })
}

new Vue({
  name: 'Root',
  router,
  store,
  mounted () {
    commitWindowWidth()
    window.addEventListener('resize', commitWindowWidth)
  },

  beforeDestroy () {
    window.removeEventListener('resize', commitWindowWidth)
  },
  render: (h) => h(AppLayout)
}).$mount('#app')
