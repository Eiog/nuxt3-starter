<script setup>
useHead({
  title: 'nuxt3-template',
})

onMounted(() => {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
.page-leave-active,
.page-enter-active {
  transition: all 0.3s ease-in-out;
}
.page-enter-from {
  transform: scale(0.95);
  opacity: 0;
}
.page-leave-to {
  transform: scale(1.05);
  opacity: 0;
}
</style>
