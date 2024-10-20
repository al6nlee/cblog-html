import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        // 从 localStorage 和 sessionStorage 初始化 token
        userLocal: {
            token: localStorage.getItem('token') || '', // 这里可以存储用户的永久性 token
        },
        userSession: {
            token: sessionStorage.getItem('token') || '', // 这里可以存储用户的会话性 token
        },
    }),
    actions: {
        // 设置 LocalStorage 的 token
        setLocalToken(token: string) {
            this.userLocal.token = token;
            localStorage.setItem('token', token);
        },
        // 设置 SessionStorage 的 token
        setSessionToken(token: string) {
            this.userSession.token = token;
            sessionStorage.setItem('token', token);
        },
        // 清除所有 token
        clearTokens() {
            this.userLocal.token = '';
            this.userSession.token = '';
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
        },
    },
});