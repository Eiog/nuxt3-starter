<script setup lang='ts'>
const { t } = useI18n()
</script>

<template>
  <div class="flex-col-center gap-10 p-y-20 <lg:py-10">
    <h1 class="text-8xl <lg:text-4xl">
      {{ t('Hello') }}
    </h1>
    <p class="text-4xl <lg:text-2xl">
      {{ t('Welcome') }}
    </p>
  </div>
</template>

<style scoped lang='less'>

</style>
