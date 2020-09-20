<template>
  <div class="articles py-16 bg-gradient-to-tr from-orange-200 to-white" style="margin-top: 85px;">
    <div class="container mx-auto relative z-10">
      <h1 class="text-2xl text-orange-900 text-center uppercase">Artículos</h1>

      <!-- <p v-if="$fetchState.error" class="text-center text-red-500 text-md py-6 px-4" >Error al cargar los artículos</p>
      <p v-else-if="$fetchState.pending" class="text-center text-orange-500 text-md py-6 px-4">
        Cargando los artículos...
      </p>
      <div v-else>
        <p class="text-center text-xs font-display text-orange-900">{{ `${articles.length} artículos` }}</p>
        <div class="text-center mt-5 px-5">
          <Tags :tags="tags" />
        </div>
        <div class="mt-5">
          <Articles :articles="articles" />
        </div>
      </div> -->

      <p class="text-center text-xs font-display text-orange-900">{{ `${articles.length} artículos` }}</p>
      <div class="text-center mt-5 px-5">
        <Tags :tags="tags" />
      </div>
      <div class="mt-5">
        <Articles :articles="articles" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        articles: [],
        tags: []
      }
    },
    // async fetch() {
    //   this.articles = await this.$axios.$get('https://strapi-velad-conmigo.herokuapp.com/articulos?publico=true&_sort=createdAt:DESC');
    //   this.tags = this.articles.map(article => article.etiquetas.split(',').map(tag => tag.trim())).reduce((tags, tag) => tags.concat(tag));
    // },
    // fetchOnServer: false,
    // activated() {
    //   if (this.$fetchState.timestamp <= Date.now() - 60000) {
    //     this.$fetch()
    //   }
    // }
    async asyncData({app, error}) {
      const articles = await app.$axios.$get('https://strapi-velad-conmigo.herokuapp.com/articulos?publico=true&_sort=createdAt:DESC');
      if (!articles) return error('No existen artículos.')
      const tags = articles.map(article => article.etiquetas.split(',').map(tag => tag.trim())).reduce((tags, tag) => tags.concat(tag));
      return { articles, tags };
    }
  }
</script>

<style lang="scss" scoped>
.articles {
  @include liquid;
}
</style>
