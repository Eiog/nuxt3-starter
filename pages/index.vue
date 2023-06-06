<script setup lang='ts'>
defineOptions({
  name: 'IndexPage',
})
definePageMeta({
  name: 'index-page',
})
</script>

<template>
  <div class="flex-col-center gap-10">
    <HelloWorld />
    <Examples />
    <Dependents />
    <Info />
  </div>
</template>

<style scoped lang='less'>

</style>
