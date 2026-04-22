import { getCurrentInstance } from 'vue'

type UniEventChannel = {
  emit: <T = any>(event: string, data: T) => void
  on: <T = any>(event: string, callback: (data: T) => void) => void
  once: <T = any>(event: string, callback: (data: T) => void) => void
  off: <T = any>(event: string, callback: (data: T) => void) => void
}
export function useUniThis() {
  const $this = getCurrentInstance()?.proxy as (ComponentPublicInstance & { getOpenerEventChannel: () => UniEventChannel }) | null
  return $this
}
