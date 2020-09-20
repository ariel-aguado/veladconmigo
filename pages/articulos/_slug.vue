<template>
  <div class="article px-4 pt-8 pb-16 md:px-10" style="margin-top: 85px;">
    <div class="container mx-auto">
      <p v-if="$fetchState.error" class="text-center text-red-500 text-md py-6 px-4" >Error al cargar el artículo</p>
      <p v-else-if="$fetchState.pending" class="text-center text-orange-500 text-md py-6 px-4">
        Cargando el artículo...
      </p>
      <div v-else class="article__box">
        <h1 class="article__title text-3xl text-orange-900 mt-6 pr-2">{{article.titulo}}</h1>

        <div class="article__content">
          <img
            class="lazyload article__img object-cover w-full h-full bg-gradient-to-r from-orange-600 to-orange-400"
            :data-srcset="`${article.imagen.formats.medium.url} 750w, ${article.imagen.url}.jpg 1000w`"
            src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            :alt="article.titulo"
            sizes="(max-width: 500px) 500px, 750px">
          <div v-html="$md.render(article.contenido)" class="prose mt-8 text-orange-900"></div>
        </div>

        <div class="article__author">
          <div class="article__author--details bg-orange-100 md:bg-gradient-to-tr from-orange-100 to-orange-200 md:shadow-lg px-4 py-4">
            <AuthorCover :author="article.autor"/>
            <div class="flex justify-start items-center mt-3">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p class="text-xs text-orange-900 ml-1">{{ humanDate }}</p>
            </div>
            <div class="flex justify-start items-center mt-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p class="text-xs text-orange-900 ml-1">{{ readingTime }}</p>
            </div>
            <div class="mt-2 text-xs">
              <Tags :tags="article.etiquetas.split(',').map(tag => tag.trim())"/>
            </div>
          </div>
        </div>

        <div v-if="this.articlesOwner.length" class="article__author--last-articles mt-4">
          <p class="font-incbold text-center px-2 text-orange-900 mb-4">Artículos más recientes</p>
          <Articles :articles="articlesOwner" :side="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        article: {},
        articlesOwner: [],
        cloudinary: "https://res.cloudinary.com/dkdfpm2og/image/upload/"
      }
    },
    async fetch() {
      const articles = await this.$axios.$get(`https://strapi-velad-conmigo.herokuapp.com/articulos?slug=${this.$route.params.slug}`);
      this.article = articles[0];
      this.articlesOwner = await this.$axios.$get(`https://strapi-velad-conmigo.herokuapp.com/articulos?publico=true&_id_ne=${this.article._id}&autor._id=${this.article.autor._id}&_sort=createdAt:DESC&_limit=3`);
      console.log('article :>> ', this.article);
    },
    computed: {
      humanDate() {
        const options = { year: "numeric", month: "short", day: "numeric" }
        return new Date(this.article.createdAt).toLocaleDateString('es-ES', options)
      },
      readingTime() {
        const readingTime = require('reading-time');
        const stats = readingTime(this.article.contenido);
        return stats.text;
      }
    }
  }
</script>

<style lang="scss" scoped>
.article {

  @include respond(md) {
    @include lightLiquid;
  }

  &__box {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr;
  grid-template-areas:
  "title"
  "author"
  "content"
  "latest";
  grid-gap: 2rem;

  @include respond(md) {
    grid-template-columns: 1fr 320px;
    grid-template-areas:
    "title title"
    "content author"
    "content latest";
  }
  }

  &__img {
    max-width: 100%;
    max-height: 563px;
    border-radius: 30px;
  }

  &__title {
    grid-area: title;
  }

  &__content {
    grid-area: content;

    & .prose {
      max-width: 100%;

      @include respond(md) {
        max-width: 65ch;
      }
    }
  }

  &__author {
    grid-area: author;

    &--details {
      border-radius: 30px;
    }

    &--last-articles {
      grid-area: latest;
      border-radius: 30px;
    }
  }
}
</style>


