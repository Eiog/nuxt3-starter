<script setup lang="ts">
const currentPath = computed(() => useRoute().path)
</script>

<template>
  <div class="w-full flex-col-center">
    <header class="h-16 w-full flex items-center justify-center">
      <nav class="w-screen-lg flex-y-center justify-end gap-3 <lg:w-full lg:p-x-10">
        <BackToHome class="m-r-auto" />
        <NuxtLink to="/about">
          <NButton quaternary>
            About
          </NButton>
        </NuxtLink>
        <div>currentPath: {{ currentPath }}</div>
        <ToggleDarkMode />
        <ToggleLanguage />
      </nav>
    </header>
    <main class="w-screen-lg flex-col flex-1 <lg:w-full lg:p-x-10">
      <slot />
      <div class="m-y-10 w-full flex items-center justify-center gap-5">
        <a class="flex items-center justify-center gap-1 text-3xl" href="https://github.com/Eiog/nuxt3-starter" target="_blank" rel="noopener noreferrer">
          <i class="i-ri-github-fill" />
          <span>Source</span>
        </a>
        <a class="flex items-center justify-center gap-1 text-3xl" href="https://note.eiog.me/" target="_blank" rel="noopener noreferrer">
          <i class="i-ri-github-fill" />
          <span>MyNote</span>
        </a>
      </div>
    </main>
  </div>
</template>

<style scoped lang="less"></style>
