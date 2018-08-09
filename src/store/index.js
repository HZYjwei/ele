import Vue from 'vue'
import Vuex from 'Vuex'

import foodsModule from './selectedFoods'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userLogin: false,
    userName: undefined
  },
  getters: {
    getUserInfo: (state) => {
      if (state.userLogin && !Object.is(state.userName, undefined)) {
        return state.userName
      }
      return undefined
    }
  },
  mutations: {
    setSignIn: (state, userName) => {
      state.userName = userName
      state.userLogin = true
    },
    setSignOut: (state) => {
      state.userName = undefined
      state.userLogin = false
    }
  },
  actions: {

  },
  modules: {
    foods: foodsModule
  }
})

export default store
