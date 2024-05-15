<script setup>
useHead({
  title: 'nuxt3-template',
})
</script>

<template>
  <VitePwaManifest />
  <NaiveProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NotivueProvider />
  </NaiveProvider>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: auto !important;
  background: linear-gradient(to bottom, #d6dbdc, #ffffff);
  color: #1a1a1a;
}

#__nuxt,
#nuxt-test {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dark html,
.dark body {
  background: linear-gradient(to bottom, #383838, #000000);
  color: #dadada;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  transform: scale(0.99);
  opacity: 0;
}

.slide-left-move,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-left-enter-from {
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  transform: translate(10%, 0);
  opacity: 0;
}

.slide-right-move,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-right-enter-from {
  transform: translate(-100%, 0);
}
.slide-right-leave-to {
  transform: translate(-10%, 0);
  opacity: 0;
}
</style>
