// export const state = () => ({
//   home: [],
//   articles: [],
// })

// export const mutations = {
//   setHome: (state, list) => (state.home = list),
//   setArticles: (state, list) => (state.articles = list)
// }

// export const actions = {
//   async nuxtServerInit({commit}, {$content}) {
//     const home = await $content('home').fetch();
//     const articles = await $content('articles').fetch();

//     await commit('setHome', home);
//     await commit('setArticles', articles);
//   },
// }
