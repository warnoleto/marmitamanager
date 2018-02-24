import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null
  },
  plugins: [createdPersistedState()],
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setAuthenticationInfo ({commit}, info) {
      commit('setToken', info.token)
      commit('setUser', info.user)
    }
  },
  getters: {
    isAuthenticated: state => {
      if (state.token) {
        return true
      } else {
        return false
      }
    }
  }
})
