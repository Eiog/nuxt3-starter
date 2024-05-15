<script setup lang='ts'>
const router = useRouter()
</script>

<template>
  <div class="h-[100vh] bg-black/5">
    FindIndex
    <p>
      Setup
      After adding this plugin, start the dev server (usually npm run dev) to generate the first version of the types at typed-router.d.ts which should be added to your tsconfig.json along with unplugin-vue-router/client to types and "moduleResolution": "Bundler". This is what it should look like:
    </p>
    <n-button @click="() => router.push('/find/one')">
      One
    </n-button>
  </div>
</template>

<style scoped lang='less'>

</style>
