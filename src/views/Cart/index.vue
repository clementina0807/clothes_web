<script setup>
import { placements } from 'ant-design-vue/es/vc-tour/placements';
import { useRouter, useRoute } from 'vue-router';
import { useProductStore } from '@/store/module/product'
import { ref, computed, watch } from 'vue'
import CartCard from '@/components/cartCard.vue'
import Checkbox from '@/components/Checkbox.vue'

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
const productStore = useProductStore()
const cart = computed(() => productStore.cart)
const totalPrice = computed(() => {
  let price = 0
  for (const item of cart.value) {
    price += item.price * item.quantity
  }
  return price
})
const totalQuantity = computed(() => {
  let quantity = 0
  for (const item of cart.value) {
    quantity += item.quantity
  }
  return quantity
})
console.log(cart.value);
const removeCart = (idx) => {
  // 資料庫刪掉 store
  productStore.removeCart(idx)
}

const isFavorite = ref(productStore.favoriteProducts.some(item => item.id === routeId.value))
const handleFavorite = (id) => {
  isFavorite.value = !isFavorite.value
  if (isFavorite.value) {
    message.success('已加入收藏')
  } else {
    message.success('移除收藏')
  }
  productStore.setFavoriteProducts(id)
}
const allCheck = ref(false)
const selectedProducts = ref([])
const handleCartSelect = (check, idx) => {
  console.log(selectedProducts.value);
  const isSelected = selectedProducts.value.some(index => index === idx)
  if (check && !isSelected) {
    selectedProducts.value = [...selectedProducts.value, idx]
  } else {
    selectedProducts.value = selectedProducts.value.filter(index => index !== idx)
  }
}
const handleAllCheck = (check) => {
  if (check) {
    selectedProducts.value = cart.value.map((_, idx) => idx)
  } else {
    selectedProducts.value = []
  }
}

watch(selectedProducts, (newVal) => {
  allCheck.value = newVal.length === cart.value.length
  console.log(newVal.length === cart.value.length);
})
</script>

<template>
  <div class="bg-[#F8C3CD] h-full">
    <div class="flex justify-center py-2">
      <i class="fa-solid fa-cart-shopping  ">
        <dt class="rounded-full bg-slate-100 size-8  -my-6 -mx-1.5"></dt>
      </i>
      <ul class="ml-4">購物清單</ul>
      <div class="hori-line mt-4 ml-4 "></div>
      <i class="fa-regular fa-pen-to-square mt-1 ml-4"></i>
      <ul class="ml-4">填寫資料</ul>
      <div class="hori-line mt-4 ml-4 "></div>
      <i class="fa-regular fa-face-smile mt-1 ml-4"></i>
      <ul class="ml-4">完成訂單</ul>
    </div>
    <div class="flex justify-center">
      <div class="w-2/5 p-3 rounded-2xl bg-white ">
        <checkbox
          class="border-b border-solid border-black mb-4 pb-3" :checked="allCheck"
          @checked-change="handleAllCheck">
          <template #title>
            全選
          </template>
        </checkbox>
        <cart-card class="mb-3" v-for="(item, idx) in cart" :key="item.id" :image="item.cover" :name="item.name"
          :price="item.price" :quantity="item.quantity" :size="item.size" @remove-cart="removeCart(idx)"
          :checked="selectedProducts.some(item => item === idx)"
          @checked-change="(val) => handleCartSelect(val, idx)" />
      </div>
      <div class="w-1/5 h-1/2 p-4 bg-white rounded-2xl mx-10">
        <div class="px-2 pb-8 flex-col">
          <p class="pb-2 text-lg">{{ totalQuantity }} 件總計</p>
          <p class="text-2xl font-bold">NT$ {{ totalPrice }}</p>
        </div>
        <button class="w-full py-1 px-5 text-lg font-bold rounded-xl bg-[#cd333339] text-[#cd3333] cursor-pointer"
          @click="changePage('/booking')">
          前往結帳
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>

.hori-line {
    width: 20%;
    height: 2px;
    border-top: solid #000000 1px;
}

.hover\:text-themeRed:hover {
    --tw-text-opacity: 1;
    color: rgb(205 51 51 / var(--tw-text-opacity));
}
</style>
