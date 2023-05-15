import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    locale: 'zh_cn',
    legacy: false,
    fallbackLocale: 'zh_cn',
    messages,
  })
  vueApp.use(i18n)
})
