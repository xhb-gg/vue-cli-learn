import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: '/login',
      component: () => import('../views/home/index'),
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index')
    },
    {
      path: '/plugin',
      name: 'plugin',
      component: () => import('../views/plugin/index')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/map/index')
    }
  ]
})
