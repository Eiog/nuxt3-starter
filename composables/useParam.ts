export interface Param {
  page: number
  limit: number
  [key: string]: any
}

export function useParam<T extends Param >(param?: { [key: string]: any }) {
  const paramRaw: { page: number, limit: number } = {
    page: 1,
    limit: 10,
    ...param,
  }
  const paramRef = ref<T>(paramRaw as T)
  function setParam(param: T) {
    paramRef.value = {
      ...paramRef.value,
      ...param,
    }
  }
  function deleteParam(key: string) {
    delete paramRef.value[key]
  }
  function reset() {
    paramRef.value = paramRaw as any
  }
  let _onChange: ((param: T) => void) | null = null
  watch(paramRef, (v) => {
    if (_onChange)
      _onChange(v as any)
  }, { deep: true })
  return {
    param: paramRef,
    setParam,
    deleteParam,
    reset,
    onChange: (cb: (param: T) => void) => {
      _onChange = cb
    },
  }
}
