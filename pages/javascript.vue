<template>
  <div>
    <h1>Javascript</h1>
    <div>
      <context style="text-decoration: none" title="什麼是 JavaScript？"
        ><p>
          JavaScript 撰寫的程式通常稱為「腳本（script）」，可以直接嵌入 HTML
          網頁中，當網頁載入時便會自動執行。
          <br />
          JavaScript 的程式通常叫做「腳本（script）」，可以直接寫在網頁的 HTML
          裡面，當網頁打開的時候就會自動跑起來。
          <br />
          雖然名字裡有個「Java」，但其實 JavaScript 跟 Java
          幾乎沒關係。一開始這門語言叫「LiveScript」，但那時候 Java
          很紅，開發者想說蹭一下熱度，把名字改成 JavaScript，讓大家覺得它是 Java
          的「小老弟」。最終發展成一門獨立且強大的語言，其標準規範為
          ECMAScript，實際上與 Java 並無關聯。
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
          要放下面？因為這樣瀏覽器可以先載入 HTML 結構和 CSS
          樣式，畫面就可以先顯示出來。這樣使用者點進網頁時，不用等 JavaScript
          下載完、跑完，才能看到內容。<br />
          想像一下：如果 JavaScript
          放在上面，網頁就會卡在那邊等它跑完，結果畫面一直是空白的，等太久可能使用者會直接關掉。將
          JavaScript
          放在頁尾，瀏覽器便能先顯示內容（如文字、圖片、排版），再執行
          JavaScript 程式碼，讓使用者更快看到畫面。<br />
          所以，想要讓使用者體驗更順，通常 {{ script }} 都是擺在網頁的最後面！
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
          Lexical Structure 指的是 JavaScript 撰寫時需遵守的基本語法規則。<br />
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
    <div>
      <context
        title="變數與賦值（Variables & Assignment）

"
        ><ol>
          <li>什麼是變數（Variable）？</li>
          <p>
            在 JavaScript
            中，變數就是一個用來儲存資料的容器，其值可以隨時改變，因此被稱為「變數」。
          </p>
          <li>賦值（Assignment）與等號的意義</li>
          <p>
            JavaScript 中的 = 不是數學等號，而是賦值運算子（assignment
            operator），代表「把右邊的值放進左邊的變數中」。
          </p>
          <p>Ex. x = 5, x = x + 1</p>
          <li>如何宣告變數（Declare a Variable）</li>
          <p>在 JavaScript 中，我們用以下三種方式來宣告變數：</p>
          <table
            style="text-align: center; width: 100%; border-collapse: collapse"
          >
            <thead>
              <tr>
                <th>關鍵字</th>
                <th>可否修改值</th>
                <th>可否重複宣告</th>
                <th>是否要馬上指定初始值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>let</td>
                <td>可</td>
                <td>不可</td>
                <td>不一定</td>
              </tr>
              <tr>
                <td>const</td>
                <td>不可</td>
                <td>不可</td>
                <td>不一定</td>
              </tr>
              <tr>
                <td>var</td>
                <td>可</td>
                <td>可</td>
                <td>不一定</td>
              </tr>
            </tbody>
          </table>
          <p>
            建議：請不要使用
            var，因為其有提升（hoisting）與作用域（scope）問題，容易造成程式錯誤。
          </p>
          <li>使用 let 與 const 的原則</li>
          <p>如果 值會改變（例如銀行帳戶金額）→ 使用 let</p>
          <p>如果 值不會改變（例如圓周率 π）→ 使用 const</p>
          <li>特別注意事項</li>
          <p>const 宣告時必須立即賦值</p>
          <CodeBlock language="javascript">{{ constDeclare }}</CodeBlock>
          <p>let 宣告可不賦值，預設為 undefined</p>
          <CodeBlock language="javascript">{{ letDeclare }}</CodeBlock>
          <p>let 與 const 都不允許重複宣告同名變數</p>
          <CodeBlock language="javascript">{{ letConst }}</CodeBlock>
          <p>const 不可重新賦值（不能改變指向的值）</p>
          <CodeBlock language="javascript">{{ constReassigned }}</CodeBlock>
        </ol></context
      >
    </div>
    <div>
      <context
        title="數據類型（Data Type）
"
        ><p>
          在 JavaScript
          中，數據類型是用來描述「資料的種類」，也就是你在程式中處理的「值」屬於哪一種型態。
        </p>
        <p>
          <strong>JavaScript 的基本數據類型（Primitive Data Types）</strong>
        </p>
        <p>
          JavaScript 有 7 種基本（原始）數據類型，這些被稱為 primitive data
          types，意思是它們不是物件、不可再被拆解，操作時是值本身。
        </p>
        <ol>
          <li>Number：用來表示數字，包含整數與小數。</li>
          <li>BigInt：可以表示非常大的整數，超過 Number 可以表示的範圍。</li>
          <li>
            String：字串，用引號包起來的文字，可以用單引號 ' '、雙引號 " "
            或反引號 `
          </li>
          <li>Boolean：只有兩個值：true 或 false，常用於邏輯判斷。</li>
          <li>null：表示一個「有意的空值」，你刻意設定某東西為空。</li>
          <li>
            undefined：表示「尚未被賦值」的變數。變數宣告了但沒指定值，預設就是
            undefined。
          </li>
          <li>
            Symbol：用來創造獨一無二的識別符號，通常用於物件屬性的唯一鍵值（進階用途）。
          </li>
        </ol>
        <hr />
        <p><strong>非基本數據類型：Object（物件）</strong></p>
        <p>除了上面 7 種原始型別，JavaScript 還有第 8 種數據類型：</p>
        <p>
          <strong>Object</strong
          >：非原始型別（non-primitive），可以儲存多個值的集合或結構化資料。Object
          是 JavaScript 最重要的核心之一。
        </p>
        <p>物件有很多種形式，例如：</p>
        <ul>
          <li>一般物件（Object）</li>
          <li>陣列（Array）</li>
          <li>函式（Function）</li>
        </ul></context
      >
    </div>
    <div>
      <context title="Number 數字型別"
        ><p>
          在 JavaScript 中，Number
          是用來表示整數與小數的基本數據型別，語法簡潔且功能強大。
        </p>
        <ul>
          <li>支援的數值範圍</li>
          <p>
            JavaScript 的 Number 類型使用的是 64 位元浮點數格式（IEEE
            754），所以它能夠精確表示的整數範圍為：
          </p>
          <p>
            -9,007,199,254,740,992 到 9,007,199,254,740,992 也就是 -2^53 到 2^53
          </p>
          <p>超過這個範圍的整數就可能會出現精度誤差（precision loss）。</p>
          <li>常見的數學運算子</li>
          <p>JavaScript 的 Number 類型支援各種數學運算，以下是常見的符號：</p>
          <table
            style="border-collapse: collapse; width: 100%; text-align: center"
          >
            <thead>
              <tr>
                <th>類型</th>
                <th>符號或語法</th>
                <th>範例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>加法</td>
                <td>+</td>
                <td>a + b</td>
              </tr>
              <tr>
                <td>減法</td>
                <td>-</td>
                <td>a - b</td>
              </tr>
              <tr>
                <td>乘法</td>
                <td>*</td>
                <td>a * b</td>
              </tr>
              <tr>
                <td>除法</td>
                <td>/</td>
                <td>a / b</td>
              </tr>
              <tr>
                <td>餘數</td>
                <td>%</td>
                <td>a % b（如 7 % 3 得 1）</td>
              </tr>
              <tr>
                <td>指數</td>
                <td>**</td>
                <td>2 ** 3 → 8</td>
              </tr>
              <tr>
                <td>自加</td>
                <td>++</td>
                <td>a++ 或 ++a</td>
              </tr>
              <tr>
                <td>自減</td>
                <td>--</td>
                <td>a-- 或 --a</td>
              </tr>
              <tr>
                <td>複合加法</td>
                <td>+=</td>
                <td>a += 1（等同於 a = a + 1）</td>
              </tr>
              <tr>
                <td>複合減法</td>
                <td>-=</td>
                <td>a -= 1</td>
              </tr>
              <tr>
                <td>複合乘法</td>
                <td>*=</td>
                <td>a *= 2</td>
              </tr>
              <tr>
                <td>複合除法</td>
                <td>/=</td>
                <td>a /= 2</td>
              </tr>
            </tbody>
          </table>
        </ul></context
      >
    </div>
    <div>
      <context title="String 字串型別"
        ><p>
          在 JavaScript 中，<strong>String（字串）</strong>
          是由一連串的文字（字母、數字或符號）所組成的資料型別，常用來表示文字內容。
        </p>
        <ul>
          <li>建立字串</li>
          <p>字串需要用單或雙引號包起來</p>
          <li>串接字串（Concatenation）</li>
          <p>使用 + 符號可以把多個字串「串接」起來</p>
          <CodeBlock language="javascript">{{ concatenation }}</CodeBlock>
          <p>這種透過 + 把字串接起來的動作就叫做 concatenation（字串串接）。</p>
          <li>運算規則與 NaN</li>
          <p>字串之間不支援數學運算</p>
          <CodeBlock language="javascript">{{ NaN }}</CodeBlock>
          <p>
            這是因為 JavaScript 嘗試將它們當成數字來運算，但運算失敗，因此回傳
            NaN，表示「不是數字」。
          </p>
          <li>字串與數字加起來？</li>
          <p>
            如果字串與數字做 + 運算，會觸發
            <strong>隱式轉型（type coercion）</strong>，JavaScript
            會自動把數字轉成字串，再做串接
          </p>
          <CodeBlock language="javascript">{{ typeCoercion }}</CodeBlock>
          <p>
            但如果用的是 -、*、/，JavaScript
            則會試圖轉成數字做計算，轉不了就回傳 NaN：
          </p>
          <CodeBlock language="javascript">{{ typeCoercion2 }}</CodeBlock>
          <li>特殊字元：\n 換行</li>
        </ul></context
      >
    </div>
    <div>
      <context title=" Number 方法（Number Methods）"
        ><p>
          在 JavaScript 中，數字雖然是基本型別（primitive），但因為 JavaScript
          是物件導向語言，所以基本型別會被暫時包裝成物件來使用內建方法（method）。
        </p>
        <p>這讓我們可以對數字使用一些實用的方法來操作與轉換。</p>
        <ol>
          <li>常見的數字方法</li>
          <p>
            toString()：將數字轉換為字串格式。(可搭配參數指定進位，例如：num.toString(2)
            會回傳二進位表示法 "1111011"。)
          </p>
          <p>
            toFixed(n)：將數字轉成字串，保留小數點後 n 位（四捨五入）。(
            回傳的是字串格式，不是數字。)
          </p>
          <li>注意：小數誤差問題</li>
          <p>
            JavaScript 使用的是 IEEE 754
            二進位浮點數標準，這導致某些小數無法被精確表示，進而出現誤差。
          </p>
          <CodeBlock language="javascript">{{ IEEE754 }}</CodeBlock>
          <p>
            這不是 JavaScript 的
            bug，而是所有使用二進位浮點數的語言都會遇到的限制。
          </p>
        </ol></context
      >
    </div>
    <div>
      <context title="String 屬性與方法"
        ><p>
          在 JavaScript
          中，字串（String）是一種常用的資料型別，也具備許多**屬性（attributes）與方法（methods）**可以操作和檢查內容。
        </p>

        <ol>
          <div>
            <p><strong>常見屬性與存取方式</strong></p>
            <li>length</li>
            <p>回傳字串的長度（字元數）</p>
            <li>[index]</li>
            <p>可以透過索引存取某一個字元（從 0 開始）</p>
          </div>
          <div>
            <p><strong>常見方法</strong></p>
            <li>slice(start, end?)</li>
            <p>
              擷取部分字串作為新字串。start 是起始索引（含），end
              是結束索引（不含）
            </p>
            <li>indexOf(substring)</li>
            <p>尋找指定子字串的首次出現位置。找不到會回傳 -1</p>
            <li>toUpperCase()</li>
            <p>回傳轉為大寫的新字串，原字串不變</p>
            <li>toLowerCase()</li>
            <p>回傳轉為小寫的新字串，原字串不變</p>
            <li>split(pattern)</li>
            <p>將字串依照特定模式（可為字串或正則表達式）分割為陣列</p>
            <li>startsWith(substring)</li>
            <p>判斷字串是否以指定內容開頭，回傳 true 或 false</p>
            <li>endsWith(substring)</li>
            <p>判斷字串是否以指定內容結尾</p>
            <li>includes(substring)</li>
            <p>判斷字串中是否包含特定子字串</p>
            <li>charCodeAt(index)</li>
            <p>回傳指定索引位置字元的 UTF-16 編碼（介於 0–65535 之間的整數）</p>
          </div>
        </ol>
        ></context
      >
    </div>
  </div>
</template>
<script setup>
import CodeBlock from "~/components/CodeBlock.vue";

const script = `<script>`;
const link = `<link>`;
const head = `<head>`;
const constDeclare = `const x;  //x  
const x = 10; 
`;
const letDeclare = `let y;
console.log(y);  //undefined`;
const letConst = `let a = 5;
let a = 10;  //x`;
const constReassigned = `const pi = 3.14;
pi = 3.14159;  //x
`;
const concatenation = `let firstName = "Alice";
let lastName = "Wang";
let fullName = firstName + " " + lastName;`;
const NaN = `"hello" - "world";  // 結果是 NaN（Not a Number）
"123" * "abc";      // 結果也是 NaN
`;
const typeCoercion = `let result = "Age: " + 20;  // 結果是 "Age: 20"
`;
const typeCoercion2 = `"100" - 20;    // 結果是 80（字串被轉成數字）
"abc" * 2;     // 結果是 NaN
`;
const IEEE754 = `0.1 + 0.2 === 0.3  // false
0.1 + 0.2          // 0.30000000000000004
`;
</script>

<style scoped>
div {
  display: block;
  margin-bottom: 10px;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
}
a {
  text-decoration: none;
}
</style>
