import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/Products/index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart/index.vue')
    },
    {
      path: '/advertise',
      name: 'advertise',
      component: () => import('@/views/Advertise/index.vue')
    },
    {
      path: '/sale',
      name: 'sale',
      component: () => import('@/views/Sale/index.vue')
    }
  ]
})

export default router
