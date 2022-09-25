import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/Administrator/Documents/Project/template-nuxt3/node_modules/.pnpm/nuxt@3.0.0-rc.11_qgwn5kqtj3wg4buewn6bdhp4vq/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}