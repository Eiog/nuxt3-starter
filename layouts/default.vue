<script setup lang="ts">
const { useDarkMode, naiveThemeOverrides, naiveLocale, naiveDateLocale }
  = storeToRefs(useAppStore())
const route = useRoute()
useTitle(route.meta.title || '')
</script>

<template>
  <div wfull hfull>
    <NuxtLoadingIndicator />
    <naive-provider
      :dark="useDarkMode"
      :theme-overrides="naiveThemeOverrides"
      :locale="naiveLocale"
      :date-locale="naiveDateLocale"
    >
      <div wfull hfull flex-center bg="white dark:gray-900">
        <div max-w-xl hfull flex-center select-none flex="col">
          <slot />
          <default-menu />
        </div>
      </div>
    </naive-provider>
  </div>
</template>
