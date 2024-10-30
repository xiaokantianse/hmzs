import { loginAPI } from '@/api/user'
import { setToken, getToken, removeToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: getToken() || ''
  },
  mutations: {
    updateToken (state, newToken) {
      state.token = newToken
      setToken(newToken)
    },
    removeToken (state) {
      state.token = ''
      removeToken()
    }
  },
  actions: {
    async loginAction (store, data) {
      const res = await loginAPI(data)
      store.commit('updateToken', res.data.token)
    }
  }
}
