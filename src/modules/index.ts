import type { App } from 'vue'

import { pinia } from './pinia'
import { router } from './router'

export * from './pinia'
export * from './router'
export function useModules(app: App) {
  app
    .use(pinia)
    .use(router)
}
