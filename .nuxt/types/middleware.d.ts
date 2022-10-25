import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/Users/Administrator/Desktop/Project/template-nuxt3/node_modules/.pnpm/nuxt@3.0.0-rc.12_43ki6vd2si6asoadc6ixzdksmm/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}