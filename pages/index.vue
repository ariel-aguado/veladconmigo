<template>
  <div style="margin-top: 85px;">
    <Hero />
    <Verse />
    <!-- Last articles -->
    <div class="last-articles bg-orange-100 pt-8 pb-16">
      <div class="container mx-auto z-10 relative">
        <h2 class="px-6 text-2xl text-orange-900 text-center uppercase">Artículos más recientes</h2>

        <template v-if="$fetchState.pending && !articles.length">
          <ArticlePlaceholder class="mt-10 px-6" :articlesPerPage="2" grid="two" />
          <ArticlePlaceholder class="mt-8 px-6" :articlesPerPage="3" grid="three" />
        </template>
        <template v-else-if="$fetchState.error">
          <inline-error-block error="Revisa la conexión. No se pudo acceder a los datos." />
          <!-- <inline-error-block :error="$fetchState.error" /> -->
        </template>
        <template v-else>
          <Articles class="mt-10 px-6" :articles="articles.slice(0,2)" grid="two" :count="false" :medium="true"/>
          <Articles class="mt-8 px-6" :articles="articles.slice(2,5)" grid="three" :count="false" :noArticlesTop="true" />
        </template>

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
      articles: [],
      limitTo: 6,
    }
  },
  async fetch() {

    const query = qs.stringify(
      { _where:{publico: true}, _sort: 'createdAt:DESC', _start: 0, _limit: this.limitTo },
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
  }
}
</script>

<style lang="scss" scoped>
.last-articles {
  // @include liquid;

  // &::after {
  //   background: none;
  //   z-index: 1;
  //   height: 1160px;

  //   @include respond(md) {
  //     background: linear-gradient(28deg,#fff,hsla(0,0%,100%,.95) 55%,hsla(0,0%,100%,.2));
  //   }
  // }

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

.content-placeholder-article {
  // width: 16rem;
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  padding: 3px;

  flex: 1 1 16rem;

  @include respond(md) {
    flex: 0 1 16rem;
  }

  &__image {
    border-radius: 20px;
    height: 200px;

    @include respond(md) {
      height: 282px;
    }
  }

  &__cover,
  &__arrow {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  &__name-date {
    width: 100%;
    flex: 0 1 50%;
    text-align: left;
    margin-right: auto;
    margin-left: 10px;

    &.vue-content-placeholders-text .vue-content-placeholders-text__line {
      margin-bottom: 0 !important;
    }
  }
}
</style>
