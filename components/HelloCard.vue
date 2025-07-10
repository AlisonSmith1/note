<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <slot />
    <NuxtLink v-if="linkTo && linkText" :to="linkTo" class="card-link">
      {{ linkText }}
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
  linkText: String,
  linkTo: String,
});
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
}

.card-link {
  display: inline-block;
  text-decoration: none;
}
</style>
