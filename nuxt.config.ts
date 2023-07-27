// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    productsBaseUrl: process.env.NUXT_PRODUCTS_BASE_URL
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {

    head: {
      title: 'NuxTail',
      meta: [
        {name: 'description', content: 'Nuxt-3 & Tailwind'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'}
      ],

    }
  }
})
