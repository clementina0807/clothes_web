import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist) // 希望狀態可以被存放在瀏覽器儲存空間 => 預設 localStorage

// localStorage => 永久保存
// sessionStorage => 關閉頁面儲存的東西會被刪除
// cookie

export default pinia

