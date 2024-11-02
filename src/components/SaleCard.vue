<script setup>
import { defineProps, defineEmits } from 'vue'
// import { useProductStore } from '@/store/module/product'

defineProps({
  cover: {
    type: String
  },
  image: {
    type: String
  },
  name: {
    type: String
  },
  price: {
    type: Number
  }
})
// const productStore = useProductStore()
// const products = productStore.products

const emit = defineEmits(['cardClick'])
const handleClick = () => {
  emit('cardClick')
}
</script>
<template>
  <div @click="handleClick" class="relative flex flex-col items-center">
   <div class="w-full h-[300px] bg-cover bg-center" :class="[`bg-[url('https://pics.meierq.com/meierq/ProductBasics/e63d44f6-bdaf-4a81-af73-5255ed6052d6.jpg')]`, `hover:bg-[url('https://pics.meierq.com/meierq/ProductBasics/beff33c5-1711-4279-82ba-1af69c3c4a49.jpg')]`]">
    </div>
    <div class="mb-2 flex flex-col items-center">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">{{ name }}</a>
      </p>
      <ul class="flex cursor-pointer justify-center">
        <li class="mr-6 text-sm mt-1">S</li>
        <li class="mr-6 text-sm mt-1">M</li>
        <li class="text-sm mt-1">L</li>
      </ul>
      <span class="text-sm mt-2">NT. {{ price }}</span>
    </div>
    <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <button class="bg-title-pink border-solid mb-30 w-10 h-8 text-white ">sale</button>
    </div>
  </div>
</template>