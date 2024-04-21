<script setup lang=ts>
defineOptions({
  name: 'DefineInput',
})
const value = defineModel<number>('value', { default: 0 })
</script>

<template>
  <div class="flex-center gap-3">
    <button class="btn" @click="value--">
      -
    </button>
    <span class="text-2xl font-bold">{{ value }}</span>
    <button class="btn" @click="value++">
      +
    </button>
  </div>
</template>
