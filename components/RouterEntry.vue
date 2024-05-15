<script setup lang="ts"></script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition mode="out-in" appear :name="route.meta.transition ?? 'fade'">
      <KeepAlive :include="route.meta.keepAlive ? route.name?.toString() : '' ">
        <Suspense>
          <component :is="Component" :key="route.path" />
          <template #fallback>
            Suspense 正在加载...
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
  </RouterView>
</template>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  transform: scale(0.99);
  opacity: 0;
}

.slide-left-move,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-left-enter-from {
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  transform: translate(10%, 0);
  opacity: 0;
}

.slide-right-move,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-right-enter-from {
  transform: translate(-100%, 0);
}
.slide-right-leave-to {
  transform: translate(-10%, 0);
  opacity: 0;
}
</style>
