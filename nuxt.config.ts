// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/Nuxt-blog-API/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap",
        },
      ],
    },
  },

  devtools: { enabled: true },

  css: [
    "~/assets/css/blog.css",
    "~/assets/css/style.css",
    "bootstrap/dist/css/bootstrap.css",
  ],

  ssr: true,

  experimental: {
    payloadExtraction: true,
  },
});
