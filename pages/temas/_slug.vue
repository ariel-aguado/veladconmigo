<template>
  <div class="tag-page py-16 bg-gradient-to-tr from-orange-200 to-white">
    <div class="container mx-auto relative z-10">
      <ArticleIcon class="block md:hidden mx-auto text-orange-900" style="width: 3rem; height: 3rem;"/>
      <h1 class="text-2xl text-orange-900 text-center uppercase">{{ title }}</h1>
      <template v-if="$fetchState.pending">
        <content-placeholders>
          <content-placeholders-text :lines="1" class="flex justify-center w-20 mx-auto mt-2"/>
        </content-placeholders>
        <ArticlePlaceholder class="mt-6 px-6" :articlesPerPage="9" grid="three" />
      </template>
      <template v-else-if="$fetchState.error">
        <inline-error-block :error="$fetchState.error" />
      </template>
      <template v-else>
        <Articles class="px-6 pb-12 md:pb-0" :articles="articles" :grid="articlesByTagGridColums" />
      </template>
    </div>
  </div>
</template>

<script>
const qs = require('qs');
import ArticleIcon from "~/assets/images/icons/article.svg?inline";
import capitalizeTitle from '~/datalayer/helpers/capitalizeTitle';

export default {
  components: {
    ArticleIcon
  },
  head() {
    return {
      title: `${capitalizeTitle(this.$route.params.slug)} - VeladConmigo`,
    }
  },
  data() {
    return {
      title: Object.freeze(this.$route.params.slug),
      articles: [],
      articlesByTagGridColums: 'three'
    }
  },
  async fetch() {
    const { articlesByTagFromStrapi } = await import(
      /* webpackChunkName: "datalayer-pages-tags" */ "~/datalayer/pages/temas/_slug"
    );
    const { articles, articlesByTagGridColums } = await articlesByTagFromStrapi(this);
    this.articles = articles;
    this.articlesByTagGridColums = articlesByTagGridColums;
  },
  fetchOnServer: false
}
</script>

<style lang="scss" scoped>
.tag-page {
  min-height: calc(100vh - 65px);
  margin-top: 0;
  @include respond(md) {
    min-height: calc(100vh - 85px - 65px);
    margin-top: 85px;
  }
}
</style>
