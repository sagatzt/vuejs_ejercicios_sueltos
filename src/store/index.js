import { createStore } from 'vuex'

export default createStore({
  state: {
    contador:100
  },
  mutations: {
    incrementar(state){
      state.contador++
    }
  },
  actions: {

  },
  modules: {
  }
})
