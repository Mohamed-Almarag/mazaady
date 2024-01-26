export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mazaady',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/vue-multiselect.js', mode: 'client' },
    { src: '~/plugins/vue-toast.js', mode: 'client' },
    { src: '~/plugins/vee-validate.js', mode: 'client' },
    { src: '~/mixins/mixin.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: ['~/assets/css/_variables.scss', '~/assets/css/_mixins.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'vue-sweetalert2/nuxt',
    'nuxt-vuex-localstorage',
    'cookie-universal-nuxt',
  ],

  i18n: {
    lazy: true,
    loadLanguageAsync: true,
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en/index.js',
        dir: 'ltr',
      },
      {
        name: 'Arabic',
        code: 'ar',
        iso: 'ar-AR',
        file: 'ar/index.js',
        dir: 'rtl',
      },
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    fallbackLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
    rootRedirect: 'en',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    babel: {
      compact: true,
    },
    postcss: false,
  },
}
