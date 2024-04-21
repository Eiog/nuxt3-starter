import type { PluginOption } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'

export function VitePluginAutoImport(): PluginOption[] {
  return [
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
        '@vueuse/head',
        'pinia',
        'vue-router',
        'vue-i18n',
      ],
      dirs: ['hooks', 'composables', 'stores', 'utils'],
      vueTemplate: true,
      resolvers: [VueHooksPlusResolver()],
    }), // https://github.com/antfu/unplugin-auto-import
  ]
}
