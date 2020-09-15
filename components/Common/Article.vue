<template>
  <nuxt-link class="hover:translate-y-4" :to="`/articulos/${articulo.slug}`">
    <div class="article bg-white">
      <img
        class="lazyload article__img object-cover w-full h-full bg-gradient-to-r from-orange-600 to-orange-400"
        :data-srcset="`${cloudinary}small_${articulo.imagen.hash}.jpg 500w, ${cloudinary}small_${articulo.imagen.hash}.jpg 750w`"
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        :alt="articulo.titulo"
        sizes="(max-width: 500px) 500px, 750px">
      <div class="px-4 py-3">
        <ul class="article__tags text-scripture-300 font-bold">
          <li class="hover:text-orange-500" v-for="(tag, index) in tags" :key="`tag${index + 1}`">{{ tag }}</li>
        </ul>
        <h4 class="article__title font-display font-bold text-sm text-scripture-600 uppercase mt-2">{{ articulo.titulo }}</h4>
        <div class="mt-5 flex justify-between items-center">
          <figure class="flex items-center">
            <figcaption class="autor__user flex items-center">
              <img
                :data-src="authorCover"
                src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                :alt="authorName"
                class="lazyload autor__photo bg-gradient-to-r from-orange-600 to-orange-400">
              <div class="autor__user-box">
                <p class="autor__user-name text-scripture-500">{{ authorName }}</p>
                <p class="autor__user-date text-scripture-400 ">{{ humanDate }}</p>
              </div>
            </figcaption>
          </figure>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-circle" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ED8936" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="12" cy="12" r="9" />
              <line x1="16" y1="12" x2="8" y2="12" />
              <line x1="16" y1="12" x2="12" y2="16" />
              <line x1="16" y1="12" x2="12" y2="8" />
            </svg>
          </div>
        </div>
      </div>
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
    }
  },
  async fetch() {
    const url = this
    .$cloudinary()
    .url(`small_${this.articulo.imagen.hash}`);

    this.pictureUrl = url;
  },
  data() {
    return {
      pictureUrl: "",
      cloudinary: "https://res.cloudinary.com/dkdfpm2og/image/upload/"
    }
  },
  computed: {
    tags() {
      return this.articulo.etiquetas.split(',').map(tag => `#${tag.trim()}`);
    },
    humanDate() {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(this.articulo.createdAt).toLocaleDateString('es-ES', options)
    },
    autor() {
      return this.articulo.autor;
    },
    authorName() {
      return this.autor ? this.autor.nombre : "Desconocido";
    },
    authorCover() {
      return this.autor ? `${this.cloudinary}${this.autor.avatar.hash}` : `${this.cloudinary}v1600203140/autor_desconocido_712790be28.png`;
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  border-radius: 18px;
  border-width: 3px;
  border-color: #FFF;
  overflow: hidden;
  outline: 0;
  --bg-opacity: 1;
  background-color: #fff;
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

  &:hover,
  &:focus {
    border-color: theme('colors.orange.500');
    box-shadow: 0 0.332071px 1.57734px rgba(0,0,0,.0562291), 0 0.798012px 3.79056px rgba(0,0,0,.0807786), 0 1.50259px 7.13728px rgba(0,0,0,.1), 0 2.68036px 12.7317px rgba(0,0,0,.119221), 0 5.01331px 23.8132px rgba(0,0,0,.143771), 0 12px 57px rgba(0,0,0,.2);
    --transform-translate-y: -0.125rem;
  }

  &__img {
    height: 282px;
  }

  &__tags {
    font-size: .8rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, max-content));
    grid-gap: 1rem;
  }
}

.autor {
  &__photo {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-right: 10px;
  }

  &__user-name {
    font-size: .75rem;
  }

  &__user-date {
    font-size: .65rem;
  }
}
</style>
