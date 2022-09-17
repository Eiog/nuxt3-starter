import { createI18n } from 'vue-i18n';
import zh_cn from '~/i18n/cn.json';
import en_us from '~/i18n/en.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    locale: 'zh_cn',
    legacy: false,
    fallbackLocale: 'zh_cn',
    messages: {
      zh_cn: zh_cn,
      en_us: en_us,
    },
  });

  vueApp.use(i18n);
});
