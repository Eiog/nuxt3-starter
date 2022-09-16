import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/Users/Administrator/Documents/Project/template-nuxt3/node_modules/.pnpm/nuxt@3.0.0-rc.9_h6agkwwh7kkfugk5s5ggmrmqvm/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}