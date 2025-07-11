<template>
  <article>
    <h2 style="display: inline-block; padding: 5px">Nuxt</h2>

    <section>
      <context title="自動建立路由">
        <p>在 Vue 裡你要自己裝 vue-router，然後一個一個手動寫路由表。</p>
        <p>
          但 Nuxt 幫你自動做好，只要把 .vue 檔案放進 pages
          資料夾，它就會自動變成網址路由。
        </p>
      </context>
    </section>

    <section>
      <context title="幫你規劃好專案架構">
        <p>用 Vue 開發時你要自己去想資料夾要怎麼分，還要手動 import 元件。</p>
        <p>
          Nuxt 幫你準備好了像 pages、components、layouts、composables
          等資料夾，也會自動載入元件，不用自己一個一個 import。
        </p>
      </context>
    </section>

    <section>
      <context title="SEO 設定很輕鬆">
        <p>Vue 要自己處理網頁標題和 meta 資訊，還要額外裝外掛。</p>
        <p>
          Nuxt 提供 useHead() 可以直接設定標題、描述、OG tag 等資訊，對 SEO
          很友善。
        </p>
        <CodeBlock language="html">{{ SEO }}</CodeBlock>
      </context>
    </section>

    <section>
      <context title="支援 SSR 和靜態網站產生">
        <p>
          如果用 Vue 想做伺服器渲染或靜態站，需要自己設定一堆 webpack 或 Vite
          的東西。
        </p>
        <p>
          Nuxt 只要一行設定就能搞定 SSR 或 SSG，幫你處理頁面預先載入、Hydration
          等技術細節。
        </p>
      </context>
    </section>

    <section>
      <context title="資料抓取與 API 也包辦了">
        <p>用 Vue 時要自己架 Express 或 Axios 去抓資料。</p>
        <p>
          Nuxt 可以直接在 server/api 資料夾寫 API，前端用 useFetch()
          就能簡單抓資料，還有快取功能。
        </p>
        <CodeBlock language="html">{{ API }}</CodeBlock>
      </context>
    </section>

    <section>
      <context title="套件整合超方便">
        <p>Vue 裡裝 Tailwind、Pinia、Axios 要自己寫設定檔。</p>
        <p>
          Nuxt 支援模組系統，只要安裝好，設定會自動幫你處理，plugin、middleware
          都配好了。
        </p>
      </context>
    </section>
  </article>

  <p style="display: flex; justify-content: center">page: 1</p>
</template>

<script setup>
const head = "head";
const SEO = `useHead({
  title: '我的網站',
  meta: [{ name: 'description', content: '簡單好用' }]
})
`;
const API = `const { data } = await useFetch('/api/posts')`;
</script>

<style scoped>
article {
  margin-bottom: 20px;
}

section {
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}
</style>
