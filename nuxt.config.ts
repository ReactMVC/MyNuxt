// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
