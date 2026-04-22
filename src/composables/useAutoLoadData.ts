import type { UseInfiniteData, UseInfiniteScrollOptions } from 'vue-hooks-plus/lib/useInfiniteScroll/types'
import useInfiniteScroll from 'vue-hooks-plus/es/useInfiniteScroll'

export type AutoLoadDataOptions<P extends Record<string, any>, R extends UseInfiniteData> = {
  defaultParams: Partial<P>
  fields?: {
    page?: string
    pageSize?: string
    count?: string
  }
  infiniteScrollOptions?: UseInfiniteScrollOptions<R> | undefined
}
export function useAutoLoadData<P extends Record<string, any>, R extends UseInfiniteData>(service: (param: P) => Promise<R>, options?: AutoLoadDataOptions<P, R>) {
  const { defaultParams, fields, infiniteScrollOptions } = options ?? {}
  const { page = 'page', pageSize = 'pageSize', count = 'count' } = fields ?? {}
  const paramsRef = ref<Record<string, any>>({
    [page]: 1,
    [pageSize]: 10,
    ...defaultParams,
  })
  const result = useInfiniteScroll<R>((data) => {
    paramsRef.value[page] = data ? Math.ceil(data.list.length / paramsRef.value[pageSize]) + 1 : 1
    return service(paramsRef.value as P)
  }, infiniteScrollOptions)
  const hasMore = computed<boolean>(() => result.data.value && (result.data?.value.list.length < result.data?.value[count]))
  return {
    ...result,
    hasMore,
    params: paramsRef as Ref<P>,
  }
}
