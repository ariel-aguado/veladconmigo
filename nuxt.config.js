const dotenv = require('dotenv');
import mapMetaInfo from './utils/mapMetaInfo';
import { fetchSitemapRoutes } from "./utils/sitemap";

dotenv.config({ path: './config.env' });

export default async () => {
  const routes = await fetchSitemapRoutes();

  return {
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
        { property: 'og:site_name', content: 'VeladConmigo' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:handle', content: 'veladconmigo' },
        { property: 'twitter:creator', content: 'veladconmigo' },
        ...mapMetaInfo({
          title: 'VeladConmigo',
          description: 'VeladConmigo le ofrece un enfoque bíblico de las escrituras, con la única motivación de hablar donde la Biblia habla y callar donde la Biblia calla.',
          image: 'https://velad-conmigo.netlify.app/icon.png',
          },
          'home',
          {
            path: '/'
          }
        ).meta,
        { name: 'author', content: 'Ariel Aguado Albear' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://strapi-velad-conmigo.herokuapp.com' },
        { rel: 'preconnect', href: 'https://res.cloudinary.com' },
      ],
      script: [
        { src: 'https://cdn.gravitec.net/storage/71e332c013e0a2a872996331bb200bc4/client.js', async:"true" },
      ]
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
    css: ['~/assets/css/index.scss'],
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
      '~/plugins/vue-placeholders.js',
      '~/plugins/vue-observe-visibility.client.js',
      "~/plugins/lightGallery.client.js",
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
      [
        '@nuxtjs/pwa',
        {
          workbox: {
            clientsClaim: false,
            runtimeCaching: [
              {
                urlPattern: 'https://strapi-velad-conmigo.herokuapp.com/.*',
                handler: 'staleWhileRevalidate',
              },
            ],
          },
        },
      ],
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
      '@nuxtjs/svg',
      '@nuxtjs/style-resources',
      '@nuxtjs/strapi',
      '@nuxtjs/axios',
      '@nuxtjs/markdownit',
      '@nuxtjs/sitemap',
      '@nuxtjs/cloudinary',
    ],
    sitemap: {
      path: '/sitemap.xml',
      hostname: 'https://velad-conmigo.netlify.app',
      cacheTime: 1000 * 60 * 15,
      gzip: true,
      routes
    },
    markdownit: { html: true, injected: true },
    cloudinary: {
      cloudName: 'dkdfpm2og',
      useComponent: false,
      secure: true,
    },
    strapi: {
      url: 'https://strapi-velad-conmigo.herokuapp.com/',
    },
    axios: {},
    styleResources: {
      scss: [
        '~/assets/css/tokens.scss',
        '~/assets/css/mixins.scss',
      ],
    },
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {
      // extend(config, { isDev, isClient, loaders: { vue } }) {
      //   if (isClient) {
      //     vue.transformAssetUrls.img = ['data-src', 'src']
      //     vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      //   }
      // },
    },
    // router: {
    //   linkExactActiveClass: 'active',
    // },
    pwa: {
      manifest: {
        name: 'VeladConmigo',
        short_name: 'VeladConmigo',
        theme_color: "#ffffff"
      },
    },
    generate: {
      fallback: true,
      routes: routes
    },
  }
}
