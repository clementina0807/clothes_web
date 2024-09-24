<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/module/user'
import ProductCard from '@/components/ProductCard.vue'
import { useRouter, useRoute } from 'vue-router';


const router = useRouter()

const carouselImages=['https://pics.meierq.com/meierq/ProductBasics/2bccd7cd-7e41-432b-a31e-da10337d7003.jpg'
,'https://pics.meierq.com/meierq/BannerImage/94f8900f-ef0b-4710-85b6-a1ca92ee762a.jpg','https://pics.meierq.com/meierq/ProductBasics/ca2a8048-47e5-4a0b-a287-331051cf339b.jpg'
]

const recommendCard=['https://cdn.grail.bz/images/goods/d/kz520/kz520_v1.jpg','https://pics.meierq.com/meierq/ProductBasics/afb7bcd9-6fa2-4143-9f6e-03c08274402c.jpg','https://cdn.grail.bz/images/goods/d/fy016/fy016_v6.jpg','https://cdn.grail.bz/images/goods/d/nh54/nh54_v1.jpg','https://pics.meierq.com/meierq/ProductBasics/fc5fa713-b94e-4102-889b-abba800d9cdc.jpg','https://cdn.grail.bz/images/goods/d/dr682/dr682_v1.jpg','https://cdn.grail.bz/images/goods/d/tg735/tg735_v1.jpg','https://pics.meierq.com/meierq/ProductBasics/9a44d069-30d6-4ac7-bd4a-5d7f60201cdd.jpg']

const userStore = useUserStore()
const changePage = (url) => {
  router.push(url)
}

const scrollUp = () =>{
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<template>
  <main>
    <div class="hidden-xs hidden-sm" id="event_slider_scroll"></div>
    <div id="event_tab">
      <span>E</span>
      <span>V</span>
      <span>E</span>
      <span>N</span>
      <span>T</span>
    </div>
    <a-carousel autoplay>
      <div v-for="(image, idx) in carouselImages" :key="idx" class='h-96'>
        <img class="w-full h-96 object-cover" :src="image" alt="image">
      </div>
    </a-carousel>
    <section id="product">
      <h2 class="text-center bg-white drop-shadow-md h-[70px] leading-[70px] text-2xl text-title-pink "> BEST RECOMMEND
      </h2>
      <div class="container mx-auto">
        <div class="flex -mx-2 flex-wrap">
          <div class="w-1/4 px-2 mb-4 ">
            <product-card :id="1" :image="recommendCard[0]"></product-card>
          </div>
          <div class="w-1/4 px-2 mb-4 ">
            <product-card :id="2" :image="recommendCard[1]"></product-card>
          </div>
          <div class="w-1/4 px-2 mb-4 ">
            <product-card :id="3" :image="recommendCard[2]"></product-card>
          </div>
          <div class="w-1/4 px-2 mb-4 ">
            <product-card :id="4" :image="recommendCard[3]"></product-card>
          </div>
          <div class="w-1/4 px-2 mb-4 ">
            <product-card :id="5" :image="recommendCard[4]"></product-card>
          </div>
          <div class="w-1/4 px-2 mb-4 ">
            <product-card :id="6" :image="recommendCard[5]"></product-card>
          </div>
          <div class="w-1/4 px-2 mb-4 ">
            <product-card :id="7" :image="recommendCard[6]"></product-card>
          </div>
          <div class="w-1/4 px-2 mb-4 ">
            <product-card :id="8" :image="recommendCard[7]"></product-card>
          </div>
        </div>
        <h2 class="text-center bg-white drop-shadow-md h-[70px] leading-[70px] text-2xl text-title-pink">
          My Blog
        </h2>
        <div class="flex bg-white drop-shadow-xl">
          <div class="w-1/3">
            <div class="drop-shadow-xl">
              <img src="https://www.queenshop.com.tw/assets/images/blog/24083001/s5.jpg" class="w-[500px] h-[300px] object-cover drop-shadow-lg" alt="">
              <!-- <h3 class="font-bold pt-2 mx-2 text-lg">我得心情</h3> -->
              <i class="fa-solid fa-calendar-days mt-4 mx-4"></i> 
              <span id="date" class="font-bold">2024 / Aug / 22 </span>
              <p class="italic mx-4">初秋日系多層次穿搭示範 ...</p>
              <button type="button" class="bg-[#eee1e1] rounded-xl px-2 py-1 text-sm ml-96 mb-4" @click="changePage('/blog')">read more</button>
            </div>
            
          </div>
          <div class="w-1/3">
            <div class="drop-shadow-xl">
              <img src="https://www.queenshop.com.tw/assets/images/blog/24080901/a.jpg" class="w-[500px] h-[300px] object-cover drop-shadow-lg" alt="">
              <!-- <h3 class="font-bold pt-2 mx-2 text-lg">我得心情</h3> -->
              <i class="fa-solid fa-calendar-days mt-4 mx-4"></i> 
              <span id="date" class="font-bold">2024 / Sep / 15 </span>
              <p class="italic mx-4"> 7種牛仔短褲穿搭攻略...</p>
              <button type="button" class="bg-[#eee1e1] rounded-xl px-2 py-1 text-sm ml-96 mb-4" @click="changePage('/blog-1')"  >read more</button>
            </div>
          </div>
          <div class="w-1/3">
            <div class="drop-shadow-xl">
              <img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s6.jpg" class="w-[500px] h-[300px] object-cover drop-shadow-lg" alt="">
              <!-- <h3 class="font-bold pt-2 mx-2 text-lg">我得心情</h3> -->
              <i class="fa-solid fa-calendar-days mt-4 mx-4"></i> 
              <span id="date" class="font-bold">2024 / Nov / 8 </span> 
              <p class="italic mx-4">【日本佐賀 ‧ 旅拍】佐賀打卡必去咖啡廳...</p>
              <button type="button" class="bg-[#eee1e1] rounded-xl px-2 py-1 text-sm ml-96 mb-4"  @click="changePage('/blog-2')">read more</button>
            </div>
          </div>
        </div>
        <figure class="flex justify-center my-8">
          <img class="w-1/5 justify-items-center"
            src="https://pics.meierq.com/meierq/ProductBasics/6a5ff197-5e40-429e-9145-d657521df2b3.jpg" alt="">
          <img class="w-1/5 justify-items-center"
            src="https://pics.meierq.com/meierq/ProductBasics/3af4d929-0ac8-4913-9e8e-be672e35f1ed.jpg" alt="">
          <img class="w-1/5 justify-items-center"
            src="https://pics.meierq.com/meierq/ProductBasics/970f0c00-a3f7-4e00-bd72-e9895d9d6937.jpg" alt="">
          <img class="w-1/5 justify-items-center"
            src="https://pics.meierq.com/meierq/ProductBasics/3e475708-cc17-41f9-917d-375f0e3d2976.jpg" alt="">
        </figure>
      </div>
    </section>
    <div class="">
      <img button @click="changePage('/advertise')"
        class="fixed bottom-5 right-5 w-[250px] mr-8 shadow-2xl cursor-pointer" src="@/assets/images/右下廣告.jpg" alt="">
    </div>
    <!-- <div><i class="fa-solid fa-x mark justify-items-end"></i></div> -->
    <div @click="scrollUp" class="fixed bottom-[30px] text-3xl right-[15px] drop-shadow-lg ">
      <i class="fa-solid fa-circle-chevron-up cursor-pointer " style="color: #ffffff"></i>
      <a line="" idx="" href="https://line.me/ti/p/~@hsia.vv">
        <img src="@/assets/images/line.png" class="fixed drop-shadow-md bottom-12 " alt=""></a>
    </div>
  </main>



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
  height: 500px;
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



