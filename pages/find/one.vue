<script setup lang='ts'>
const router = useRouter()
</script>

<template>
  <div class="flex-col">
    FindOne
    <n-button @click="() => router.back()">
      Back
    </n-button>
  </div>
</template>

<style scoped lang='less'>

</style>
