export const state = () => ({
  active: false
});

export const mutations = {
  toggleActive(state) {
    state.active = !state.active;
  }
}

export const actions = {
  toggleActive({
    commit,
    state
  }) {
    commit('toggleActive');
  }
}

export const getters = {
  isActive(state) {
    return state.active;
  }
}
