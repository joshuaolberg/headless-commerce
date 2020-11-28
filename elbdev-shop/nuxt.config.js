export default {
  srcDir: 'src/',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'elbdev-shop',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/imports.scss',
  ],

  // Global variables
  /*
  styleResources: {
    scss: [
      './src/assets/scss/variables.scss',
      './src/assets/scss/colors.scss',
    ]
  },
  */

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-shopify'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  shopify: {
    domain: 'elbdev.myshopify.com',
    storefrontAccessToken: '2015a04f9faf9795be368b343db2e5d5',
    unoptimized: false,
  },

  test: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
