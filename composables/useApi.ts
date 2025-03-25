import type { FetchError } from 'ofetch'
import camelCaseKeys from 'camelcase-keys'

export default function useApi<T>(
  url: string | (() => string),
  opts?: Record<string, unknown>,
) {
  const config = useRuntimeConfig()

  return useFetch<T, FetchError<any>>(url, {
    baseURL: config.public.apiBase,
    ...opts,
    onResponse({ response }) {
      if (response._data) {
        response._data = camelCaseKeys(response._data, { deep: true })
      }
    },
  })
}
