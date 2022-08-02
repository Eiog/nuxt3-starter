import { defineStore } from 'pinia'
type User = {
    account: string
    name: string
    avatar: string
}
export const useAppStore = defineStore('appStore', () => {
    const user = ref<User>()
    const token = ref<string>()
    const isLogin = computed(() => {
        return !!token.value
    })
    return {
        user, token, isLogin
    }
}, {
    persist: {
        key: '__app__',
        paths: ['user', 'token']
    },

}
)