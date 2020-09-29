<template>
  <div class="articles py-16 bg-gradient-to-tr from-orange-200 to-white" style="margin-top: 85px;">
    <div class="container mx-auto relative z-10">
      <h1 class="text-2xl text-orange-900 text-center uppercase">{{ $route.params.slug }}</h1>

      <template v-if="$fetchState.pending && !articles.length">
        <content-placeholders>
          <content-placeholders-text :lines="1" class="flex justify-center w-20 mx-auto mt-2"/>
        </content-placeholders>
        <ArticlePlaceholder />
      </template>
      <template v-else-if="$fetchState.error">
        <inline-error-block error="Revisa la conexión. No se pudo acceder a los datos." />
        <!-- <inline-error-block :error="$fetchState.error" /> -->
      </template>
      <template v-else>
        <Articles :articles="articles" :grid="gridCount" />
      </template>
    </div>
  </div>
</template>

<script>
const qs = require('qs');

export default {
  head() {
    return {
      title: `${this.$route.params.slug} - VeladConmigo`,
    }
  },
  data() {
    return {
      articles: []
    }
  },
  async fetch() {

    const slug = this.$route.params.slug;

    let query = qs.stringify(
      { _where:{ 'etiquetas_contains': slug }},
      { encode: false }
    );

    this.articles = await this.$strapi.find('articulos', query);
  },
  fetchOnServer: false,
  computed: {
    gridCount() {
      const articles = this.articles.length;
      return articles == 1 ? 'one' : articles == 2 ? 'two' : 'three';
    },
    articlesCountText() {
      const count = this.articles.length;
      return count == 1 ? `${count} artículo` : `${count} artículos`;
    }
  }
}
</script>

<style lang="scss" scoped>
.articles {
  // @include liquid;
  min-height: calc(100vh - 85px - 65px);
}
</style>
