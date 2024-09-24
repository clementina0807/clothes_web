<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
defineProps({
    image: {
        type: String
    },
    id: {
        type: String
    }
})
const router = useRouter()

</script>
<template>
    <div class="relative border、border-solid、border-black  w-full h-[300px] cursor-pointer">
        <img :src="image" class="w-full h-full object-cover" alt="">
        <div class="absolute top-0 left-0 w-full h-full hover:bg-[rgba(0,0,0,0.3)]"
            @click="router.push(`/product/${id}`)">
        </div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col 
border-solid items-center w-[160px] z-10">
            <button @click="router.push('/cart')"
                class="border border-solid border-white mb-2 w-14 h-14 rounded hover:bg-[rgba(255,255,255,0.3)]">
                <i class="fa-solid fa-cart-shopping text-white text-lg"></i>
            </button>
            <button @click="router.push('/cart')"
                class="bg-[rgba(255,255,255,0.8)]  py-2 w-full rounded font-bold">立即選購</button>
        </div>
    </div>
</template>
