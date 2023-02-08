import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/Users/PC/Desktop/Projects/nuxt3-starter/node_modules/.pnpm/registry.npmmirror.com+nuxt@3.1.2_czv7u6ss4b3sxz62ydc6qo4idu/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}