import { getCurrentInstance } from 'vue'

export function useUniThis() {
  const $this = getCurrentInstance()?.proxy
  return $this
}
