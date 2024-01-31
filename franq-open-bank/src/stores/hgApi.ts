import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from 'axios'

export const useHgApi = defineStore({
  id: 'hgApi',

  state: () => ({
    userData: [] as any[]
  }),

  actions: {
    async fincance() {
      const apiKey = '251de88d'
      const apiUrl = `/api/finance?key=${apiKey}`
      try {
        const response = await axios.get(apiUrl)

        return response
      } catch (error) {
        console.error(error)
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHgApi, import.meta.hot))
}
