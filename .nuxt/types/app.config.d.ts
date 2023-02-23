
import type { Defu } from 'defu'
import cfg0 from "C:/Users/PC/Desktop/Projects/nuxt3-starter/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>

declare module 'nuxt/schema' {
  interface AppConfig extends ResolvedAppConfig { }
}
