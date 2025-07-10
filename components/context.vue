<template>
  <div style="border: 1px solid #ccc; padding: 10px">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
});
</script>
