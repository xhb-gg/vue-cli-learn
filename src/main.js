import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
// 引入全局样式
import './styles/index.scss'
import toast from './plugin/toast/toast.js'
import prompt from './plugin/dialogCustom/dialogCustom.js'
import 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { vueBaberrage } from 'vue-baberrage'

Vue.use(vueBaberrage)

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$toast = toast
Vue.prototype.$prompt = prompt

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
