const PrismicConfig = require("./prismic.config");
const getAppRoutes = require('./utils/getRoutes.js');

export default {
  mode: 'universal',
  env: {
    liveUrl: 'https://www.mateopg.com/'
  },
  server: {
    port: 3008
  },
  router: {
    middleware: 'i18n'
  },
  /*
  ** Headers of the page
  */
 head: {
  title: 'History of Places - Blog by Mateo Puig',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Learn about the history of our planet, places, buildings, and other things that were important in the past or that have historical value nowadays' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  script: [
    {
      innerHTML:
        '{ window.prismic = { endpoint: "' +
        PrismicConfig.apiEndpoint +
        '"} }'
    },
    { src: "//static.cdn.prismic.io/prismic.min.js" },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
    },
    { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" },
    { src: "/js/flickity.min.js" },
    { src: "/js/granim.min.js" },
    { src: "/js/smooth-scroll.min.js" },
  ],
  link: [
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700"
    },
    { rel: "stylesheet", href: "/css/bootstrap.css" },
    { rel: "stylesheet", href: "/css/socicon.css" },
    { rel: "stylesheet", href: "/css/iconsmind.css" },
    { rel: "stylesheet", href: "/css/theme.css" },
    { rel: "stylesheet", href: "/css/flickity.css" },
    { rel: "stylesheet", href: "/css/stack-interface.css" }
  ],
  __dangerouslyDisableSanitizers: ["script"]
},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  { src: '~plugins/vue-cookie-law.js', ssr: false },
  "~/plugins/text-utils-plugin.js",
  "~/plugins/i18n.js",
  '~/plugins/link-resolver.js',
  '~/plugins/html-serializer.js',
  '~/plugins/vue-social-sharing.js',    
  '~/plugins/disqus',
  '~/plugins/global.js'
],

sitemap: {
  hostname: 'https://mateopg.com',
},
bootstrapVue: {
  bootstrapCSS: false, // Or `css: false`
  bootstrapVueCSS: true // Or `bvCSS: false`
},
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
  "bootstrap-vue/nuxt",
  "@nuxtjs/axios",
  "nuxt-simple-line-icons",
  "@nuxtjs/pwa",
  '@nuxtjs/sitemap',
  [
    "@nuxtjs/google-analytics",
    {
      id: "UA-163502428-1"
    }
  ],
    ['@nuxtjs/date-fns']
],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    // https://nebulab.it/blog/create-fast-nuxtjs-website-prismic/
    concurrency: 4,
    routes: async function() {
      const appRoutes = getAppRoutes()
      return appRoutes
    }
  }
}
