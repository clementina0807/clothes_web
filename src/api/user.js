import axios from 'axios'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const userApi = {
  login: async(username, password) => {
    const { data, status } = await axios.post('https://dummyjson.com/auth/login', { username, password })
    return { data, code: status }
  }
}
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const isDarkTheme = ref(false) // 暗黑主題狀態
    const setToken = (newToken) => {
      token.value = newToken
    }
    const setIsDarkTheme = (bool) => { // 更新暗黑主題狀態函數
      isDarkTheme.value = bool
    }
    const userInfo = reactive({
      user: '思宇',
      image: 'https://plus.unsplash.com/premium_photo-1661315514682-e093b4a30af5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })

    return {
      isDarkTheme,
      setIsDarkTheme,
      token,
      setToken,
      userInfo,
    }
  },
  {
    persist: true
  }
)