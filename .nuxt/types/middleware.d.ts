import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/Users/caobo/Desktop/Projects/template-nuxt3/node_modules/.pnpm/registry.npmmirror.com+nuxt@3.0.0-rc.13_pcgdow7oybrbsukcuwmyazxkcy/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}