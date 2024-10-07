import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore(
  "product",
  () => {
    const saleProducts = ref([]);
    const setSaleProducts = (newProducts) => {
      saleProducts.value = newProducts;
    };
    return {
      saleProducts,
      setSaleProducts,
    };
  },
  {
    persist: true,
  }
);
