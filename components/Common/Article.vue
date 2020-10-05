<template>
  <nuxt-link
    class="article flex flex-col justify-between bg-white hover:translate-y-4"
    :class="{'no-margin': side, 'only-one': one}"
    :to="`/articulos/${articulo.slug}`">
    <div>
      <picture
        class="shadow-lg bg-gradient-to-r from-orange-300 to-orange-100">
        <source
          media="(min-width: 768px)"
          :data-srcset="medium ? articulo.imagen.formats.medium.url : articulo.imagen.formats.small.url">
        <source
          media="(min-width: 575px)"
          :data-srcset="articulo.imagen.formats.medium.url">
        <img
          class="lazyload article__img object-cover w-full h-full bg-gradient-to-r from-orange-300 to-orange-100"
          :class="{'small': side}"
          :data-srcset="articulo.imagen.formats.small.url"
          src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
          :alt="articulo.titulo">
      </picture>
      <!-- <img
        class="lazyload article__img object-cover w-full h-full bg-gradient-to-r from-orange-300 to-orange-100"
        :class="{'small': side}"
        :data-srcset="`${articulo.imagen.formats.small.url} 500w, ${articulo.imagen.formats.medium.url} 750w`"
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        :alt="articulo.titulo"
        sizes="500px, (min-width: 575px) 750px, (min-width: 1280px) 500px"> -->
      <!-- <img
        class="lazyload article__img object-cover w-full h-full bg-gradient-to-r from-orange-600 to-orange-400"
        :class="{'small': side}"
        :data-srcset="`${cloudinary}small_${articulo.imagen.hash}.jpg 500w, ${cloudinary}medium_${articulo.imagen.hash}.jpg 750w`"
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        :alt="articulo.titulo"
        sizes="(max-width: 500px) 500px, 750px"> -->
      <div class="px-4 py-3">
        <Tags :tags="tags"/>
        <h3 class="article__title font-display font-bold text-orange-900 mt-2">{{ articulo.titulo }}</h3>
      </div>
    </div>
    <div class="mt-3 mb-3 px-4 flex justify-between items-center">
      <AuthorCover :author="articulo.autor" :createdAt="articulo.createdAt" />
      <ArticleArrow />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "Articulo",
  props: {
    articulo: {
      type: Object,
      default: () => {}
    },
    side: {
      type: Boolean,
      default: false
    },
    one: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cloudinary: "https://res.cloudinary.com/dkdfpm2og/image/upload/"
    }
  },
  computed: {
    tags() {
      return this.articulo.etiquetas.split(',').map(tag => tag.trim());
    },
  }
}
</script>

<style lang="scss" scoped>
.article {
  border-radius: 30px;
  border-width: 3px;
  border-color: #FFF;
  overflow: hidden;
  outline: 0;
  --bg-opacity: 1;
  box-shadow: 0 0.332071px 2.21381px rgba(0,0,0,.0119), 0 0.798012px 5.32008px rgba(0,0,0,.0258), 0 1.50259px 10.0172px rgba(0,0,0,.0368), 0 2.68036px 17.869px rgba(0,0,0,.0479), 0 5.01331px 33.4221px rgba(0,0,0,.0621), 0 12px 80px rgba(0,0,0,.09);
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));

  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
  transition-duration: .15s;
  transition-timing-function: linear;

  // flex: 1 1 16rem;
  // margin: 20px;

  // @include respond(md) {
  //   flex: 0 1 16rem;
  // }

  // &.no-margin {
  //   flex: 1 1 100%;
  //   margin: 0;
  //   margin-bottom: 2rem;
  // }

  // &.only-one {
  //   flex: 0 1 100%;

  //   @include respond(sm) {
  //     flex: 0 1 400px;
  //   }
  // }

  &:hover,
  &:focus {
    border-color: theme('colors.orange.500');
    box-shadow: 0 0.332071px 1.57734px rgba(0,0,0,.0562291), 0 0.798012px 3.79056px rgba(0,0,0,.0807786), 0 1.50259px 7.13728px rgba(0,0,0,.1), 0 2.68036px 12.7317px rgba(0,0,0,.119221), 0 5.01331px 23.8132px rgba(0,0,0,.143771), 0 12px 57px rgba(0,0,0,.2);
    --transform-translate-y: -0.125rem;
  }

  &__img {
    height: 210px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-top: -2px;

    // &.small {
    //   height: 200px;
    // }

    // @include respond(xl) {
    //   height: 282px;
    // }
  }
}
</style>
