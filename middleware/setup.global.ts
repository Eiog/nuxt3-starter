export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from', from, 'to', to)
})
