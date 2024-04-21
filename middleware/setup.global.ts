/* eslint-disable no-console */
export default defineNuxtRouteMiddleware(() => {
  const { language } = storeToRefs(useAppStore())
  console.log(language)
})
