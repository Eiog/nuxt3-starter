<script setup lang='ts'>
const { changeLanguage } = useAppStore()
</script>

<template>
  <i
    class="i-ri-translate cursor-pointer text-xl transition-colors dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
    @click="() => changeLanguage()"
  />
</template>

<style scoped lang='less'>

</style>
