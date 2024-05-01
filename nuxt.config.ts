import { resolve } from 'node:path'
import process from 'node:process'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { appDescription } from './constants/index'
import { pwa } from './config/pwa.config'
import { VitePluginAutoImport } from './config'
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
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],

    },
  },
  modules: [
    'nuxt-vitest', // https://github.com/danielroe/nuxt-vitest
    'nuxt-mongoose', // https://nuxt.com/modules/nuxt-mongoose
    'nuxt-icon', // https://nuxt.com/modules/icon
    'nuxt-icons', // https://nuxt.com/modules/icons
    'nuxt-viewport', // https://nuxt.com/modules/nuxt-viewport
    'nuxt-lazy-load', // https://gitlab.com/broj42/nuxt-lazy-load
    // // 'nuxt-security',
    // 'nuxt-typed-router', // https://nuxt.com/modules/typed-router
    '@nuxt/content', // https://nuxt.com/modules/content
    '@nuxt/devtools', // https://nuxt.com/modules/devtools
    '@nuxtjs/color-mode', // https://nuxt.com/modules/color-mode
    '@nuxtjs/robots',
    '@nuxtjs/i18n', // https://nuxt.com/modules/i18n
    // '@nuxtjs/supabase', // https://nuxt.com/modules/supabase
    '@pinia/nuxt', // https://nuxt.com/modules/pinia
    '@pinia-plugin-persistedstate/nuxt', // https://nuxt.com/modules/pinia-plugin-persistedstate
    '@unocss/nuxt', // https://nuxt.com/modules/unocss
    '@vueuse/nuxt', // https://nuxt.com/modules/vueuse
    ['unplugin-icons/nuxt', { compiler: 'vue3' }], // https://github.com/antfu/unplugin-icons#configuration
    '@vite-pwa/nuxt', // https://nuxt.com/modules/vite-pwa-nuxt
    '@morev/vue-transitions/nuxt', // https://nuxt.com/modules/vue-transitions
    // ['unplugin-vue-inspector/nuxt', { enabled: true, toggleButtonVisibility: 'always' }], // https://github.com/webfansplz/vite-plugin-vue-inspector#example
    '@bg-dev/nuxt-naiveui',
    'notivue/nuxt',
    '@nuxt/eslint',
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
    renderJsonPayloads: true,
    typedPages: true,
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/', '/about'],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    vueI18n: './config/i18n.config.ts',
  },
  devtools: {
    enabled: true,
  },
  features: {
    // For UnoCSS
    inlineStyles: false,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  pwa,
  build: {

  },
  css: [
    '~/assets/style/index.less',
    '@unocss/reset/tailwind.css',
    'notivue/notification.css', // Only needed if using built-in notifications
    'notivue/animations.css', // Only needed if using built-in animations
  ],
  postcss: {
    plugins: {
      'postcss-preset-env': {},
    },
  },
  devServer: {
    port: Number(import.meta.env.VITE_DEV_PORT),
  },
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      Components({
        resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
      }),
      ...VitePluginAutoImport(),
    ],
    resolve: {
      alias: {
        // 'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      },
    },
    optimizeDeps: {
    },
  },
})
