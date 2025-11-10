<template>
  <article>
    <h1>作品集</h1>
    <section id="chatroom">
      <Context title="聊天室"
        ><div class="cover">
          <img src="" alt="封面圖片" />
        </div>
        <p>帳號:0000 <br />密碼:0000</p>
        <p>
          本專案是一套即時聊天室系統，提供使用者註冊、登入、多聊天室切換與即時訊息收發功能。後端使用
          Node.js 搭配 Express 與 Socket.IO，資料庫為
          PostgreSQL，實作使用者認證、聊天室管理與訊息儲存。前端採用 Vue
          3，設計聊天室列表、訊息區與輸入框，完整呈現使用者從登入到即時聊天的互動流程，展現前後端整合、即時通訊與資料建模能力。
        </p>
        <p
          style="
            display: flex;
            justify-content: center;
            position: relative;
            align-items: flex-end;
          "
        >
          <a href="https://chatroom-production-300c.up.railway.app/">產品頁</a>
          |
          <a href="https://github.com/AlisonSmith1/chatRoom.git">GitHub</a>
        </p>
      </Context>
    </section>
    <section id="js">
      <Context title="迷你購物平台（JavaScript + PostgreSQL）"
        ><div class="cover">
          <img src="/封面.PNG" alt="封面圖片" />
        </div>
        <p>信箱:0000@gmail.com <br />密碼:0000</p>
        <p>
          本專案是一套線上交易平台，提供使用者註冊、登入、購物車、購買紀錄與商家商品管理功能。後端以
          Node.js 搭配 Express 建立 RESTful API，資料庫使用
          PostgreSQL，設計五張資料表（使用者、商品、訂單、訂單項目、購物車項目），實作資料關聯與查詢。前端採用
          HTML、CSS 與原生
          JavaScript，實現商品瀏覽與互動操作，完整呈現使用者從瀏覽到下單的流程，展現前後端整合與資料建模能力。商品圖片上傳至雲端使用
          Cloudinary，增強系統實用性與完整性。
        </p>
        <p
          style="
            display: flex;
            justify-content: center;
            position: relative;
            align-items: flex-end;
          "
        >
          <a href="https://html-css-js-production.up.railway.app/">產品頁</a> |
          <a href="https://github.com/AlisonSmith1/HTML-CSS-JS.git">GitHub</a>
        </p>
      </Context>
    </section>
    <section id="react">
      <Context title="迷你購物平台（React + MongoDB）"
        ><div class="cover">
          <img src="/Project01.PNG" alt="封面圖片" />
        </div>
        <p>信箱:0000@gmail.com <br />密碼:000000</p>
        <p>
          本專案為我獨立開發的全端二手衣物交易平台，前端採用 React，後端以
          Node.js 搭配 MongoDB 建立伺服器與資料庫。實作功能包含使用者註冊 /
          登入、商品上架與編輯、商品詳細頁面及基本權限控制，並以 MongoDB
          建立結構化商品模型，完整實現 CRUD 操作。視覺設計以 #B8A398
          為主色，強化整體風格一致性，專案著重於資料流管理與功能邏輯整合。
        </p>
        <p
          style="
            display: flex;
            justify-content: center;
            position: relative;
            align-items: flex-end;
          "
        >
          <a href="https://html-css-react-production.up.railway.app/">產品頁</a>
          |
          <a href="https://github.com/AlisonSmith1/html-css-react.git"
            >GitHub</a
          >
        </p></Context
      >
    </section>
    <section id="vue">
      <Context title="ToDoItem（Vue）">
        <p
          style="
            display: flex;
            justify-content: center;
            position: relative;
            align-items: flex-end;
          "
        >
          <a href="https://github.com/AlisonSmith1/toDoItem.git">GitHub</a>
        </p></Context
      >
    </section>
  </article>
</template>

<script setup>
useHead({
  title: "首頁 | Nuxt 練習網站",
  meta: [
    { name: "description", content: "楊凱甯的作品" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ],
});
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

.cover {
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
}

.cover img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
