import { defineStore } from "pinia";
import { ref } from "vue";

// vuex => getter state action mutation
export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref(""); // 狀態
    const setToken = (newToken) => {
      // 更新狀態函數
      token.value = newToken;
    };
    return {
      token,
      setToken,
    };
  },
  {
    persist: true,
  }
);
