import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
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
        transpile: ['vueuc'],   // fix dev error: Cannot find module 'vueuc'
    },
    vite: {
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
            }),
        ],
        resolve: {
            alias: {
                'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
            }
        },
        ssr: {
            noExternal: ['moment', 'naive-ui', '@juggle/resize-observer', '@css-render/vue3-ssr'],
        },
    }

})
