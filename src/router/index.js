import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/Products/index.vue"),
    },
    {
      path: "/product/:id",
      name: "productDetail",
      component: () => import("@/views/ProductDetail/index.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/Cart/index.vue"),
    },
    {
      path: "/advertise",
      name: "advertise",
      component: () => import("@/views/Advertise/index.vue"),
    },
    {
      path: "/sale",
      name: "sale",
      component: () => import("@/views/Sale/index.vue"),
    },
    {
      path: "/photo",
      name: "photo",
      component: () => import("@/views/Photo/index.vue"),
    },
    {
      path: "/service",
      name: "service",
      component: () => import("@/views/Service/index.vue"),
    },
    {
      path: "/new",
      name: "new",
      component: () => import("@/views/New/index.vue"),
    },
    {
      path: "/bestseller",
      name: "bestseller",
      component: () => import("@/views/Bestseller/index.vue"),
    },
  ],
});

export default router;
