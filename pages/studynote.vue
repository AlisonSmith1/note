<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
  <div>
    <h2>學習筆記</h2>
    <context style="text-decoration: none" title="目錄"
      ><ul>
        <li style="padding: 4px">
          <NuxtLink to="vue">Vue</NuxtLink>
          |
          <NuxtLink to="nuxt">Nuxt</NuxtLink>
        </li>
        <li style="padding: 4px">
          <NuxtLink to="javascript">Javascript</NuxtLink>
        </li>
      </ul>
    </context>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>
