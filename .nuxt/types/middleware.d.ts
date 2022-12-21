import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/Users/caobo/Desktop/Project/template-nuxt3/node_modules/.pnpm/registry.npmmirror.com+nuxt@3.0.0_sx6ar3c6qkfwnpeonny6n4zhru/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}