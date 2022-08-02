<script setup>
useHead({
  title: "nuxt3-template",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/nuxt.png",
    },
  ],
});
definePageMeta({
  transition: {
    name: "fade-transform",
  },
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-transform-enter-from {
  transform: scale(0.95);
  opacity: 0;
}

.fade-transform-leave-to {
  transform: scale(1.05);
  opacity: 0;
}
</style>
