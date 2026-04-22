export function useUniEventChannel() {
  const $this = useUniThis()
  const eventChannel = $this?.getOpenerEventChannel()

  return {
    $this,
    eventChannel,
  }
}
