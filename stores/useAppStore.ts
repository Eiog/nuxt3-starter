import { defineStore } from 'pinia'

export const useAppStore = defineStore(
  'appStore',
  () => {
    const { language, toggleLanguage } = useLanguage()
    const { useDarkMode } = useNaiveTheme()
    return {
      language,
      toggleLanguage,
      useDarkMode,
    }
  },
  {
    persist: {
      key: '__APP_STORE_PERSIST__',
      paths: [''],
    },
  },
)
