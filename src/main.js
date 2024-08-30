import { createApp } from 'vue'
import '@/assets/css/index.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
import Antd from 'ant-design-vue'

createApp(App).use(Antd).use(pinia).use(router).mount('#app')
