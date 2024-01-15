// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/",
    },
  },

  devtools: { enabled: true },

  css: [
    "~/assets/css/blog.css",
    "~/assets/css/style.css",
    "bootstrap/dist/css/bootstrap.css",
  ],
});
