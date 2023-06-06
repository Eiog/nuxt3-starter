<script setup>
useHead({
  title: 'nuxt3-template',
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
  overflow: auto !important;
  background:linear-gradient(to bottom,#d6dbdc,#FFFFFF);
  color: #1a1a1a;
}

#__nuxt {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dark html,.dark body{
  background:linear-gradient(to bottom,#383838,#000000);
  color: #dadada;
}
</style>
