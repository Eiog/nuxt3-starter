import { resolve } from 'node:path'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { appDescription } from './constants/index'
import { pwa } from './pwa.config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/tailwind.css',
        },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'naive-ui-style', content: '' },
      ],

    },
  },
  modules: [
    'nuxt-vitest',
    'nuxt-mongoose',
    'nuxt-icon',
    'nuxt-icons',
    'nuxt-viewport',
    // // 'nuxt-security',
    // // 'nuxt-typed-router',
    '@nuxt/content',
    // '@nuxt/ui',
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@nuxthq/ui',
    '@vueuse/nuxt',
    ['unplugin-icons/nuxt', { compiler: 'vue3' }],
    '@vite-pwa/nuxt',
    '@morev/vue-transitions/nuxt',
    ['unplugin-vue-inspector/nuxt', {
      enabled: true,
      toggleButtonVisibility: 'always',
    }],
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: process.env.NODE_ENV === 'development',
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      routes: ['/', '/about'],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  pwa,
  devtools: {
    enable: true,
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
          ]
        : ['@juggle/resize-observer'],
  },
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      Components({
        dts: 'typings/components.d.ts',
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
          'pinia',
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
        dirs: ['stores'],
        dts: 'typings/auto-import.d.ts',
        vueTemplate: true,
      }),
    ],
    resolve: {
      alias: {
        // 'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      },
    },
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },
  },
})
