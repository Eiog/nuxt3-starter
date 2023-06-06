<script setup lang='ts'>
// definePageMeta({
//   title: '首页',
// })
const { data } = await useFetch('/api/info')
</script>

<template>
  <div class="flex-center text-xl gap-5">
    <p>{{ data?.city }}</p>
    <p>{{ data?.ip }}</p>
  </div>
</template>

<style scoped lang='less'>

</style>
