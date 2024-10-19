import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore(
  "product",
  () => {
    const saleProducts = ref([]);
    const setSaleProducts = (newProducts) => {
      saleProducts.value = newProducts;
    };
    const favoriteProducts = ref([]);
    const setFavoriteProducts = (id) => {
      const isFavorite = favoriteProducts.value.some((item) => item.id === id);
      if (isFavorite) {
        // 不要收藏
        const newProducts = favoriteProducts.value.filter(
          (item) => item.id !== id
        );
        favoriteProducts.value = newProducts;
      } else {
        // 收藏
        const product = saleProducts.value.find((item) => item.id === id);
        favoriteProducts.value = [...favoriteProducts.value, product];
      }
    };
    const cart = ref([]);
    const addCart = (id, size, quantity) => {
      const product = saleProducts.value.find((item) => item.id === id);
      cart.value = [
        ...cart.value,
        {
          ...product,
          size,
          quantity,
        },
      ];
    };
    const removeCart = (idx) => {
      const originCart = [...cart.value];
      originCart.splice(idx, 1);
      cart.value = originCart;
    };
    return {
      saleProducts,
      setSaleProducts,
      favoriteProducts,
      setFavoriteProducts,
      cart,
      addCart,
      removeCart,
    };
  },
  {
    persist: true,
  }
);
