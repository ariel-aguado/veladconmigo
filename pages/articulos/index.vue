<template>
  <div class="articles py-16 bg-gradient-to-tr from-orange-200 to-white" style="margin-top: 85px;">
    <div class="container mx-auto relative z-10">
      <h1 class="text-2xl text-orange-900 text-center uppercase">Artículos</h1>

      <template v-if="$fetchState.pending && !articles.length">
        <content-placeholders>
          <content-placeholders-text :lines="1" class="flex justify-center w-20 mx-auto mt-2"/>
          <content-placeholders-text :lines="2" class="w-full flex flex-col items-center px-12 mt-6"/>
        </content-placeholders>
        <ArticlePlaceholder class="mt-8 px-6" :articlesPerPage="articlesPerPage" grid="three-flex" />
      </template>
      <template v-else-if="$fetchState.error">
        <!-- <inline-error-block :error="$fetchState.error" /> -->
        <inline-error-block error="Revisa la conexión. No se pudo acceder a los datos." />
      </template>
      <template v-else>
        <Articles class="px-6" :articles="articles" :tags="tags" grid="three-flex" />
      </template>

      <!-- In case of pagination -->
      <!-- <template v-if="$fetchState.pending && articles.length">
        <ArticlePlaceholder :articlesPerPage="articlesPerPage" />
      </template> -->

    </div>
  </div>
</template>

<script>
const qs = require('qs');

export default {
  data() {
    return {
      articles: [],
      tags: [],
      startFrom: 0,
      articlesPerPage: 9,
      totalArticles: 0,
      numPages: 0,
      currentPage: 1
    }
  },
  async fetch() {

    if (this.totalArticles == 0) {
      const articlesCount = await this.$strapi.count('articulos');
      if (articlesCount == 0) throw new Error('No se encontraron artículos');
      this.totalArticles = articlesCount;
      this.numPages = Math.ceil(this.totalArticles / this.articlesPerPage);
    }

    const query = qs.stringify(
      { _where:{ publico: true }, _sort: 'createdAt:DESC' },
      { encode: false }
    );
    // const query = qs.stringify(
    //   { _where:{ publico: true }, _sort: 'createdAt:DESC', _start: this.startFrom, _limit: this.articlesPerPage },
    //   { encode: false }
    // );

    const articles = await this.$strapi.find('articulos', query);
    console.log('articles count :>> ', articles.length);

    // if (articles.length) this.startFrom += this.articlesPerPage;

    this.articles = this.articles.concat(articles);
    this.tags = [...new Set(this.articles.map(article => article.etiquetas.split(',').map(tag => tag.trim())).reduce((tags, tag) => tags.concat(tag)))];
  },
  fetchOnServer: false,
  computed: {
    articlesCountText() {
      const count = this.articles.length;
      return count == 1 ? `${count} artículo` : `${count} artículos`;
    },
    gridCount() {
      const articles = this.articles.length;
      return articles == 1 ? 'one' : articles == 2 ? 'two' : 'three';
    },
  }
  // methods: {
  //   lazyLoadArticles(isVisible) {
  //     if (isVisible) {
  //       if (this.currentPage < this.numPages) {
  //         this.currentPage++;
  //         this.$fetch();
  //       }
  //     }
  //   }
  // }
  // activated() {
  //   if (this.$fetchState.timestamp <= Date.now() - 60000) {
  //     this.$fetch()
  //   }
  // }
  // async asyncData({app, error}) {
  //   const articles = await app.$axios.$get('https://strapi-velad-conmigo.herokuapp.com/articulos?publico=true&_sort=createdAt:DESC');
  //   if (!articles) return error('No existen artículos.')
  //   const tags = [...new Set(articles.map(article => article.etiquetas.split(',').map(tag => tag.trim())).reduce((tags, tag) => tags.concat(tag)))];
  //   return { articles, tags };
  // }
}
</script>

<style lang="scss" scoped>
.articles {
  // @include liquid;
  min-height: calc(100vh - 85px - 65px);
}
</style>
