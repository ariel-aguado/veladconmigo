<template>
  <div class="last-articles bg-white py-16">
    <div class="container mx-auto z-10 relative">
      <h2 class="text-2xl text-orange-900 text-center uppercase">Artículos más recientes</h2>

      <template v-if="$fetchState.pending">
        <p class="text-center text-orange-500 text-md py-6 px-4">
          Cargando los artículos...
        </p>
      </template>
      <template v-else-if="$fetchState.error">
        <p class="text-center text-red-500 text-md py-6 px-4" >Error al cargar los artículos</p>
      </template>
      <template v-else>
        <div class="last-articles__list mt-12"
          :class="{'only-one': articles.length == 1}">
          <div class="last-articles__article"
            v-for="article in articles"
            :key="article._id">
            <Article :articulo="article" />
          </div>
        </div>
      </template>

      <div class="last-articles__link-to-all flex justify-center mt-10 text-orange-900">
        <nuxt-link to="/articulos">
          <span class="font-display text-base">Ver todos los artículos</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" role="presentation" preserveAspectRatio="xMidYMid meet" fill="none" class="vd-button-icon icon stroke-current h-auto w-4 ml-2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LastArticles",
  data() {
    return {
      articles: []
    }
  },
  async fetch() {
    this.articles = await this.$axios.$get('https://strapi-velad-conmigo.herokuapp.com/articulos?publico=true&_sort=createdAt:DESC');
  },
  fetchOnServer: false
}
</script>

<style lang="scss" scoped>
.last-articles {
  position: relative;
  overflow: hidden;
  z-index: 10;

  &::before,
  &::after {
    position: absolute;
    width: 110%;
    top: -9rem;
    content: " ";
    box-sizing: border-box;
    border: 0 solid;
  }

  &::before {
    height: 900px;
    background: url(~assets/images/patterns/articles.svg);
    transform: rotate(-8deg);
    z-index: 0;
  }

  &::after {
    background: linear-gradient(28deg,#fff,hsla(0,0%,100%,.95) 55%,hsla(0,0%,100%,.2));
    z-index: 1;
    height: 1160px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__article {
    flex: 1 1 16rem;
    margin: 20px;

    @include respond(md) {
      flex: 0 1 16rem;
    }
  }

  &.only-one {
    &__article {
      flex: 0 1 100%;

      @include respond(sm) {
        flex: 0 1 400px;
      }
    }
  }

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
