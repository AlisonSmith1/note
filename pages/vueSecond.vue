<template>
  <div>
    <NuxtLink to="/vue">第一頁</NuxtLink>
    <div>
      <context title="虛擬 DOM 是什麼？">
        <p>虛擬 DOM 是一種用 JavaScript 物件模擬 DOM 結構的技術。</p>
        <p>它不是實際畫面上的 DOM，而是一個輕量記憶體版本。</p>
        <p>主要目的是提升網頁效能，避免不必要的重繪。</p>
        <br />
        <p>
          當資料變更（如：this.count++）時，Vue 會產生新的虛擬 DOM，與舊的虛擬
          DOM 做比對（diff），找出差異，最後只更新有變動的真實 DOM。
        </p>
      </context>
    </div>
    <div>
      <context title="v-if / v-else-if / v-else 範例">
        <CodeBlock language="html">{{ templateIf }}</CodeBlock>
      </context>
    </div>
    <div>
      <context title="setup() 基本說明">
        <p><strong>1. ref()、reactive()：響應式資料</strong></p>
        <p>
          將數字、字串、布林等基本型別轉成響應式變數，讓畫面能隨資料變動而更新。
        </p>
        <CodeBlock language="html">{{ refAndReactive }}</CodeBlock>

        <p><strong>2. function：定義方法</strong></p>
        <p>可在 <code>setup()</code> 中撰寫函式，處理畫面邏輯或資料操作。</p>

        <p><strong>3. computed：計算屬性</strong></p>
        <CodeBlock language="html">{{ computed }}</CodeBlock>

        <p><strong>4. onMounted：掛載完成後執行</strong></p>
        <CodeBlock language="html">{{ onMounted }}</CodeBlock>

        <p>
          <strong>5. return：</strong>將要提供給 template 使用的資料與方法回傳，
          只有 return 出去的內容才可在畫面中使用。
        </p>
      </context>
    </div>
    <div>
      <context title="props vs emit 對照表">
        <p>
          <strong>資料方向：</strong> props 為「父 → 子」，emit 為「子 → 父」。
        </p>
        <p>
          <strong>用途：</strong> props 傳遞資料給子元件，emit
          用於通知父元件事件。
        </p>

        <p><strong>子元件使用：</strong></p>
        <ul>
          <li>props：用 <code>defineProps()</code> 接收資料</li>
          <li>emit：用 <code>defineEmits()</code> 宣告事件</li>
        </ul>

        <p><strong>父元件使用：</strong></p>
        <ul>
          <li>傳資料：<code>&lt;Child :title="myTitle" /&gt;</code></li>
          <li>監聽事件：<code>&lt;Child @send="handleSend" /&gt;</code></li>
        </ul>

        <p><strong>常見用途：</strong></p>
        <ul>
          <li>props：顯示文字、控制畫面內容、傳狀態</li>
          <li>emit：按鈕點擊、傳資料給父元件、通知操作</li>
        </ul>

        <p>
          <strong>是否雙向：</strong>預設單向，但可用 <code>v-model</code> +
          emit 模擬雙向資料流。
        </p>

        <p><strong>設計建議：</strong></p>
        <p>
          子元件的 props 僅負責接收與顯示資料，<br />
          **主要邏輯與狀態管理應由父元件負責**。
        </p>

        <br />
        <p><strong>小結：</strong></p>
        <p>props 是「給子元件的資料道具」，emit 是「子元件向父元件喊話」。</p>
      </context>
    </div>
    <div>
      <context title="其它常用語法補充">
        <p><strong>1. v-for 迴圈：</strong></p>
        <p>用來重複渲染一組清單資料（通常是陣列）。</p>
        <CodeBlock language="html">{{ vFor }}</CodeBlock>

        <p><strong>2. watch：</strong></p>
        <p>用來監聽資料變化，觸發對應邏輯。</p>
        <p>
          若要監聽物件或陣列的內部變動，需加上 <code>deep: true</code>。
          否則只會監聽引用改變（整個物件）。
        </p>
        <CodeBlock language="html">{{ watch }}</CodeBlock>
      </context>
    </div>
  </div>
  <p style="display: flex; justify-content: center">page: 2</p>
</template>

<script setup>
const vFor = `<div v-for="item in items" :key="item.id">{{ item.name }}</div>`;
const refAndReactive = `const count = ref(0);
const user = reactive({ name: 'Lana', age: 23 });
const todos = reactive([{ id: 1, task: '學 Vue' }]);
`;
const computed = `const doubleCount = computed(() => count.value * 2);`;
const onMounted = `onMounted(() => {
  console.log('元件已掛載');
});`;
const templateIf = `<template>
  <div>
    <p>分數：{{ score }}</p>

    <p v-if="score >= 90">優等</p>
    <p v-else-if="score >= 60">及格</p>
    <p v-else>不及格</p>
  </div>
</template>`;
const watch = `
import { ref, watch } from 'vue'

const user = ref({ name: 'Lana', age: 23 })

watch(
  user,
  (newVal) => {
    console.log('user 資料變了:', newVal)
  },
  { deep: true }
)
`;
</script>

<style scoped>
div {
  display: block;
  margin-bottom: 10px; /* 或你喜歡的距離 */
}
a {
  text-decoration: none;
}
</style>
