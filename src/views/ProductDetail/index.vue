<script setup>
import { useRouter, useRoute } from 'vue-router';
const baseUrl =
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
const getImgUrl = i => {
  return `${baseUrl}abstract0${i + 1}.jpg`;
};

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
import { ref } from 'vue';
const open = ref(false);
const showModal = () => {
  open.value = true;
};
const handleOk = e => {
  console.log(e);
  open.value = false;
};

</script>

<template>
  <div class="flex">
    <div class="position-relative w-2/4 mb-40 mt-20 ">
      <a-carousel arrows dots-class="slick-dots slick-thumb">
        <template #customPaging="props">
          <a>
            <img :src="getImgUrl(props.i)" />
          </a>
        </template>
        <div v-for="item in 4" :key="item">
          <img :src="getImgUrl(item - 1)" />
        </div>
      </a-carousel>

    </div>
    <div class=" leading-loose">
      <ul class="text-xl font-bold  mt-20 flex  "> 簡約彈性透肌背心
      <span class="text-2xl hover:text-themeRed cursor-pointer  ml-44 ">
      <i class="fa-regular fa-heart "></i></span></ul>
      <div class= "text-xl mt-10 mx-80 font-bold">
      <ul><li>NT.575</li></ul></div>
      <div class= "text-xl  font-bold">
      <ul class="flex cursor-pointer  -mt-6 mb-10 ">
        <li class="selected"></li>
          <li class=" size text-lg mr-6">S</li>
          <li class=" size text-lg mr-6 ">M</li>
          <li class=" size text-lg mr-1 ">L</li></ul>

          <div class=" flex ">
            <input type='button' value='-' class='Subtraction cursor-pointer  ' field='' />
            <input type='text' name='quantity' value='1' class='qty' />
            <input type='button' value='+' class='Increase cursor-pointer ' field='' /></div>
        </div></div></div> 

          <div class="flex justify-center -mt-60 mb-40 ">
          <button class="choosebuy mr-4  w-36 h-12" @click="changePage('/cart')">
          <span>立即結帳</span></button>
          <button class="addcart w-36  h-12 text-white">
          <a-button type="black text-white " @click="showModal">加入購物車</a-button>
          <a-modal v-model:open="open" class="" @ok="handleOk">
            <p class="mx-40 ">已加入購物車</p>
          </a-modal></button></div>
        </template>


<style scoped>

.added-text {
    display: none;
}

.choosebuy {
  border: 1px solid #323232;
}

.addcart {
  border: 1px solid #323232;
  background-color: #323232;
  
}


.hover\:text-themeRed:hover {
    --tw-text-opacity: 1;
    color: rgb(205 51 51 / var(--tw-text-opacity));
}

.size:before{
    height: 35px;
    min-width: 40px;
    line-height: 35px;
    display: block;
    text-align: center;
  }

.size:hover {
    border: 1px solid #323232;
    height: 35px;
    min-width: 40px;
    line-height: 35px;
    display: block;
    text-align: center;
}

.product-buttons>div {
    width: 49%;
    font-size: 14px;
}

.qty {
  width: 400px;
  height: 40px;
  text-align: center;
  border: 0;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
}


input.Increase {
  width: 25px;
  height: 40px;
  border: 1px solid #aaa;
  background: #f8f8f8;
}

input.Subtraction {
  width: 25px;
  height: 40px;
  border: 1px solid #aaa;
  background: #f8f8f8;
}
</style>