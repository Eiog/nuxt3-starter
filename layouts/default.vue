<script setup lang="ts">

</script>

<template>
  <div class="w-full flex-col-center">
    <header class="h-16 w-full flex items-center justify-center">
      <nav class="w-screen-md flex-y-center justify-end gap-3 <md:w-full <md:p-x-3">
        <BackToHome class="m-r-auto" />
        <ToggleDarkMode />
        <ToggleLanguage />
        <GitHub />
      </nav>
    </header>
    <TabBar />
    <main class="w-screen-md overflow-x-hidden p-x-3 <md:w-full md:p-x-10">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="less"></style>
