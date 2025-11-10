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
          　　我叫楊凱甯，畢業於僑光科技大學財經法律學系。大學四年級時，我以製作專題取代修課，與同學共同完成研究。那段經驗讓我發現自己喜歡動手實作、從零完成作品的成就感。
        </p>
        <p>
          　　畢業後，在他人的建議下，我決定轉職成為網頁工程師，並於 2024 年 11
          月開始自學前端技術。我主要參考官方文件、教學影片，並透過與 ChatGPT
          討論及 Stack Overflow
          釐清觀念。隨著基礎語法逐漸熟悉，我開始嘗試使用框架，從 Node.js 的
          Express 開始，讓作品能以更完整的網站形式呈現。
        </p>
        <p>
          　　目前我具備 HTML、CSS、JavaScript 的基礎，能運用 React 與 Vue
          進行專案開發；後端能使用 Node.js + Express.js 串接 MongoDB 與
          PostgreSQL，實作 RESTful API、使用者認證與基本 CRUD 功能。
        </p>
        <p>
          　　在開發過程中，我採小步迭代的方式前進，先完成最小可行版本，再持續優化。開發前會規劃資料結構與流程，過程中透過
          Git 進行版本控制，確保程式碼清晰且具維護性。
        </p>
        <p>
          　　未來，我希望能加入注重使用者體驗與產品品質的團隊，持續學習與精進技術，並與團隊共同打造有影響力的產品，成長為具備全端視野、能獨立思考與解決問題的工程師。
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
  title: "關於我 | 楊凱甯 小網站",
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
