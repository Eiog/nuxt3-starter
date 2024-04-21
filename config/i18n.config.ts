import cn from '../locales/cn.json'
import en from '../locales/en.json'

export default defineI18nConfig(() => ({
  locale: 'cn',
  legacy: false,
  fallbackLocale: 'cn',
  messages: {
    en,
    cn,
  },
}))
