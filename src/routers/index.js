import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/lazyLoad',
      name: 'map',
      component: () => import('../views/lazyLoad/index')
    },
    {
      path: '/setTest',
      name: 'set',
      component: () => import('../views/setTest/index')
    },
    {
      path: '/mapTest',
      name: 'mapTest',
      component: () => import('../views/mapTest/index')
    },
    {
      path: '/iframeTest',
      name: 'iframeTest',
      component: () => import('../views/iframeTest/index')
    },
    {
      path: '/cacheTest',
      name: 'cacheTest',
      component: () => import('../views/cacheTest/index')
    },
    {
      path: '*',
      name: '404',
      component: () => import('../views/404/404.vue')
    }
  ]
})

export default router
