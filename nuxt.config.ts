import { defineNuxtConfig } from 'nuxt';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  build: {
    transpile: ['vueuc'], // fix dev error: Cannot find module 'vueuc'
  },
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
      }),
      AutoImport({
        /* options */
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: [
          'vue',
          '@vueuse/core',
          'pinia',
          'vue-router',
          'vue-i18n',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
        dirs: ['hooks', 'stores', 'utils'],
        dts: 'typings/auto-import.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
    ],
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    ssr: {
      noExternal: [
        'moment',
        'naive-ui',
        '@juggle/resize-observer',
        '@css-render/vue3-ssr',
      ],
    },
  },
});
