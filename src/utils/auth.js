import Cookie from 'js-cookie'

export const koaToken = 'koa-token'

export function getToken() {
  return Cookie.get(koaToken)
}

export function setToken(token) {
  Cookie.set(koaToken, token)
}
