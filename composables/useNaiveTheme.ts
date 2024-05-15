import type { Ref } from 'vue'
import type { GlobalThemeOverrides } from 'naive-ui'
import {
  darkTheme,
  dateEnUS,
  dateZhCN,
  enUS,
  useOsTheme,
  zhCN,
} from 'naive-ui'
import { colord } from 'colord'

function getStatusColor(color = '#ff461f') {
  return {
    color,
    hover: colord(color).lighten(0.1).toHex(),
    pressed: colord(color).darken(0.1).toHex(),
    suppl: colord(color).lighten(0.1).toHex(),
  }
}
const { language } = useLanguage()
const useOsDark = ref(false)
const useDarkMode = computed(() => {
  if (useOsDark.value)
    return useOsTheme().value === 'dark'
  return isDark.value
})
const themeColor = ref({
  primary: '#64748B',
  info: '#06b6d4',
  success: '#10b981',
  warning: '#fbbf24',
  error: '#f43f5e',
})
const theme = computed(() => {
  return isDark.value ? darkTheme : undefined
})
const themeOverrides: Ref<GlobalThemeOverrides> = computed(() => {
  return {
    common: {
      bodyColor: useDarkMode.value ? '#1f1f1f' : '#f5f5f5',
      primaryColor: themeColor.value.primary,
      primaryColorHover: getStatusColor(themeColor.value.primary).hover,
      primaryColorPressed: getStatusColor(themeColor.value.primary).pressed,
      primaryColorSuppl: getStatusColor(themeColor.value.primary).suppl,
      infoColor: themeColor.value.info,
      infoColorHover: getStatusColor(themeColor.value.info).hover,
      infoColorPressed: getStatusColor(themeColor.value.info).pressed,
      infoColorSuppl: getStatusColor(themeColor.value.info).suppl,
      successColor: themeColor.value.success,
      successColorHover: getStatusColor(themeColor.value.success).hover,
      successColorPressed: getStatusColor(themeColor.value.success).pressed,
      successColorSuppl: getStatusColor(themeColor.value.success).suppl,
      warningColor: themeColor.value.warning,
      warningColorHover: getStatusColor(themeColor.value.warning).hover,
      warningColorPressed: getStatusColor(themeColor.value.warning).pressed,
      warningColorSuppl: getStatusColor(themeColor.value.warning).suppl,
      errorColor: themeColor.value.error,
      errorColorHover: getStatusColor(themeColor.value.error).hover,
      errorColorPressed: getStatusColor(themeColor.value.error).pressed,
      errorColorSuppl: getStatusColor(themeColor.value.error).suppl,
    },
  }
})
const locale = computed(() => {
  switch (language.value as 'en' | 'cn') {
    case 'en':
      return enUS
    case 'cn':
      return zhCN
    default:
      return undefined
  }
})
const dateLocale = computed(() => {
  switch (language.value as 'en' | 'cn') {
    case 'en':
      return dateEnUS
    case 'cn':
      return dateZhCN
    default:
      return undefined
  }
})
export function useNaiveTheme() {
  return {
    useDarkMode,
    theme,
    themeOverrides,
    locale,
    dateLocale,
  }
}
