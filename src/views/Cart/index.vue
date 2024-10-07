<script setup>
import { placements } from 'ant-design-vue/es/vc-tour/placements';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}

</script>

<template>
<div class="bg-[#F8C3CD] ">
<div class="flex justify-center mt-8 py-2 mb-10  ">
  <i class="fa-solid fa-cart-shopping  ">
  <dt class=" rounded-full bg-slate-100 size-8  -my-6 -mx-1.5"></dt></i>
  <ul class="ml-4">購物清單</ul>
<div class="hori-line mt-4 ml-4 "></div>
  <i class="fa-regular fa-pen-to-square mt-1 ml-4"></i>
  <ul class="ml-4">填寫資料</ul>
<div class="hori-line mt-4 ml-4 "></div>
  <i class="fa-regular fa-face-smile mt-1 ml-4"></i>
  <ul class="ml-4">完成訂單</ul>
 </div>
 <div class="flex justify-center mb-80">

  <div class="w-2/5 p-3 rounded-2xl bg-white ">

    <div class="h-12 flex  p-2 mx-3"><div>
      <div class="flex items-center">
        <label class="mr-1 relative block w-4 h-4 rounded cursor-pointer border-2 border-solid border-black">
        <input type="checkbox" class="invisible absolute"><i class="fa-solid fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden"></i></label>全選</div></div><div></div></div><hr><div><div>
          <!-- <label class="mr-40 relative block w-5 h-5 rounded cursor-pointer border-2 border-solid border-black">
          <input type="checkbox" class="invisible absolute mr-4">
          <i class="fa-solid fa-check absolute hidden"></i></label>選取 --></div>
        <div class="my-4 mx-3">
        <div class="flex justify-content-between">
        <img src="https://pics.meierq.com/meierq/ProductBasics/afb7bcd9-6fa2-4143-9f6e-03c08274402c.jpg" alt="蕾絲簍空感外罩上衣" class="w-40">
        <h1 class="mx-12 font-bold  ">透紗木耳邊V領外罩洋裝
        <i class="fa-regular fa-heart mx-4 text-2xl -mt-1  hover:text-themeRed"></i>
        <button class=" px-1  text-base border border-solid border-gray-300 rounded-md cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
        <i class="fa-solid fa-trash-can "></i>刪除</button></h1></div>
        <h2 class="bg-pink-200 w-40 text-center">已符合活動優惠</h2>
        <div class="-mt-10 flex justify-center">
        <span class="sell-price font-bold mr-12 -mt-24 ">單價 NT. 690 </span></div>
        <ul></ul>

      <div class="mx-96">
      <a-select v-model:value="placements" style="width: 120px" :dropdown-match-select-width="false" :placement="placement">
      <a-select-option value="topLeft">1</a-select-option>
      <a-select-option value="topLeft">2</a-select-option>
      <a-select-option value="topLeft">3</a-select-option>
      <a-select-option value="topLeft">4</a-select-option>
      <a-select-option value="topLeft">5</a-select-option>
      <a-select-option value="topLeft">6</a-select-option>
      <a-select-option value="topLeft">7</a-select-option>
      <a-select-option value="topLeft">8</a-select-option>
      <a-select-option value="topLeft">9</a-select-option>
      <a-select-option value="topLeft">10</a-select-option>
    </a-select></div></div></div>
    <div class="flex ">
      <div class="flex mx-40 -mt-10"></div></div></div>
        <div class="w-1/5 h-1/2 p-4 bg-white rounded-2xl mx-10  ">
        <div class="px-2 pb-8 flex-col">
        <p class="pb-2 text-lg">件總計</p>
        <p class="text-2xl font-bold">NT$</p></div>
        <button class="w-full py-1 px-5 text-lg font-bold rounded-xl bg-[#cd333339] text-[#cd3333] cursor-pointer " 
        @click="changePage('/booking')">前往結帳</button></div>
      </div></div>
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
