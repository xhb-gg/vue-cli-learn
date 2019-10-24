import { setToken } from '@/utils/auth'

const user = {
  state: {
    token: '',
    userInfo: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setToken(token)
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {}
}

export default user
