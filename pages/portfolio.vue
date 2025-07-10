<template>
  <div>
    <h1>作品集</h1>
    <div id="js">
      <Context title="迷你購物平台（JavaScript + PostgreSQL）">
        <img src="../public/封面.PNG" alt="封面圖片" />
        <p>信箱:0000@gmail.com <br />密碼:0000</p>
        <p>
          製作專案時，我把自己定位為顧客，想像顧客的需求，以顧客期望獲得的視覺畫面以及便利性呈現作品，本專案為一套具備註冊、登入、購物車、購買紀錄與商家商品管理功能的線上交易平台。後端以
          Node.js（JavaScript）搭配 Express 建立 RESTful API，資料庫使用
          PostgreSQL，共設計五張資料表（使用者、商品、訂單、訂單項目、購物車項目），實作基本資料關聯與查詢。前端採用
          HTML、CSS 與原生 JavaScript
          實現商品瀏覽與互動操作，完整呈現使用者從瀏覽到下單的交易流程，展現前後端整合與資料建模能力。上傳圖片至雲端使用Cloudinary。
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
    </div>
    <div id="react">
      <Context title="迷你購物平台（React + MongoDB）">
        <img src="../public/project01.png" alt="封面圖片" />
        <p>信箱:0000@gmail.com <br />密碼:000000</p>
        <p>
          本專案為由我獨立開發的全端二手衣物交易平台，採用 React
          製作前端頁面，並以 Node.js 搭配 MongoDB
          架設後端伺服器與資料庫。實作功能包含使用者註冊 /
          登入、商品上架與編輯、商品詳細頁面、以及基本的權限控制機制。資料以
          MongoDB 建立結構化商品模型，並實作完整的 CRUD 操作。視覺設計以 #B8A398
          為主色，提升整體風格一致性。專案著重於資料流管理與功能邏輯整合。
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
    </div>
    <div id="vue">
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
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "首頁 | Nuxt 練習網站",
  meta: [{ name: "description", content: "這是用 Nuxt 建立的首頁範例" }],
});
</script>
<style scoped>
div {
  display: block;
  margin-bottom: 10px; /* 或你喜歡的距離 */
}
a {
  text-decoration: none;
}

img {
  width: 400px;
  height: 200px;
}
</style>
