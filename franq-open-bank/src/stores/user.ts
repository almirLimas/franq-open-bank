import { defineStore, acceptHMRUpdate } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({
    userData: [] as any[]
  }),

  actions: {
    async register(userObject: any) {
      const user = JSON.parse(localStorage.getItem('userData') || '[]')

      user.push(userObject)

      localStorage.setItem('userData', JSON.stringify(user))
      return true
    },
    async login(userObject: any) {
      console.log(userObject.userName)
      const user = JSON.parse(localStorage.getItem('userData') || '[]')
      const userFound = user.find(function (u: any) {
        return u.userName === userObject.userName && u.password === userObject.password
      })

      if (userFound) {
        localStorage.setItem('user', JSON.stringify({ username: userObject.userName }))
        return true
      } else {
        return false
      }
    },

    async checkAuthentication() {
      const user = JSON.parse(localStorage.getItem('user') || '[]')

      if (user) {
        return true
      } else {
        return false
      }
    },

    async logout() {
      console.log('chegouu')
      localStorage.removeItem('user')
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
