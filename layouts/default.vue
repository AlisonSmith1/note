<template>
  <div>
    <header style="background: #eee; padding: 10px">
      <h1>Lana的網站</h1>
      <nav>
        <NuxtLink to="/">首頁</NuxtLink> |
        <NuxtLink to="/portfolio">作品集</NuxtLink> |
        <NuxtLink to="/studynote">學習筆記</NuxtLink> |
        <NuxtLink to="/about">關於我</NuxtLink> |
      </nav>
    </header>

    <main style="padding: 20px">
      <slot />
    </main>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>
