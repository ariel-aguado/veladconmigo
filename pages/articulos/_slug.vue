<template>
  <div class="article-page pt-8 pb-16 bg-gradient-to-tr from-orange-200 to-white">
    <div class="md:container md:mx-auto">

      <!-- <template v-if="$fetchState.pending">
        <p class="font-display font-bold text-3xl text-orange-900 text-md py-6 pl-6">
          Cargando el artículo...
        </p>
      </template>
      <template v-else-if="$fetchState.error">
        <inline-error-block :error="$fetchState.error" />
      </template>
      <template v-else>
      </template> -->

      <div class="article-page__box px-0 md:px-6">
        <!-- Title -->
        <h1 class="article-page__title text-3xl text-orange-900 mt-6 px-6 md:px-0">{{article.titulo}}</h1>
        <!-- Content -->
        <div class="article-page__content px-6 mt-3 md:mt-0 md:px-0">
          <div class="article-page__img">
            <lazy-image
              ratio="16/9"
              :alt="article.titulo"
              :image="article.imagen"
              :caption="false"
              :widths="[245, 500, 750, 1000]"
              sizes="(max-width: 768px) 90vw, (max-width: 1023px) 708px, (min-width: 1024) 572px, (min-width: 1282px) 820px"
              extraclass="shadow-lg object-cover w-full h-full"
            />
          </div>
          <!-- Summary -->
          <h2 class="text-2xl text-orange-900 mt-8 px-0" >Resumen</h2>
          <blockquote class="article-page__summary italic prose mt-4 text-orange-700">
            <p style="margin: -10px">{{ article.resumen }}</p>
          </blockquote>

          <!-- Text -->
          <div v-html="content" class="prose mt-8 text-orange-900"></div>
          <!-- <div v-html="$md.render(article.contenido)" class="prose mt-8 text-orange-900"></div> -->

          <button v-if="gallery.length" class="mt-8 mx-auto lg:mx-0 px-4 py-2 font-display text-md shadow-md text-white bg-orange-600 cursor-pointer transition duration-300 rounded-lg flex justify-center items-center hover:bg-orange-500 hover:shadow-lg"
            @click="lgIndex = 0">
            <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span>Ver imágenes</span>
          </button>
        </div>

        <div class="article-page__author">
          <div class="article-page__author--details bg-orange-200 md:bg-orange-100 md:shadow-lg px-6 py-4">
            <AuthorCover :author="article.autor" authortype="article"/>
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
              <Tags :tags="tags" tagtype="author" />
            </div>
          </div>
        </div>
        <!-- Recent articles -->
        <div v-if="thereIsRecentArticles" class="article-page__recient-articles mt-4 px-6 md:px-0 pb-12 md:pb-0">
          <p class="font-display font-bold text-lg text-center px-2 uppercase text-orange-900 mb-4">Recientes</p>
          <Articles :articles="recentArticles" :grid="recentArticlesGridColums" :side="true" :count="false" />
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

    </div>
  </div>
</template>

<script>
import mapMetaInfo from '~/datalayer/helpers/mapMetaInfo';

export default {
  data() {
    return {
      lgIndex: null,
    }
  },
  async asyncData(context) {
    const { articleFromStrapi } = await import(
      /* webpackChunkName: "datalayer-pages-article" */ "~/datalayer/pages/articulos/_slug"
    );
    const {
      article,
      tags,
      recentArticles,
      recentArticlesGridColums,
      gallery,
      humanDate,
      readingTime,
      content
    } = await articleFromStrapi(context);

    return {
      article,
      tags,
      recentArticles,
      recentArticlesGridColums,
      gallery,
      humanDate,
      readingTime,
      content
    }
  },
  head() {
    return mapMetaInfo(
      {
        title: this.article.titulo,
        description: this.article.resumen,
        image: this.article.imagen.url,
        author: this.article.autor.nombre,
        slug: this.article.slug,
        createdAt: this.article.createdAt,
        updatedAt: this.article.updatedAt,
      },
      'article',
      this.$router.currentRoute
    );
  },
  // async fetch() {
  //   const slug = this.$route.params.slug;

  //   let query = qs.stringify(
  //     { _where:{ slug: slug }},
  //     { encode: false }
  //   );

  //   const articles = await this.$strapi.find('articulos', query);
  //   this.article = articles[0];

  //   if (this.article && this.article.galeria)
  //     this.gallery = this.article.galeria.map((g, index) => ({name: g.name.replace(g.ext, ''), url: g.url}))
  //     .sort(function (a, b) {
  //       if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  //       else if (a > b) return 1;
  //       return 0;
  //     })
  //     .map((g, index) => ({title: index + 1, url: g.url}));

  //   query = qs.stringify(
  //     { _where:[{ publico: true }, { '_id_ne': this.article._id }], _sort: 'createdAt:DESC', _limit: 3 },
  //     { encode: false }
  //   );

  //   this.recentArticles = await this.$strapi.find('articulos', query);
  // },
  // fetchOnServer: false,
  computed: {
    thereIsRecentArticles() {
      return this.recentArticles.length
    }
  }
}
</script>

<style lang="scss" scoped>
.article-page {
  min-height: calc(100vh - 65px);
  margin-top: 0;
  @include respond(md) {
    min-height: calc(100vh - 85px - 65px);
    margin-top: 85px;
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
    overflow: hidden;
    box-shadow: 0 0.332071px 1.57734px rgba(0,0,0,.0562291), 0 0.798012px 3.79056px rgba(0,0,0,.0807786), 0 1.50259px 7.13728px rgba(0,0,0,.1), 0 2.68036px 12.7317px rgba(0,0,0,.119221), 0 5.01331px 23.8132px rgba(0,0,0,.143771), 0 12px 57px rgba(0,0,0,.2);

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


