<script setup>
// import router from '@/router'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import { userApi } from '@/api/user'
import { useUserStore } from '@/store/module/user'
import ProductCard from '@/components/ProductCard.vue'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
router.push('');

const carouselImages=['https://pics.meierq.com/meierq/ProductBasics/2bccd7cd-7e41-432b-a31e-da10337d7003.jpg'
,'https://pics.meierq.com/meierq/BannerImage/94f8900f-ef0b-4710-85b6-a1ca92ee762a.jpg'
]
import Layout from '@/components/Layout.vue'
const userStore = useUserStore()
console.log(userStore);
const changePage = (url) => {
  router.push(url)
}

// 非同步語法 2 種 => promise, async/await

// axios.post()


const login = async() => {
  try {
    const { data, code } = await userApi.login('emilys', 'emilyspass')
    if (code === 200) {
      const { token } = data
      userStore.setToken(token)
    }
  } catch(err) {
    console.log(err);
  }
}
login()

// 創建登入API => axios 串接
/*
1. 請求網址(域名 + 路徑)
2. 請求方法
3. 請求體

*/
// 登入
// 後端 => API => 把資料到資料庫確認身份 => (O)token (X)沒有這個人
// 前端 => token放去本地(localStorage) => 登入狀態

// 表單驗證 => 帳號+密碼 => API傳送資料給後端 => 後端驗證成功傳給前端token => 前端將token存在本地

const scrollUp = () =>{
window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<template>
<layout>
  <main>
      <section id="banner">
      <div class="banner-container"></div>
      </section>
      <div class="hidden-xs hidden-sm" id="event_slider_scroll"></div>
      <div id="event_tab">
      <span>E</span>
      <span>V</span>
      <span>E</span>
      <span>N</span>
      <span>T</span>
      </div>
      <div id="event_slider_content"></div>
      <div class="event_content"></div>
        <a href="https://www.queenshop.com.tw/zh-TW/News?ID=a07c5353-e298-49cc-9493-d17e3831a24a&amp;IDType=3">
      <img src="https://www.queenshop.com.tw/Upload/E88ED8AA-0BE9-44B5-8F13-F084FD496230/zh-TW/20240731160934026.jpg"><p></p></a>
      
    <a-carousel autoplay>
      <div v-for="(image, idx) in carouselImages" :key="idx"
      class='h-96'>
      <img class="w-full h-96 object-cover"
      :src="image" alt="image">
      </div>
    </a-carousel>
  
  <img class="bar" src="@/assets/images/打折bar-1.png" alt="">
  <div>
    <img src="https://photo.queenshop.com.tw/qs/333/home/2024/0820/s1.jpg">
    <img src="https://photo.queenshop.com.tw/qs/333/home/2024/0820/s3.gif">
  </div>
  
   <section class="block" style="position: relative;">
    <a href="https://www.queenshop.com.tw/zh-TW/QueenShop/ProductList?KeyWord=01098433,01098428,01086755,01098415,03021477,01025390&amp;AdSource=QMB_QS_240820-02" style="">
    <figure class="">
     <img class="lazy" src="https://photo.queenshop.com.tw/qs/333/home/2024/0820/s2.jpg" alt="">
    </figure>
      <a href="https://www.queenshop.com.tw/zh-TW/QueenShop/ProductList?KeyWord=01098433,01098428,01086755,01098415,03021477,01025390&amp;AdSource=QMB_QS_240820-02" style="position: absolute; top:0%; width:25%; left:25%; ">
    <figure class="">
    <img class="lazy" src="https://photo.queenshop.com.tw/qs/333/home/2024/0820/s2-1.jpg" alt="">
    </figure>
    </a></a>
    <a href="https://www.queenshop.com.tw/zh-TW/QueenShop/ProductList?KeyWord=01098433,01098428,01086755,01098415,03021477,01025390&amp;AdSource=QMB_QS_240820-02" style="position: absolute;top:0%; width:25%;left:75.2%;">
  <figure class="delay25 in-view">
   <img class="lazy" src="https://photo.queenshop.com.tw/qs/333/home/2024/0820/s2-2.jpg" alt="">
    </figure></a>
  </section>

  <section id="product">
    <h2 class=" text-center bg-white drop-shadow-md h-[70px] leading-[70px] text-2xl text-title-pink">BEST RECOMMEND</h2>
    <!-- <product-card :image="carouselImages[0]"></product-card> -->
    <div class="container mx-auto">
    <div class="flex -mx-2 flex-wrap">
    <div class="w-1/4 px-2 mb-4 "> 
    <product-card :image="carouselImages[0]"></product-card></div>
    <div class="w-1/4 px-2 mb-4 "> 
    <product-card :image="carouselImages[0]"></product-card></div>
    <div class="w-1/4 px-2 mb-4 "> 
    <product-card :image="carouselImages[0]"></product-card></div>
    <div class="w-1/4 px-2 mb-4 "> 
    <product-card :image="carouselImages[0]"></product-card></div>    
    <div class="w-1/4 px-2 mb-4 "> 
    <product-card :image="carouselImages[0]"></product-card></div>
     <div class="w-1/4 px-2 mb-4 "> 
    <product-card :image="carouselImages[0]"></product-card></div>
     <div class="w-1/4 px-2 mb-4 "> 
    <product-card :image="carouselImages[0]"></product-card></div>
     <div class="w-1/4 px-2 mb-4 "> 
    <product-card :image="carouselImages[0]"></product-card></div>
    <figure class="flex justify-center my-8">
      <img class="w-1/5 justify-items-center" src="https://pics.meierq.com/meierq/ProductBasics/6a5ff197-5e40-429e-9145-d657521df2b3.jpg" alt="">
      <img class="w-1/5 justify-items-center" src="https://pics.meierq.com/meierq/ProductBasics/3af4d929-0ac8-4913-9e8e-be672e35f1ed.jpg" alt="">
      <img class="w-1/5 justify-items-center" src="https://pics.meierq.com/meierq/ProductBasics/970f0c00-a3f7-4e00-bd72-e9895d9d6937.jpg" alt="">
      <img class="w-1/5 justify-items-center" src="https://pics.meierq.com/meierq/ProductBasics/3e475708-cc17-41f9-917d-375f0e3d2976.jpg" alt=""> 
    </figure>
    </div>
    </div>
    </section>
  <!-- 
        <div class="mask"></div> -->
  
        <!-- <div class="col-4">
          <div class="product__card"></div>
        </div>
        <div class="col-4">
          <div class="product__card"></div>
        </div>
        <div class="col-4">
          <div class="product__card"></div>
        </div>
        <div class="col-4">
          <div class="product__card"></div>
        </div>
        <div class="col-4">
          <div class="product__card"></div>
        </div> -->
  <div class="">
    <img button @click="changePage('/advertise') " class="fixed bottom-5 right-5 w-[250px] mr-8 shadow-2xl cursor-pointer" src="@/assets/images/右下廣告.jpg" alt=""></div>
      <!-- <div><i class="fa-solid fa-x mark justify-items-end"></i></div> -->
    <div @click="scrollUp" class="fixed bottom-[30px] text-3xl right-[15px] drop-shadow-lg ">
    <i class="fa-solid fa-circle-chevron-up cursor-pointer " style="color: #ffffff"></i>
    <a line="" idx="" href="https://line.me/ti/p/~@hsia.vv">
    <img src ="@/assets/images/line.png" class="fixed drop-shadow-md bottom-12 " alt=""></a></div>
  </main>
</layout>
</template>

<style scoped>

#event_tab {
  position: absolute; 
  top: 300px; 
  right: -20px; 
  width: 20px; 
  background: #737373;
  color: #fff; 
  text-align: center; padding: 9px 0; 
  opacity: .6; 
  cursor: pointer;}

#event_slider_content::-webkit-scrollbar {
  width: 6px;
}
#event_slider_content::-webkit-scrollbar-thumb {
  background: rgb(204, 204, 204);
  border-radius: 10px;}

#event_slider_content::-webkit-scrollbar-track {
  background: rgb(238, 238, 238);}

.product__title {
  text-align: center;
  color:#DB4D6D;
  height: 70px;
  line-height: 70px;
  font-size: 30px;
}

#banner {
  height: 800px;
  background-image: url("../../assets/images/banner.jpg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}

.h-96{
  margin-top: 20px;
  max-width: 100%;
  display: inline-block;
  overflow: hidden; 
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  /* border: 1px solid blue; */
}

/* .col-4 {
  width: 20%;
  padding: 0 20px;
  border: 1px solid red;
  } */

  #product .product__card {
    height: 200px;
    background-color: #f4a7b9;
    margin-bottom: 20px;
  }
  
  #product .card_image {
    object-fit: cover;
    width:20%;
    margin:20px;
  }
  
  .mask {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.3);
    filter:brightness(60%);
  }
  
  .advertising {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width:200px;
    /* height: 50px; */
    line-height: 100px;
    text-align: center;
    background: #f4a7b9;
    color: #fff;
    margin-right: 3%;
    
  }
  .scrollToTop {
    position: fixed;
    bottom: 30px;
    right: 15px;
    font-size:30px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
}
.line{
    position: fixed;
    bottom: 30px;
    right: 15px;
    width:0px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
} 

.lazy{
  transition: all 0.125s ease-in-out 0s;

}
</style>



