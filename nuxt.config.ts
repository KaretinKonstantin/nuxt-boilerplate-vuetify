// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/eslint',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'definePiniaStore'],
      },
    ],
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.BACKEND_API_ENDPOINT,
      base: process.env.BASE_URL,
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  build: {
    transpile: ['vuetify'],
  },
  typescript: {
    typeCheck: true,
  },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
  devtools: { enabled: true },
})
