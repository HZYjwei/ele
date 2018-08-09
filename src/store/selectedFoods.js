export default {
  state: {
    foods: []
  },
  getters: {
    getSelected (state) {
      return state.foods
    }
  },
  mutations: {
    setSelected (state, newVal) {
      if (state.foods.length === 0) {
        state.foods = [newVal]
      } else {
        state.foods.push(newVal)
      }
    }
  },
  actions: {}
}
