<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
  <div>
    <h2>學習筆記</h2>
    <context style="text-decoration: none" title="歡迎你"
      ><NuxtLink to="vue">Vue</NuxtLink> |
      <NuxtLink to="nuxt">Nuxt</NuxtLink></context
    >
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>
