<template>
  <div class="articles py-16 bg-gradient-to-tr from-orange-200 to-white">
    <div class="container mx-auto relative z-10">
      <ArticleIcon class="block md:hidden mx-auto text-orange-900" style="width: 3rem; height: 3rem;"/>
      <h1 class="text-2xl text-orange-900 text-center uppercase">Artículos</h1>

      <template v-if="$fetchState.pending && !articles.length">
        <content-placeholders>
          <content-placeholders-text :lines="1" class="flex justify-center w-20 mx-auto mt-2"/>
          <content-placeholders-text :lines="2" class="w-full flex flex-col items-center px-12 mt-6"/>
        </content-placeholders>
        <ArticlePlaceholder class="mt-8 px-6" :articlesPerPage="articlesPerPage" grid="three" />
      </template>
      <template v-else-if="$fetchState.error">
        <inline-error-block :error="$fetchState.error" />
      </template>
      <template v-else>
        <Articles class="px-6 pb-12 md:pb-0" :articles="articles" :tags="tags" grid="three" />
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
import ArticleIcon from "~/assets/images/icons/article.svg?inline";

export default {
  components: {
    ArticleIcon
  },
  data() {
    return {
      articles: [],
      tags: [],
      startFrom: 0,
      articlesPerPage: 12,
      totalArticles: 0,
      numPages: 0,
      currentPage: 1
    }
  },
  async fetch() {
    const { articlesFromStrapi } = await import(
      /* webpackChunkName: "datalayer-pages-articles" */ "~/datalayer/pages/articulos/index"
    );
    const {
      articles,
      tags,
      totalArticles,
      numPages
    } = await articlesFromStrapi(this.totalArticles, this.numPages, this.articlesPerPage, this.$strapi);

    this.articles = this.articles.concat(articles);
    this.tags = tags;
    this.totalArticles = totalArticles;
    this.numPages = numPages;
  },
  fetchOnServer: false
}
</script>

<style lang="scss" scoped>
.articles {
  min-height: calc(100vh - 65px);
  margin-top: 0;
  @include respond(md) {
    min-height: calc(100vh - 85px - 65px);
    margin-top: 85px;
  }
}
</style>
