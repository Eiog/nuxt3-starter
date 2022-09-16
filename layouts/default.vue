<script setup lang="ts">
import { storeToRefs } from 'pinia';
const { darkMode } = storeToRefs(useAppStore());
</script>

<template>
  <div wfull hfull>
    <naive-provider :dark="darkMode">
      <div wfull hfull flex-center bg="white dark:gray-900">
        <div max-w-xl hfull flex-center select-none flex="col">
          <slot />
          <default-menu />
        </div>
      </div>
    </naive-provider>
  </div>
</template>
