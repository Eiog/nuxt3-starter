<script setup lang="ts">
import { useAppStore } from "~~/stores/appStore.js";
const count = ref(0);
</script>
<template>
  <div class="flex flex-col gap-3 items-center justify-center">
    <span text="2xl">{{ count }}</span>
    <n-button @click="count++"> 点我 </n-button>
  </div>
</template>
<style scoped lang="less"></style>
