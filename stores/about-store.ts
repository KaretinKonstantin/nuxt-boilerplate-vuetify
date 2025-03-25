import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyStore = defineStore('My Store', () => {
  const value = ref(0)

  const increment = () => {
    value.value++
  }
  return { value, increment }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMyStore, import.meta.hot))
}
