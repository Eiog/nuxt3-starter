import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/Users/caobo/Desktop/Project/nuxt3-starter/node_modules/.pnpm/registry.npmmirror.com+nuxt@3.1.1_jboqra4ulxhgkhfbuyjxpodxom/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}