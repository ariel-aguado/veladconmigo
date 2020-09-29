import {
  createSEOMeta
} from "./utils/seo.js";

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'VeladConmigo',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...createSEOMeta({
        description:
          'Descubre las verdades de la palabra de Dios con un enfoque bíblico e inspirado en un lema: Hablar donde la Biblia habla y callar donde la Biblia calla.',
      }),
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://strapi-velad-conmigo.herokuapp.com',
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
        rel: 'manifest',
        href: '/site.webmanifest',
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#ED8936',
    height: '4px',
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/lazysizes.client.js',
    '~/plugins/vue-placeholders.js',
    '~/plugins/vue-observe-visibility.client.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxtjs/strapi',
    '@nuxtjs/axios',
    '@nuxtjs/cloudinary',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
  ],
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://strapi-velad-conmigo.herokuapp.com/.*',
        handler: 'staleWhileRevalidate'
      },
    ],
  },
  markdownit: { html: true, injected: true },
  cloudinary: {
    cloudName: 'dkdfpm2og',
    // useComponent: true
  },
  strapi: {
    // Options
    url: 'https://strapi-velad-conmigo.herokuapp.com/',
  },
  axios: {},
  styleResources: {
    scss: [
      '~/assets/css/tokens.scss',
      '~/assets/css/breakpoints.scss',
      '~/assets/css/mixins.scss',
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  },
  generate: {
    fallback: true,
  },
  publicRuntimeConfig: {
    hostName: process.env.HOST_NAME,
  },
}
