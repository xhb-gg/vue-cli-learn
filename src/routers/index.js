import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index'),
      children: [
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index')
    }
  ]
})
