/* eslint-disable no-console */
import type { Router } from 'vue-router'

export function useRouteGuard(router: Router) {
  const { start, done } = useNProgress()
  router.beforeEach((to, from, next) => {
    const { language } = useLanguage()
    console.log(language.value)

    start()
    next()
  })
  router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : toDepth > fromDepth ? 'slide-left' : 'fade'
    console.log(to.meta.transition)

    useChangeTitle(to)
    done()
  })
}
