<script setup lang='ts'>
definePageMeta({
  title: '首页',
})
const { data, pending, error, refresh } = await useFetch('/api/hello')
</script>

<template>
  <div flex-col-center>
    <Hello />
    <HelloTsx />
  </div>
</template>

<style scoped lang='less'>

</style>
