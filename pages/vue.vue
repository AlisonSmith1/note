<template>
  <div>
    <h2 style="display: inline-block; padding: 5px">Vue</h2>
    <NuxtLink to="/vueAdvanced">第二頁</NuxtLink>
    <div>
      <context title="生命週期">
        <p>1. beforeCreate：元件尚未建立前</p>
        <p>2. created：元件已建立，資料與方法已就緒</p>
        <p>3. beforeMount：DOM 還未渲染到頁面上</p>
        <p>4. mounted：元件已掛載到頁面，可操作 DOM</p>
        <p>5. beforeUpdate：資料變動但尚未更新畫面</p>
        <p>6. updated：資料與畫面皆更新完成</p>
        <p>7. beforeUnmount：元件準備被移除</p>
        <p>8. unmounted：元件已從畫面上移除</p>
        <p style="color: red">
          before 系列主要用於資料檢查、初始化、錯誤處理等流程控制。
        </p></context
      >
    </div>
    <div>
      <context title="Vue 2 和 Vue 3 差異">
        <p>
          Vue 2 使用
          <code>Object.defineProperty()</code>
          建立響應式系統，每個屬性都必須獨立處理，較不靈活。
        </p>
        <p>
          Vue 3 改用
          <code>Proxy</code> 實現，能監聽整個物件或陣列變化，效能更佳，也更符合
          ES6 標準。
        </p>
      </context>
    </div>
    <div>
      <context title="Vue 基本概念">
        <div>
          <p>Vue 元件是一個可重複使用的畫面區塊。</p>
          <p>常用於一頁式網站、表單、區塊等 UI 元素。</p>

          <div style="border: 2px solid #42b983; padding: 10px; margin: 10px">
            <p><strong>#app：</strong>Vue 掛載的根容器</p>
            <div
              style="border: 2px dashed #35495e; padding: 10px; margin: 10px"
            >
              <p style="color: red">使用元件</p>
              <div style="border: 2px dotted #999; padding: 10px; margin: 10px">
                <p>template 區塊：元件的畫面結構</p>
              </div>
            </div>
          </div>
          <p><strong>定義：</strong> 使用 <code>template</code> 撰寫畫面</p>
          <p><strong>註冊：</strong> 匯入元件，並在父元件中命名註冊</p>
          <p style="color: red"><strong>使用：</strong> 透過自訂標籤插入元件</p>
        </div>
        <hr />
        <div>
          <h5>資料綁定（Data Binding）</h5>
          <p><code>{{}}</code> 插值語法，用於顯示變數內容。</p>
          <p>
            <code>:</code> 是 <code>v-bind</code> 的縮寫，綁定 HTML 屬性值，如
            <code>:src='imgUrl'</code>。
          </p>
          <p>
            <code>v-model</code>
            提供<strong>雙向綁定</strong>，常用於輸入欄位，讓畫面與資料同步。
          </p>
          <p><code>v-text</code> 設定文字內容，會覆蓋原本的 HTML。</p>
          <p><code>v-html</code> 可將內容以 HTML 呈現，**注意 XSS 風險**。</p>
        </div>
        <hr />
        <div>
          <h5>事件綁定（Event Binding）</h5>
          <p>
            使用 <code>@事件名稱='函式'</code> 綁定事件，例如
            <code>@click</code>、<code>@input</code> 等。
          </p>
          <p>讓元件能響應使用者操作，例如點擊、輸入、提交。</p>
          <p>相較原生 JS 的 <code>addEventListener</code>，語法更簡潔。</p>
          <ul>
            <li><code>@click</code>：點擊事件</li>
            <li><code>@input</code>：輸入變更</li>
            <li><code>@submit</code>：表單送出</li>
            <li><code>@change</code>：下拉選單等變更</li>
            <li><code>@keydown</code>：鍵盤按下</li>
            <li><code>@mouseover</code>：滑鼠移入</li>
          </ul>
        </div>
      </context>
    </div>
  </div>
  <p style="display: flex; justify-content: center">page: 1</p>
</template>

<style scoped>
div {
  display: block;
  margin-bottom: 10px; /* 或你喜歡的距離 */
}
a {
  text-decoration: none;
}
</style>
