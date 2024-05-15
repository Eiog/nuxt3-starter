<script setup lang='ts'>
import SvgIcon from './SvgIcon.vue'

const router = useRouter()
const route = useRoute()
const tabs = [
  {
    name: '首页',
    icon: 'pixel-travel-icon-民宿',
    path: '/',
  },
  {
    name: '发现',
    icon: 'pixel-travel-icon-比基尼',
    path: '/find',
  },
  {
    name: '图表',
    icon: 'pixel-travel-icon-游泳圈',
    path: '/charts',
  },
  {
    name: '关于',
    icon: 'pixel-travel-icon-指南针',
    path: '/about',
  },
]
</script>

<template>
  <div class="fixed bottom-[50px] left-0 z-[1000] w-full flex items-center justify-center p-[10px]">
    <div class="w-screen-md flex-y-center justify-around rounded-xl bg-white/60 p-[10px] shadow-black/5 shadow-xl backdrop-blur-xl <md:w-full dark:bg-white/20">
      <div
        v-for="item in tabs"
        :key="item.path"
        class="h-[60px] w-[60px] flex-col-center cursor-pointer rounded-xl transition-base hover:bg-black/5 dark:hover:bg-white/10"
        :class="{ 'bg-black/5 dark:bg-white/10': route.path === item.path }"
        @click="() => router.push(item.path)"
      >
        <SvgIcon :width="2" :height="2" :name="item.icon" />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>

</style>
