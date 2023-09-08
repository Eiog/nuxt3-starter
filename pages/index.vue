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
    <div class="flex-center gap-1">
      <UButton v-use-track:exposure>
        ExposureTrack
      </UButton>
      <UButton v-use-track:click>
        ClickTrack
      </UButton>
      <UButton v-use-track:long-press>
        LongPressTrack
      </UButton>
    </div>
  </div>
</template>

<style scoped lang='less'>

</style>
