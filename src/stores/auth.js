import { defineStore } from 'pinia'

export const useAuthUserStore = defineStore({
    id: 'authStore',
    state: () => ({
        authStore: 123
    }),
    getters: {
        doubleCount: (state) => state.authStore
    },
    actions: {
        increment(id) {
            this.authStore =id
        }
    }
})
