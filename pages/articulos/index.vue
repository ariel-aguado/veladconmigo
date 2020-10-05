<template>
  <div class="articles py-16 bg-gradient-to-tr from-orange-200 to-white"
    style="min-height: calc(100vh - 85px - 65px); margin-top: 85px;">
    <div class="container mx-auto relative z-10">
      <h1 class="text-2xl text-orange-900 text-center uppercase">Artículos</h1>

      <template v-if="$fetchState.pending && !articles.length">
        <content-placeholders>
          <content-placeholders-text :lines="1" class="flex justify-center w-20 mx-auto mt-2"/>
          <content-placeholders-text :lines="2" class="w-full flex flex-col items-center px-12 mt-6"/>
        </content-placeholders>
        <ArticlePlaceholder class="mt-8 px-6" :articlesPerPage="articlesPerPage" grid="three" />
      </template>
      <template v-else-if="$fetchState.error">
        <!-- <inline-error-block :error="$fetchState.error" /> -->
        <inline-error-block error="Revisa la conexión. No se pudo acceder a los datos." />
      </template>
      <template v-else>
        <Articles class="px-6" :articles="articles" :tags="tags" grid="three" />
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

    const articles = await this.$strapi.find('articulos', query);

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
}
</script>
