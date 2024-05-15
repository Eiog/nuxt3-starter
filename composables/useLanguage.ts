const { locale: language } = { locale: ref('cn') }
function toggleLanguage(lang?: 'cn' | 'en') {
  const { $i18n } = useNuxtApp()
  if (lang)
    language.value = lang
  else
    language.value = language.value === 'cn' ? 'en' : 'cn'
  $i18n.locale.value = language.value
}
export function useLanguage() {
  return {
    language: language as WritableComputedRef<'cn' | 'en'>,
    toggleLanguage,
  }
}
