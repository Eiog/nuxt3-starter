import {
    defineNuxtRouteMiddleware,
    navigateTo,
} from "#app";

import { useAppStore } from "~~/stores/appStore";

export default defineNuxtRouteMiddleware((to, form) => {
    const appStore = useAppStore();
    if (appStore.isLogin) {
        console.log('已登录')
    } else {
        console.log('未登录')
        return navigateTo({ path: `/login`, query: { redirect: to.fullPath } });
    }
});
