type UniEventChannel = {
  emit: (event: string, data: any) => void
  on: (event: string, callback: (data: any) => void) => void
  once: (event: string, callback: (data: any) => void) => void
  off: (event: string, callback: (data: any) => void) => void
}
export function useUniEventChannel() {
  const $this = useUniThis()
  const eventChannel = ($this && 'getOpenerEventChannel' in $this && typeof $this.getOpenerEventChannel === 'function') ? $this?.getOpenerEventChannel() as UniEventChannel : null
  return {
    $this,
    eventChannel,
  }
}
