export const state = () => ({
  home: [],
  articules: [],
})

export const mutations = {
  setHome: (state, list) => (state.home = list),
  setArticules: (state, list) => (state.articules = list)
}

export const actions = {
  async nuxtServerInit({commit}, {$content}) {
    const home = await $content('home').fetch();
    const articules = await $content('articules').fetch();

    await commit('setHome', home);
    await commit('setArticules', articules);
  },
}
