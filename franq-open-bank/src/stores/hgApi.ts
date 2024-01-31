import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from 'axios'

export const useHgApi = defineStore({
  id: 'hgApi',

  state: () => ({
    userData: [] as any[]
  }),

  actions: {
    async fincance() {
      const api = axios.create({
        baseURL: 'https://api.hgbrasil.com/'
      })

      try {
        const response = await api.get(`finance?key=251de88d`)

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
