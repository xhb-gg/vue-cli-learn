import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import toast from './plugin/toast.js'
import 'leaflet'
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false
Vue.prototype.$toast = toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
