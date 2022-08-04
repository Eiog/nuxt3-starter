<script setup lang="ts">
import { useAppStore } from '~~/stores/appStore.js';
import http from '@/http';
const count = ref(0);
onMounted(() => {
  http.get('/api/1').then((res) => {
    console.log(res);
  });
});
</script>
<template>
  <div class="flex flex-col gap-3 items-center justify-center">
    <span text="2xl">{{ count }}</span>
    <n-button @click="count++"> 点我 </n-button>
  </div>
</template>
<style scoped lang="less"></style>
