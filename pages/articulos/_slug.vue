<template>
  <div class="article-page pt-8 pb-16 bg-gradient-to-tr from-orange-200 to-white" style="margin-top: 85px;">
    <div class="md:container md:mx-auto">

      <template v-if="$fetchState.pending">
        <p class="font-montbold text-3xl text-orange-900 text-md py-6 pl-6">
          Cargando el artículo...
        </p>
      </template>
      <template v-else-if="$fetchState.error">
        <inline-error-block error="Revisa la conexión. No se pudo acceder a los datos." />
        <!-- <inline-error-block :error="$fetchState.error" /> -->
      </template>
      <template v-else>
        <div class="article-page__box px-0 md:px-6">
          <!-- Title -->
          <h1 class="article-page__title text-3xl text-orange-900 mt-6 px-6 md:px-0">{{article.titulo}}</h1>
          <!-- Content -->
          <div class="article-page__content px-6 mt-3 md:mt-0 md:px-0">
            <picture
              class="shadow-lg bg-gradient-to-r from-orange-300 to-orange-100">
              <source
                media="(min-width: 1280px)"
                :data-srcset="article.imagen.url"
                width="1000" height="563">
              <source
                media="(min-width: 640px)"
                :data-srcset="article.imagen.formats.medium.url"
                width="750" height="422">
              <img
                class="article-page__img lazyload object-cover w-full h-full"
                :data-srcset="article.imagen.formats.small.url"
                src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                :alt="article.titulo"
                width="500" height="282">
            </picture>
            <!-- <img
              :srcset="`${article.imagen.formats.small.url} 500w, ${article.imagen.formats.medium.url} 750w, ${article.imagen.url} 1000w`"
              sizes="(max-width: 1023px) 69vw, (max-width: 767px) 92vw, (max-width: 640px) 91vw, (max-width: 560px) 90vw, 830px"
              class="object-cover w-full h-full shadow-lg bg-gradient-to-r from-orange-300 to-orange-100"
              :alt="article.titulo"
              src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
              style="height: auto; max-height: 563px; border-radius: 30px;"> -->
            <!-- <img
              class="lazyload article-page__img object-cover w-full h-full shadow-lg bg-gradient-to-r from-orange-600 to-orange-400"
              :data-srcset="`${cloudinary}medium_${article.imagen.hash}.jpg 750w, ${cloudinary}${article.imagen.hash}.jpg 1000w`"
              src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
              :alt="article.titulo"
              sizes="(max-width: 750px) 750px, 1000px"> -->

            <!-- Summary -->
            <h2 class="text-2xl text-orange-900 mt-8 px-0" >Resumen</h2>
            <blockquote class="article-page__summary italic prose mt-4 text-orange-700">
              <p class="">{{ article.resumen }}</p>
            </blockquote>

            <!-- Text -->
            <div v-html="$md.render(article.contenido)" class="prose mt-8 text-orange-900"></div>

            <button v-if="gallery.length" class="mt-8 mx-auto lg:mx-0 px-4 py-2 font-montbold text-md shadow-md text-white bg-orange-600 cursor-pointer transition duration-300 rounded-lg flex justify-center items-center hover:bg-orange-500 hover:shadow-lg"
              @click="lgIndex = 0">
              <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span>Ver imágenes</span>
            </button>
          </div>

          <div class="article-page__author">
            <div class="article-page__author--details bg-orange-200 md:bg-orange-100 md:shadow-lg px-6 py-4">
              <AuthorCover :author="article.autor"/>
              <div class="flex justify-start items-center mt-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p class="text-sm text-orange-900 ml-1">{{ humanDate }}</p>
              </div>
              <div class="flex justify-start items-center mt-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p class="text-sm text-orange-900 ml-1">{{ readingTime }}</p>
              </div>
              <!-- Tags -->
              <div class="mt-2 text-sm">
                <Tags :tags="article.etiquetas.split(',').map(tag => tag.trim())"/>
              </div>
            </div>
          </div>
          <!-- Recent articles -->
          <div v-if="this.recentArticles.length" class="article-page__recient-articles mt-4 px-6 md:px-0">
            <p class="font-montbold text-lg text-center px-2 uppercase text-orange-900 mb-4">Recientes</p>
            <Articles :articles="recentArticles" :grid="gridCount" :side="true" :count="false" />
            <!-- <div class="flex flex-wrap justify-center mt-8">
              <Article v-for="article in recentArticles"
                :key="article._id"
                :articulo="article"
                :side="true"
                :one="recentArticles.length == 1" />
            </div> -->
          </div>

          <!-- Light Gallery -->
          <LightGallery
            v-if="gallery.length"
            :images="gallery"
            :index="lgIndex"
            :disable-scroll="true"
            @close="lgIndex = null"
          />
        </div>
      </template>

    </div>
  </div>
</template>

<script>
const qs = require('qs');
import { createSEOMeta } from "~/utils/seo";

export default {
  head() {
    const url = `articulos/${this.$route.params.slug}`;
    const { titulo: title, resumen: description } = this.article;
    console.log('this.article :>> ', this.article);
    const image = this.article && this.article.imagen ? this.article.imagen.formats.small.url : "";

    return {
      title,
      meta: createSEOMeta({ title, description, image, url }),
    }
  },
  data() {
    return {
      article: {},
      recentArticles: [],
      gallery: [],
      lgIndex: null,
      cloudinary: "https://res.cloudinary.com/dkdfpm2og/image/upload/"
    }
  },
  async fetch() {
    const slug = this.$route.params.slug;

    let query = qs.stringify(
      { _where:{ slug: slug }},
      { encode: false }
    );

    // const articles = await this.$axios.$get(`https://strapi-velad-conmigo.herokuapp.com/articulos?slug=${slug}`);
    const articles = await this.$strapi.find('articulos', query);
    this.article = articles[0];

    if (this.article && this.article.galeria)
      // this.gallery = this.sortedGallery(this.article.galeria.map(g => g.url))
      // .map((image, index) => ({title: `${index + 1}`, url: image}));
      this.gallery = this.article.galeria.map((g, index) => ({name: g.name.replace(g.ext, ''), url: g.url}))
      .sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        else if (a > b) return 1;
        return 0;
      })
      .map((g, index) => ({title: index + 1, url: g.url}));

    // this.recentArticles = await this.$axios.$get(`https://strapi-velad-conmigo.herokuapp.com/articulos?publico=true&_id_ne=${this.article._id}&_sort=createdAt:DESC&_limit=3`);

    query = qs.stringify(
      { _where:[{ publico: true }, { '_id_ne': this.article._id }], _sort: 'createdAt:DESC', _limit: 3 },
      { encode: false }
    );

    this.recentArticles = await this.$strapi.find('articulos', query);

    console.log('article :>> ', this.article);
    console.log('recentArticles :>> ', this.recentArticles);
  },
  fetchOnServer: false,
  // async asyncData({app, route, error}) {
  //   // Get the slug from the route
  //   const slug = route.params.slug;
  //   const articles = await app.$axios.$get(`https://strapi-velad-conmigo.herokuapp.com/articulos?slug=${slug}`);
  //   if (!articles) return error('No existen artículos.')
  //   const article = articles[0];
  //   const recentArticles = await app.$axios.$get(`https://strapi-velad-conmigo.herokuapp.com/articulos?publico=true&_id_ne=${article._id}&_sort=createdAt:DESC&_limit=3`);
  //   console.log('recentArticles :>> ', recentArticles);
  //   return { article, recentArticles };
  // },
  computed: {
    humanDate() {
      const options = { year: "numeric", month: "short", day: "numeric" }
      return new Date(this.article.createdAt).toLocaleDateString('es-ES', options)
    },
    readingTime() {
      const readingTime = require('reading-time');
      const stats = readingTime(this.article.contenido);
      return stats.text.replace('read', 'de lectura');
    },
    gridCount() {
      const articles = this.recentArticles.length;
      return articles == 1 ? 'one' : articles == 2 ? 'two' : 'three';
    }
  },
  methods: {
    sortedGallery(gallery) {
      return gallery.sort(function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        else if (a > b) return 1;
        return 0;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.article-page {
  // @include lightLiquid;
  min-height: calc(100vh - 85px - 65px);

  &__box {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr;
    grid-template-areas:
    "title"
    "author"
    "content"
    "latest";
    grid-gap: 2.5rem;

    @include respond(lg) {
      grid-template-columns: 1fr 320px;
      grid-template-areas:
      "title title"
      "content author"
      "content latest";
    }
  }

  &__title {
    grid-area: title;
  }

  &__summary {
    padding: 32px;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 50%;
      height: 25px;
      border-style: double;
      border-color: theme('colors.orange.500');
    }

    &::before {
      border-width: 6px 0px 0px 6px;
      margin-left: -30px !important;
      margin-top: -20px !important;
    }

    &::after {
      float: right;
      border-width: 0px 6px 6px 0px;
      margin-right: -30px !important;
      margin-top: 0px !important;
    }
  }

  &__img {
    height: auto;
    border-radius: 30px;
    max-height: 390px;

    @include respond(lg) {
      max-height: 308px;
    }

    @include respond(xl) {
      max-height: 468px;
    }
  }

  &__content {
    grid-area: content;

    & .prose {
      max-width: 100%;

      @include respond(md) {
        max-width: 70ch;
      }
    }
  }

  &__author {
    grid-area: author;
    // margin-left: -1.5rem;
    // margin-right: -1.5rem;

    // @include respond(md) {
    //   margin-left: 0;
    //   margin-right: 0;
    // }

    &--details {
      border-radius: 30px;
      border-radius: 0;

      @include respond(md) {
        border-radius: 30px;
      }
    }

  }

  &__recient-articles {
    grid-area: latest;
    border-radius: 30px;
  }
}
</style>


