export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to.fullPath, from.fullPath)
})
