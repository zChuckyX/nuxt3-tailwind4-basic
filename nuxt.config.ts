import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['@/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  runtimeConfig: {
    secretKey: process.env.SECRET_KEY,
    public: {
      urlKey: process.env.URL_KEY,
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'th',
      },
      bodyAttrs: {
        class: 'demo'
      },
      charset: 'utf-8',
      titleTemplate: '%s | Chucky - Nuxt.js',
      meta: [{
        name: 'author',
        content: 'Chucy'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ]
    }
  }
})
