<template>
  <article>
    <h2>關於Lana</h2>

    <section>
      <context title="基本資料">
        <p>姓名：楊凱甯</p>
        <p>學歷：僑光科技大學 財經法律學系，2024 年畢業</p>
        <p>出生：2002年1月</p>
        <p>通訊地址：台中市太平區</p>
        <p>聯絡電話：0968-990-822</p>
        <p>電子郵件：kainingyang22@gmail.com</p>
        <p>求職目標：網頁工程師</p>
      </context>
    </section>

    <section>
      <context title="軟技能">
        <p>熱愛學習，能快速吸收新知識。</p>
        <p>積極解決問題，具備抗壓能力。</p>
      </context>
    </section>

    <section>
      <context title="未來目標">
        <p>
          成為全端工程師，深入了解各環節細節，從而獲得更多成就感與專業成長。
        </p>
      </context>
    </section>

    <section>
      <context title="自傳">
        <p>
          我畢業於財經法律系，對法律相關的工作沒有太大的興趣，在接觸程式設計後，我發現自己對「建構與拆解系統」特別有熱情。
          在大學期間，我曾與同學合作完成「借名登記」專題，團隊採取開放討論的合作模式，大家自由提出想法，並透過蒐集文獻、彼此溝通與整合，與指導老師多次討論調整，順利完成專題。
          專題經驗讓我更習慣思考脈絡、理解制度背後的邏輯，也培養了良好的溝通與協作習慣。
          畢業後我開始自學網頁開發，從 HTML / CSS / JavaScript 入門，一步步進入
          Vue、Node.js 與後端資料庫的實作，過程中也練習使用 Git、部署到
          Railway。
          我重視「理解」勝於「死背」，因此會花時間研究每個技術背後的邏輯，例如購物車如何運算、API
          怎麼串接、訂單系統怎麼組成。
          我也喜歡記錄學習過程，寫成學習筆記或文章。未來希望能加入一個技術導向的團隊，發揮我對實作與分析的強項，也持續成長。
        </p>
        <p>
          自 2024 年 11
          月起，我自學前端技術，學習資源主要參考官方文件、教學影片及和 ChatGPT
          討論，並使用 Stack Overflow 釐清觀念。 使用 HTML、CSS、JavaScript
          並學會使用 React 製作專案，後端則使用 Node.js + Express.js 串接
          MongoDB／PostgreSQL 資料庫，實作 Restful API、驗證機制與基本 CRUD
          操作。
          技術實作方面，自己測試獨立開發「買賣網站」，具備商品瀏覽與管理功能，並使用
          Git 進行版本控制與部署。 也用 Vue 製作了簡單的 Todo
          應用，加深對元件邏輯與使用者互動設計的理解。
          我重視思考與細節，在開發過程中習慣規劃結構與資料流程，將產品完成。希望能成為一位稱職的網頁工程師。
        </p>
      </context>
    </section>

    <section>
      <context title="連結 Links">
        <p>
          GitHub：<a
            href="https://github.com/AlisonSmith1"
            target="_blank"
            rel="noopener noreferrer"
            >https://github.com/AlisonSmith1</a
          >
        </p>
      </context>
    </section>
  </article>
</template>

<script setup>
useHead({
  title: "關於我 | Lana 小網站",
  meta: [{ name: "description", content: "介紹本站作者與背景" }],
});
</script>

<style scoped>
article {
  margin-bottom: 20px;
}

section {
  margin-bottom: 20px;
}

p {
  text-indent: 1.5em;
}

a {
  text-decoration: underline;
  color: #007acc;
}

a:hover {
  color: #004a99;
}
</style>
