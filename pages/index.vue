<template>
  <div>
    <h1>歡迎來到我的個人網站</h1>
  </div>
  <div>
    <p>嗨，我是楊凱甯</p>
    <p>一位轉職中的網頁開發學習者，熱愛動手實作與深入理解技術。</p>
    <p>目前專注於學習 Vue、Nuxt 與後端技術，目標成為全端工程師。</p>
  </div>
  <div>
    <Context title="技能與技術">
      <p>以下是我目前掌握的技能與技術：</p>
      <p>
        <strong>前端技術：</strong>
        HTML / CSS / JavaScript / Vue / Nuxt / React / RWD
      </p>
      <p>
        <strong>後端技術：</strong>
        Node.js（含 Express）/ MongoDB（含 Mongoose）/ PostgreSQL / RESTful API
        / 身分驗證（Authentication）
      </p>
      <p>
        <strong>部署與開發工具：</strong>
        Git / GitHub / NPM / Railway / pgAdmin4 / Cloudinary / ChatGPT
      </p>
      <p>
        <strong>正在學習：</strong>
        Docker / 開源貢獻 / Java
      </p>
    </Context>
  </div>

  <div>
    <Context title="實作專案">
      <ul>
        <li>
          <strong>迷你購物平台（JavaScript + PostgreSQL）</strong> - 使用原生 JS
          製作，搭配 Express 後端與 PostgreSQL 資料庫
          <NuxtLink to="/portfolio#js"> 查看作品</NuxtLink>
        </li>
        <li>
          <strong>迷你購物平台（React + MongoDB）</strong> - 使用 React
          前端，Express + MongoDB 架設後端與資料庫
          <NuxtLink to="/portfolio#react"> 查看作品</NuxtLink>
        </li>
      </ul>
    </Context>
  </div>
  <div>
    <Context title="我的故事">
      <p>
        我不是科班出身，但我對學習有極高熱情。從法經背景轉職為工程師的過程中，我一步步累積實作經驗，也樂於深入研究技術背後的原理。我相信「理解比記憶更重要」，寫過從購物車、訂單系統，到後端部署的各種練習專案。
      </p>
      <NuxtLink to="/about">關於我</NuxtLink></Context
    >
  </div>
</template>

<script setup>
useHead({
  title: "首頁 | Lana 的練習網站",
  meta: [{ name: "description", content: "這是用 Nuxt 建立的首頁範例" }],
});
</script>
<style scoped>
div {
  display: block;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
}
</style>
