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
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/views/Blog/index.vue"),
    },
    {
      path: "/blog-1",
      name: "blog-1",
      component: () => import("@/views/Blog-1/index.vue"),
    },
    {
      path: "/blog-2",
      name: "blog-2",
      component: () => import("@/views/Blog-2/index.vue"),
    },
    {
      path: "/booking",
      name: "booking",
      component: () => import("@/views/Booking/index.vue"),
    },
    {
      path: "/complete-order",
      name: "complete-order",
      component: () => import("@/views/complete-order/index.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/Order/index.vue"),
    },
     {
      path: "/blog-home",
      name: "blog-home,",
      component: () => import("@/views/Blog-home/index.vue"),
    },
  ],
});

export default router;
