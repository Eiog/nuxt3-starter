import 'virtual:svg-icons-register'
import { SvgIcon } from '#components'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('svg-icon', SvgIcon)
})
