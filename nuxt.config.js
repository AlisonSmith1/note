export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "static",
  },
  modules: ["nuxt-gtag"],
  gtag: {
    id: "G-6ZBQK6VDJ7", // 換成你的 GA ID
    config: {
      anonymize_ip: true,
    },
  },
});
