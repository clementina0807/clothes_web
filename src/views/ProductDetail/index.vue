<script setup>
const baseUrl =
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
const getImgUrl = i => {
  return `${baseUrl}abstract0${i + 1}.jpg`;
};
</script>

<template>
  <div class="flex">
    <div class="position-relative w-2/4 mb-40 mt-10 ml-12">
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
     
      <div class=" leading-loose flex ">
      <ul class="text-xl font-bold  mt-20 "> 簡約彈性透肌背心</ul>
      <span  class="text-2xl hover:text-themeRed cursor-pointer mt-12 ml-44">
        <div><i class="fa-regular fa-heart "></i></div></span>

       <div class= "text-xl my-20 -mx-16 font-bold">
        <ul><li><a href="">NT. 575</a></li></ul>
        </div>
        
        
     <ul class="flex cursor-pointer mt-40 -mx-72 ">
      <li class="selected"></li>
        <li class=" size text-lg mr-6">S</li>
        <li class=" size text-lg mr-6">M</li>
        <li class=" size text-lg mr-1">L</li></ul>
     </div>

     <div class="mt-60 flex ">
        <input type='button' value='-' class='Subtraction  cursor-pointer ' field='' />
        <input type='text' name='quantity' value='1' class='qty' />
        <input type='button' value='+' class='Increase cursor-pointer' field='' /> 
   </div>
   
    <div class="pt-80 -mx-[450px] ">
    <button class="choosebuy mr-8  w-36 h-12">
      <span>立即結帳</span></button>
    <button class="addcart mr-8 w-36  h-12 text-white">
      <span>加入購物車</span></button></div></div> 
    </template>

<style scoped>

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