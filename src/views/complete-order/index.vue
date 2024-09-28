<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
</script>

<template>
<div class="bg-[#F8C3CD]">

<div class="flex justify-center mt-8 py-2  mb-10  ">
  <i class="fa-solid fa-cart-shopping "></i>
  <ul class="ml-4">購物清單</ul>
  <div class="hori-line mt-4 ml-4 "></div>
  <i class="fa-regular fa-pen-to-square mt-1 ml-4"></i>
  <ul class="ml-4">填寫資料</ul>
  <div class="hori-line mt-4 ml-4 "></div>
  <i class="fa-regular fa-face-smile  text-pink-700 mt-1 ml-4">
  <dt class=" rounded-full bg-yellow-400 size-8 -my-6 -mx-2 "></dt></i>
  <ul class="ml-4">完成訂單</ul>
 </div>
<div class="w-[70%] h-1/2 mx-auto mb-40 p-4 flex flex-col items-center  rounded-lg bg-white text-xl ">
  <div class="my-5">訂單已完成</div>
  <div class="py-2 px-2 text-xl font-bold rounded-lg  bg-[#cd3333] text-[#ffffff] cursor-pointer" @click="changePage('/order')">訂單資料</div>
</div></div>
</template>

<style scoped>

.hori-line {
    width: 20%;
    height: 2px;
    border-top: solid #000000 1px;
}
</style>
