<script setup>
import { defineProps } from 'vue'
defineProps({ 
image:{
type:String
}
})

</script>
<template>
 <div class ="relative border、border-solid、border-black  w-full h-[300px]">
    <img :src="image" class="w-full h-full object-cover" alt="">
    <div class="absolute top-0 left-0 w-full h-full hover:bg-[rgba(0,0,0,0.3)] ">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col  
    border-solid items-center w-[160px]"> 
    <button @click="changePage('/cart')" class="border border-solid border-white mb-2 w-14 h-14 rounded hover:bg-[rgba(255,255,255,0.3)]">
    <i class="fa-solid fa-cart-shopping text-white text-lg"></i>
    </button>
    <button @click="changePage('/cart')" class="bg-[rgba(255,255,255,0.8)]  py-2 w-full rounded font-bold">立即選購</button>
    </div>
    </div>
    </div>
</template>
