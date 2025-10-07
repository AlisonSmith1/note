<template>
  <article>
    <h2>關於Lana</h2>

    <section>
      <context title="基本資料">
        <p>姓名：楊凱甯</p>
        <p>學歷：僑光科技大學 財經法律學系，2024 年畢業</p>
        <p>出生：2002年1月</p>
        <p>興趣：做遊戲</p>
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
          您好，我是楊凱甯，畢業於僑光科技大學財經法律學系。大學期間，我參與了「借名登記」專題，這段經歷讓我深刻體會到團隊合作與系統性思考的重要性。畢業後，我決定轉職成為一名網頁工程師，並於2024年11月開始自學前端技術。
          在自學過程中，我主要參考官方文件、教學影片，並透過與 ChatGPT 討論及
          Stack Overflow 釐清觀念。我熟悉 HTML、CSS、JavaScript，並運用 React 與
          Vue 框架進行專案開發；後端方面，能使用 Node.js + Express.js 串接
          MongoDB 與 PostgreSQL 資料庫，實作 RESTful API、使用者認證與基本 CRUD
          操作。
        </p>
        <p>
          在開發過程中，我會以小步迭代的方式前進，先快速完成最小可行版本，再根據需求逐步優化與擴充功能。這樣的做法能讓我在短時間內驗證想法、確保核心功能可行，同時保留彈性因應需求調整。
          雖然採取邊做邊改的方式，但我會在開始前先規劃基本的資料結構與流程，避免後期出現大規模返工。開發過程中，我善用
          Git 進行版本控制，將每次修改清楚紀錄，確保程式碼的可追溯性與維護性。
          透過這種「先有框架，再持續迭代」的方式，我能兼顧開發速度與系統穩定性。
          未來，我希望能加入一個注重使用者體驗與產品品質的團隊，將我對前端開發與系統設計的熱忱投入專案中，持續學習並精進技術，成長為一位具備全端視野、能獨立思考與解決問題的網頁工程師。
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
