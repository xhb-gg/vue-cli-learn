import { setToken } from '@/utils/auth'

const user = {
  state: {
    token: '',
    userInfo: {},
    name: 'xuhaibin'
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
  actions: {
    logout({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_USERINFO', {})
    },
    testAction({ state, commit }, name) {
      const o = {
        xu: 1,
        hai: 2,
        bin: 3
      }
      return o[name]
    }
  }
}

export default user
