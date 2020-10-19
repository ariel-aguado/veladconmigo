<template>
  <div class="home">
    <Hero />
    <Verse />
    <!-- Last articles -->
    <div class="last-articles bg-orange-100 pt-8 pb-32 md:pb-12">
      <div class="container mx-auto z-10 relative">
        <h2 class="px-6 text-2xl text-orange-900 text-center uppercase">Artículos más recientes</h2>

        <template v-if="$fetchState.pending && !articles.length">
          <ArticlePlaceholder class="mt-10 px-6" :articlesPerPage="6" grid="three" />
        </template>
        <template v-else-if="$fetchState.error">
          <inline-error-block :error="$fetchState.error" />
        </template>
        <template v-else>
          <Articles class="mt-10 px-6" :articles="articles" grid="three" :count="false" />
        </template>

        <!-- <Articles class="mt-10 px-6" :articles="articles" grid="three" :count="false" /> -->

        <div class="last-articles__link-to-all flex justify-center mt-10 text-orange-900">
          <nuxt-link to="/articulos">
            <span class="font-display text-base">Ver todos los artículos</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" role="presentation" preserveAspectRatio="xMidYMid meet" fill="none" class="vd-button-icon icon stroke-current h-auto w-4 ml-2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const qs = require('qs');

export default {
  data() {
    return {
      articles: []
    }
  },
  async fetch() {

    const query = qs.stringify(
      { _where:{publico: true}, _sort: 'createdAt:DESC', _start: 0, _limit: 6 },
      { encode: false }
    );

    this.articles = await this.$strapi.find('articulos', query);
  },
  fetchOnServer: false,
    // async asyncData({$strapi}) {
    //   const query = qs.stringify(
    //     { _where:{publico: true}, _sort: 'createdAt:DESC', _limit: 6 },
    //     { encode: false }
    //   );
    //   const articles = await $strapi.find('articulos', query);
    //   return {
    //     articles: articles
    //   }
    // },
  computed: {
    gridCount() {
      const articles = this.articles.length;
      return articles == 1 ? 'one' : articles == 2 ? 'two' : 'three';
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 0;
  @include respond(md) {
    margin-top: 85px;
  }
}

.last-articles {

  &__link-to-all {
    a {
      border-width: 0;
      font-size: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.2;

      display: flex;
      align-items: center;
      font-weight: 600;
      outline: 0;
      border-radius: 9999px;
      transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
      transition-duration: .15s;
      transition-timing-function: linear;
      --transform-translate-x: 0;
      --transform-translate-y: 0;
      --transform-rotate: 0;
      --transform-skew-x: 0;
      --transform-skew-y: 0;
      --transform-scale-x: 1;
      --transform-scale-y: 1;
      transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
      padding: .5rem 1rem;

      span {
        padding-top: .25rem;
        padding-bottom: .25rem;
        border-color: theme('colors.orange.900');
        border-bottom-width: 3px;
        transition: border-color .15s linear;
      }

      svg {
        width: 1.5rem;
        stroke-width: 2.5;
        transition-property: transform;
        transition-duration: .15s;
        --transform-translate-x: 0;
        --transform-translate-y: 0;
        --transform-rotate: 0;
        --transform-skew-x: 0;
        --transform-skew-y: 0;
        --transform-scale-x: 1;
        --transform-scale-y: 1;
        transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
      }
    }

    a:hover svg{
      --transform-translate-x: 0.125rem;
    }

    a:hover,
    a:focus {
      color: theme('colors.orange.500');

      span {
        border-color: theme('colors.orange.500');
      }
    }
  }
}
</style>
