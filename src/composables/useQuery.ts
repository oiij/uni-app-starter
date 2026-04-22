export function useQuery<T, Q = any>(key?: string, defaultValue?: T) {
  const query = ref<Q>({} as Q)
  const value = ref<T | undefined>(defaultValue)
  const onQueryEvent = createEventHook<[T, Q]>()
  const onLoadEvent = createEventHook<[Q]>()
  onLoad((q) => {
    if (q) {
      onLoadEvent.trigger(q as Q)
      query.value = q ?? {}
      if (q && key && q[key]) {
        value.value = decodeURIComponent(q[key])
        onQueryEvent.trigger(value.value, query.value)
      }
    }
  })
  return {
    query,
    value,
    onQuery: onQueryEvent.on,
    onLoad: onLoadEvent.on,
  }
}
