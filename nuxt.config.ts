// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/icon',
    '@pinia/nuxt'
  ],
  css: ['./assets/css/tailwind.css'],
  typescript: {
    strict: true,
  },
})



