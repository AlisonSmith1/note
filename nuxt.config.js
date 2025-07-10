export default defineNuxtConfig({
  ssr: true, // 可寫可不寫，預設就是 true
  nitro: {
    preset: "static", // ✅ 這才是 Nuxt 3 用來產生純靜態網站的寫法
  },
});
