<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAppStore } from '~~/stores/appStore.js';
const { darkMode } = storeToRefs(useAppStore());
</script>

<template>
  <div wfull hfull flex-center gap3 flex-col>
    <NaiveProvider :dark="darkMode">
      <div wfull hfull flex-center bg="white dark:gray-900">
        <div max-w-xl hfull flex-center select-none flex="col">
          <slot />
          <Menu />
        </div>
      </div>
    </NaiveProvider>
  </div>
</template>
