import type { FormInst } from 'naive-ui'
import type { WatchSource } from 'vue'

export function useVerifyForm(formRef: Ref<FormInst | null>, watcher: WatchSource) {
  const validate = ref(false)
  let _onSuccess: (() => void) | null = null
  let _onFailed: (() => void) | null = null
  watch(watcher, () => {
    formRef.value?.validate(async (err) => {
      if (!err) {
        validate.value = true
        if (_onSuccess && isFunction(_onSuccess))
          _onSuccess()
      }
      else {
        validate.value = false
        if (_onFailed && isFunction(_onFailed))
          _onFailed()
      }
    })
  }, {
    deep: true,
    immediate: true,
  })
  return {
    validate,
    restoreValidation: formRef.value?.restoreValidation,
    onSuccess: (callback: () => void) => {
      _onSuccess = callback
    },
    onFailed: (callback: () => void) => {
      _onFailed = callback
    },
  }
}
