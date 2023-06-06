import cn from './locales/zh_cn.json'
import en from './locales/en_us.json'

export default defineI18nConfig(() => ({
  locale: 'en_us',
  legacy: false,
  fallbackLocale: 'en_us',
  messages: {
    en_us: en,
    zh_cn: cn,
  },
}))
