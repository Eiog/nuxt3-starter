import 'virtual:svg-icons-register'

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp
  const directives = import.meta.glob<{ [key: string]: any }>('~/directives/*.ts', { eager: true })
  Object.keys(directives).forEach((key) => {
    app.directive(key.replace('../directives/', '').replace('.ts', ''), directives[key].default)
    Object.keys(directives[key]).forEach((f) => {
      if (f === 'default')
        return
      app.directive(f, directives[key][f])
    })
  })
})
