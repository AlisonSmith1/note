<template>
  <pre><code ref="codeBlock" :class="`language-${language}`"><slot /></code></pre>
</template>

<script setup>
import { onMounted, ref } from "vue";
import hljs from "highlight.js";
// 可以換其他主題，例如 monokai.css、atom-one-dark.css
import "highlight.js/styles/github-dark.css";

const props = defineProps({
  language: {
    type: String,
    default: "javascript",
  },
});

const codeBlock = ref(null);

onMounted(() => {
  if (codeBlock.value) {
    hljs.highlightElement(codeBlock.value);
  }
});
</script>

<style scoped>
pre {
  padding: 1em;
  border-radius: 8px;
  overflow-x: auto;
}
</style>
