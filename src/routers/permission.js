import router from './index'
import { getToken, koaToken } from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (getToken(koaToken)) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
