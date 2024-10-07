<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
</script>

<template>
<div class="h-96 flex">
<header class="bg-white"></header>
<div id="banner">
  <img src="@/assets/images/blog.png" alt="" class="justify-center bg-cover  "></div>
</div> 
<div class="article z-10"></div>
<h1 class="text-center text-2xl font-bold ">最新文章一覽</h1>
<div class="border-neutral-300 border-solid  border-[1px] "></div>
<div class="flex bg-white drop-shadow-xl justify-center py-8 pt-8">
  <div class="w-1/5">
    <div class="drop-shadow-xl mx-4">
      <img src="https://www.queenshop.com.tw/assets/images/blog/24083001/s5.jpg" class="w-[300px] h-[300px] object-cover drop-shadow-lg" alt="">
      <i class="fa-solid fa-calendar-days mt-4 mx-4"></i> 
      <span id="date" class="font-bold">2024 / Aug / 22 </span>
      <p class="italic mx-4">初秋日系多層次穿搭示範 ...</p>
      <button type="button" class=" px-2 py-1 text-sm  mb-4" @click="changePage('/blog')">Read more >></button></div></div>
    <div class="w-1/5">
      <div class="drop-shadow-xl mx-4">
        <img src="https://www.queenshop.com.tw/assets/images/blog/24080901/a.jpg" class="w-[300px] h-[300px] object-cover drop-shadow-lg" alt="">
        <!-- <h3 class="font-bold pt-2 mx-2 text-lg">我得心情</h3> -->
        <i class="fa-solid fa-calendar-days mt-4 mx-4"></i> 
        <span id="date" class="font-bold">2024 / Sep / 15 </span>
        <p class="italic mx-12"> 7種牛仔短褲穿搭攻略...</p>
        <button type="button" class="  px-2 py-1 text-sm  mb-4" @click="changePage('/blog-1')"  >Read more >></button>
      </div>
    </div>
    <div class="w-1/5">
      <div class="drop-shadow-xl mx-4">
        <img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s6.jpg" class="w-[300px] h-[300px] object-cover drop-shadow-lg" alt="">
        <!-- <h3 class="font-bold pt-2 mx-2 text-lg">我得心情</h3> -->
        <i class="fa-solid fa-calendar-days mt-4 mx-4"></i> 
        <span id="date" class="font-bold">2024 / Nov / 8 </span> 
        <p class="italic mx-12 ">【日本佐賀 ‧ 旅拍】<br> 佐賀打卡必去咖啡廳...</p>
        <button type="button" class=" px-2 py-1 text-sm  mb-4"  @click="changePage('/blog-2')">Read more >></button>
      </div>
    </div>
  </div>



</template>

<style scoped>
.number {
 border: solid #000000 1px;
 padding: 5px 12px;
}

</style>

