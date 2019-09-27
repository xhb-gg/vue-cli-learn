const user = {
    state: {
        token: '',
        userInfo: {}
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USERINFO(state, userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {}
}

export default user