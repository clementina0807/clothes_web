<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
<div class="min-h-screen flex flex-col">
    <header class=" bg-opacity-pink-300 h-full">
     <img button @click="router.push('/')" class="w-[200px] mx-auto cursor-pointer " src="@/assets/images/b.gif" alt="" />
      <ul class="flex justify-center sticky top-0 bg-white drop-shadow-lg">
      <li class="mr-9 nav-list ">
        <a href= "http://localhost:5173/sale" button @click="changePage('/sale')" class="nav-link relative text-xl py-5 inline-block">SUMMER SALE</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="http://localhost:5173/bestseller" button @click="changePage('/Bestseller')" class="nav-link relative text-xl py-5 inline-block">Bestseller</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="http://localhost:5173/products" button @click="changePage('/Products')" class="nav-link relative text-xl py-5 inline-block">Product</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="http://localhost:5173/new" button @click="changePage('/New')" class="nav-link relative text-xl py-5 inline-block">New Arrival</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="#" class="nav-link relative text-xl py-5 inline-block">Blog</a>
      </li>
      <li class="nav-list">
        <a href="#" class="nav-link relative text-xl py-5 inline-block">Contact Us</a>
      </li>
    </ul>
    <slot></slot>
    </header>

    <div class=" flex justify-end pt-4 mr-8 ">
      <ol><li><select>
      <option>排序</option>
      <option >$由低到高</option>
      <option>$由高到低</option>
      <option>最新上架</option>
       <option>最高人氣</option>
    </select></li></ol></div>

    <section id="product">
    <div class="flex">
    <div class="font-bold bg-background mr-10 ml-12 mt-12 underline underline-offset-2 leading-loose ">
    <ul><a href="">上著</a>
    <li><a href=""></a></li>
    <a href="" >下著</a>
    <li><a href=""></a></li>
    <a href="" >連身款</a>
    <li><a href=""></a></li>
    </ul>
    </div>

    <nav class="flex-1 flex justify-end mr-12 mt-5 mb-5 flex-wrap ">
    <div class="relative w-[250px] h-[300px] px-2 mb-20 mt-2 item hover">
      <a href="https://www.meierq.com/zh-tw/market/n/11433?c=31142">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class="w-full h-full object-cover block">
      <img class="hover" src="https://pics.meierq.com/meierqimg/ProductBasics/26fdc38d-ae44-4bb1-a277-14063968be52.jpg" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      </a>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px] ">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
    </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
    <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>

    <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px] ">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
    </div>></div>
     <div class="relative w-[250px] h-[300px] px-2 mb-20  mt-2">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      
    <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
    </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
      </div></div>
      <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
     <div class="relative w-[250px] h-[300px]  px-2 mb-20 mt-2 ">
      <img src ="https://cdn.grail.bz/images/goods/d/ru1124/ru1124_v1.jpg" class ="w-full h-full object-cover" alt="">
      <div class="mb-2 right-9">
      <p class="flex cursor-pointer justify-center mt-2">
        <a href="">小蒼蘭薄紗緞帶露肩上衣</a></p> 
        <ul class="flex cursor-pointer justify-center ">
        <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1 ">
          <span>S</span></p> 
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>M</span></p>
          <li><a href=""></a></li>
        <p class="mx-3 text-sm mt-1">
          <span>L</span></p>
          <li><a href=""></a></li></ul> 
          <p class="flex justify-center text-sm  mt-2">
          <span>NT. 790</span></p></div>
      <div class="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[160px]">
     <button class=" bg-title-pink border-solid  mb-30 w-10 h-8 text-white ">sale</button>
     </div></div>
  </nav> </div></section>
  </div>
  
    <footer>
      <div class=" flex bg-Bottom-pink w-full mt-16 h-5/5  text-white">
      <div class="ml-40 mt-8 ">
      <div class="tracking-wide font-bold mb-3">ABOUT</div><ul>
      <li><a href="" class="">品牌介紹</a></li>
      <li><a href="" class="">門市資訊</a></li>
      <li><a href="">品牌合作</a></li>
      <li><a href="/news">News</a></li></ul></div>
      <div class="ml-40 mt-8 ">
      <div class="  tracking-wide font-bold mb-3 ">HELP</div><ul>
      <li><a href="">會員及購物問題</a></li>
      <li><a href="">Privacy Policy</a></li>
    </ul> </div>
    <div class="ml-40 mt-8">
    <div class=" tracking-wide font-bold mb-3 ">SOCIAL</div><ul>
    <li><a href="https://www.instagram.com/meierq" target="_blank">Instagram</a></li>
    <li><a href="https://www.facebook.com/meier.q" target="_blank">Facebook</a></li>
    <li><a href="https://line.me/R/ti/p/@exv5945d" target="_blank">Line</a></li>
    </ul>
    </div>

    <div class="mx-40">
    <div class="mt-8 tracking-wide font-bold">NEWS LETTER</div>
    <div class="news-letter">
    <form id="form-newsletter-signup" novalidate="novalidate">
    <input type="email" class="text-slate-950 mt-2" name="email" placeholder="EMAIL" required=""/>
    <button class="subscribe-mail-btn mx-4 flex-col " type="submit">SUBSCRIBE</button>
    </form>
    </div> 
  
    <div class="tracking-wide font-bold mt-4 ">CUSTOMER SERVICE</div>
    <p class="">service_tw@meierq.com</p>
    <p class="mb-2"> Mon.~ Fri. 09:00-12:00 / 13:00-18:00</p>
   
    <div class="tracking-wide self-start">© 薩摩亞商皇后國際有限公司台灣分公司｜統一編號 53678183</div>
    </div>
    </div>
   

</footer>
</template>


<style scoped>
.item__images .hover {
    visibility: hidden;
    opacity: 0;
    transition: opacity .5s;
}

.nav-list:hover .nav-link::before {
  width: 100%;
}

.nav-link::before {
  content: "";
  display: block;
  background-color: #f4a7b9;
  width: 0%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all.3s;
  margin-bottom: 10px;

}


</style>
