import { createI18n } from 'vue-i18n';
import cn from '~/i18n/cn.json';
import en from '~/i18n/en.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'cn',
    messages: {
      cn,
      en,
    },
  });

  vueApp.use(i18n);
});
