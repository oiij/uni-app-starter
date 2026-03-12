import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export const pinia = createPinia().use(createPersistedState({
  storage: {
    setItem: (key, value) => uni.setStorageSync(key, value),
    getItem: key => uni.getStorageSync(key),
  },
}))
