/* eslint-disable no-console */
import type { Router } from '@wot-ui/router'

export function useRouteGuard(router: Router) {
  router.beforeEach((_to, from) => {
    console.log('beforeEach', _to, from)
  })
  router.afterEach((_to, from) => {
    console.log('afterEach', _to, from)
  })
}
