<script setup lang='ts'>
// definePageMeta({
//   title: '首页',
// })
const { data, pending } = await useFetch('/api/info')
</script>

<template>
  <div flex-col-center>
    <Hello />
    <HelloTsx />
    {{ data }}{{ pending }}
  </div>
</template>

<style scoped lang='less'>

</style>
