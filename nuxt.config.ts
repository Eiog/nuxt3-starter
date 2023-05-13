import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { appDescription, appName } from './constants/index'

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
      ],

    },
  },
  modules: [
    'nuxt-vitest',
    // 'nuxt-icon',
    // 'nuxt-icons',
    // 'nuxt-security',
    // 'nuxt-typed-router',
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    ['unplugin-icons/nuxt', { compiler: 'vue3' }],
    '@vite-pwa/nuxt',
    '@morev/vue-transitions/nuxt',
    ['unplugin-vue-inspector/nuxt', {
      enabled: true,
      toggleButtonVisibility: 'always',
    }],
  ],
  serverHandlers: [

  ],
  unocss: {
    preflight: false,
  },
  colorMode: {
    classSuffix: '',
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: appName,
      short_name: appName,
      description: appDescription,
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      navigateFallbackDenylist: [/^\/api\//],
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts.googleapis.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/fonts.gstatic.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    registerWebManifestInRouteRules: true,
    writePlugin: true,
    // client: {
    //   installPrompt: true,
    //   // you don't need to include this: only for testing purposes
    //   // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
    //   periodicSyncForUpdates: 20,
    // },
    devOptions: {
      enabled: false,
      type: 'module',
    },
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
          '@vueuse/core',
          '@vueuse/head',
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
      VueI18nPlugin({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        include: resolve(dirname(fileURLToPath(import.meta.url)), './locales/**'),
      }),
    ],
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
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
