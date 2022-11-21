import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/Users/Administrator/Desktop/Project/template-nuxt3/node_modules/.pnpm/registry.npmmirror.com+nuxt@3.0.0_mzquuutm2auzin3v6b3mmu2eea/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}