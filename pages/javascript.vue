<template>
  <div>
    <h1>Javascript</h1>
    <div>
      <context style="text-decoration: none" title="什麼是 JavaScript？"
        ><p>
          JavaScript
          是一種程式語言，最一開始是為了「讓網頁動起來」而誕生的。你看到的按鈕點下去會跳出視窗、網頁滑動時會有動畫效果，這些背後很多都是靠
          JavaScript 寫的。
          <br />
          JavaScript 的程式通常叫做「腳本（script）」，可以直接寫在網頁的 HTML
          裡面，當網頁打開的時候就會自動跑起來。
          <br />
          雖然名字裡有個「Java」，但其實 JavaScript 跟 Java
          幾乎沒關係。一開始這門語言叫「LiveScript」，但那時候 Java
          很紅，開發者想說蹭一下熱度，把名字改成 JavaScript，讓大家覺得它是 Java
          的「小老弟」。結果後來 JavaScript
          自己也發展得不錯，變成一門獨立又重要的語言，標準規範叫做
          ECMAScript，根本跟 Java 沒什麼關聯。
          <br />
          有時你會聽到「Vanilla JavaScript」，意思就是用純原生的
          JavaScript，沒有用 jQuery 或其他框架。現在 JavaScript
          本身的功能越來越強，很多網站乾脆就直接用 Vanilla JavaScript 來開發。
          <br />
          每個瀏覽器（像是 Chrome、Firefox）都有自己的 JavaScript
          引擎，專門負責讀取和執行 JavaScript
          程式碼。如果你想知道瀏覽器支不支援某個功能，就是看它的 JavaScript
          引擎有沒有支援囉。
        </p>
      </context>
    </div>
    <div>
      <context style="text-decoration: none" title="什麼是 JavaScript？"
        ><p>
          一般來說， {{ script }}標籤會放在 HTML 頁面的最底部，這跟 CSS 的
          {{ link }} 放在 {{ head }} 裡是不一樣的喔。 <br />為什麼 JavaScript
          要放下面？因為這樣可以先讓網頁的 HTML 結構和 CSS
          樣式載入好，畫面就可以先顯示出來。這樣使用者點進網頁時，不用等
          JavaScript 下載完、跑完，才能看到內容。<br />
          想像一下：如果 JavaScript
          放在上面，網頁就會卡在那邊等它跑完，結果畫面一直是空白的，等太久可能使用者就直接關掉啦！但如果你把
          {{ script }}
          放在最下面，瀏覽器就可以先把文字、圖片、排版都顯示出來，JavaScript
          再慢慢跑它的功能也沒關係，至少人家打開網頁是有東西看的～<br />
          所以，想要讓使用者體驗更順，通常 {{ script }} 都是擺在網頁的最後面啦！
        </p>
      </context>
    </div>
    <div>
      <context
        title="常見的 JavaScript 函數
"
        ><p>
          這些是寫 JavaScript
          時很常用的一些基本功能，先搞懂它們會讓你入門更輕鬆！
        </p>
        <ul>
          <li>console.log()：把東西「印」到瀏覽器的開發者工具裡。</li>
          <li>
            window.alert()：跳出一個小視窗，裡面顯示一段話，讓使用者按「確定」。
          </li>
          <li>window.prompt()： 跳出一個視窗，讓使用者輸入東西。</li>
        </ul></context
      >
    </div>
    <div>
      <context
        title="什麼是 Lexical Structure？
"
        ><p>
          Lexical Structure 就像是「寫 JavaScript 時要遵守的基本文法規則」。<br />
          簡單說，它是程式語言的「拼字和格式規則」，不管你寫什麼功能，這些規則都要先遵守，程式才跑得動。
        </p>
        <p>以下是 JavaScript 常見的幾個 Lexical Structure 概念：</p>
        <ol>
          <li>區分大小寫（Case Sensitive）</li>
          <li>空白、換行會被忽略</li>
          <li>註解寫法（// 或 /* */）</li>
          <li>變數名稱規則（不能用數字開頭、不能用關鍵字）</li>
          <li>支援 Unicode 字元</li>
          <li>分號是可加可不加的，但建議加上</li>
        </ol></context
      >
    </div>
  </div>
</template>
<script setup>
const script = `script`;
const link = `link`;
const head = `head`;
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
