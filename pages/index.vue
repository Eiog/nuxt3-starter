<script setup lang='ts'>
import { useRequest } from 'vue-hooks-plus'

defineOptions({
  name: 'IndexPage',
})
useHead({
  title: '首页',
})
const { data } = useRequest(() => get('/info'))
// console.log(ipcRenderer)
onMounted(() => {
  window.$notivue.info({ message: 'Hello World!', duration: 5000 })
})
</script>

<template>
  <div class="flex-col-center gap10">
    <HelloWorld />
    {{ data }}
    <DefineInput />
    <div class="flex items-center justify-center gap1">
      <NButton v-track:exposure>
        ExposureTrack
      </NButton>
      <NButton v-track:click>
        ClickTrack
      </NButton>
      <NButton v-track:long-press>
        LongPressTrack
      </NButton>
    </div>
  </div>
</template>

<style scoped lang='less'>

</style>
