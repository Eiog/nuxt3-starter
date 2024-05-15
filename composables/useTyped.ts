import { onMounted, ref } from 'vue'
import type { TypedOptions } from 'typed.js'
import Typed from 'typed.js'

/**
 * 绘制图形验证码
 * @param strings - 显示的字符
 * @param options - 配置项
 */
export default function useTyped(strings?: string[], options?: TypedOptions) {
  const domRef = ref<HTMLElement>()
  const typed = ref<Typed>()
  onMounted(() => {
    typed.value = new Typed(domRef.value, {
      strings,
      ...options,
    })
  })

  return {
    domRef,
    typed,
  }
}
