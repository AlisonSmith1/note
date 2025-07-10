<template>
  <div>
    <h2>關於Lana</h2>
    <div>
      <context title="自傳"
        ><p>
          　　我畢業於財經法律系，對法律相關的工作沒有太大的興趣，在接觸程式設計後，我發現自己對「建構與拆解系統」特別有熱情。於是我開始自學網頁開發，從
          HTML / CSS / JavaScript 入門，一步步進入 Vue、Node.js
          與後端資料庫的實作，過程中也練習使用 Git、部署到 Railway。
          我重視「理解」勝於「死背」，因此會花時間研究每個技術背後的邏輯，例如購物車如何運算、API
          怎麼串接、訂單系統怎麼組成。我也喜歡記錄學習過程，寫成學習筆記或文章。未來希望能加入一個技術導向的團隊，發揮我對實作與分析的強項，也持續成長。
        </p>
        <p>
          　　自2024年11月起，我自學前端技術，學習資源主要參考官方文件、教學影片及和ChatGPT
          討論並使用stack overflow釐清觀念。使用 HTML、CSS、JavaScript
          並學會使用 React 製作專案，後端則使用 Node.js + Express.js 串接
          MongoDB／ PostgreSQL資料庫，實作 Restful API、驗證機制與基本 CRUD
          操作。
          技術實作方面，自己測試獨立開發「買賣網站」，具備商品瀏覽與管理功能，並使用
          Git 進行版本控制與部署。也用Vue製作了簡單的 Todo
          應用，加深對元件邏輯與使用者互動設計的理解。
          我重視思考與細節，在開發過程中習慣規劃結構與資料流程，將產品完成。希望能，成為一位稱職的網頁工程師。"
        </p></context
      >
    </div>
    <div>
      <context title="聯絡方式"><p>Email：kainingyang22@gmail.com</p></context>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "關於我 | Lana 小網站",
  meta: [{ name: "description", content: "介紹本站作者與背景" }],
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
