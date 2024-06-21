import { resolve } from 'node:path'
import process from 'node:process'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import WebfontDownload from 'vite-plugin-webfont-dl'
import VitePluginDebug from 'vite-plugin-debug'

import { pwa } from './config/pwa.config'
import { VitePluginAutoImport } from './config'

const { VITE_APP_DESCRIPTION } = process.env

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: VITE_APP_DESCRIPTION },
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
    // 'nuxt-shiki', // https://github.com/pi0/nuxt-shiki
    'nuxt-content-twoslash', // https://github.com/antfu/nuxt-content-twoslash
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
    ['vite-plugin-version-mark/nuxt', {
      // name: 'test-app',
      // version: '0.0.1',
      // command: 'git describe --tags',
      // ifGitSHA: true,
      ifShortSHA: true,
      ifMeta: true,
      ifLog: true,
      ifGlobal: true,
    }], // https://github.com/ZhongxuYang/vite-plugin-version-mark
    'unplugin-info/nuxt', // https://github.com/yjl9903/unplugin-info
    'unplugin-turbo-console/nuxt', // https://github.com/unplugin/unplugin-turbo-console
    'unplugin-info/nuxt', // https://github.com/yjl9903/unplugin-info
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: process.env.NODE_ENV === 'development',
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
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
      webUpdateNotice({
        logVersion: true,
      }), // https://github.com/GreatAuk/plugin-web-update-notification
      WebfontDownload(), // https://github.com/feat-agency/vite-plugin-webfont-dl
      // viteVueCSSVars({
      //   include: [/.vue/],
      //   includeCompile: ['**/**.scss'],
      //   server: false,
      // }), // https://github.com/baiwusanyu-c/unplugin-vue-cssvars
      VitePluginDebug(), // https://github.com/hu3dao/vite-plugin-debug/blob/master/README.zh-CN.md
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
