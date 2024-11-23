<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true
  }
})
const isShow = ref(props.isShow)
const closeAd = () => {
  isShow.value = false
  localStorage.setItem('hasSeenAd', true)
}

onMounted(() => {
  if (JSON.parse(localStorage.getItem('hasSeenAd'))) {
    closeAd()
  }
})
</script>
<template>
  <div v-if="isShow" class="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] z-[100]">
    <div class="w-[300px] h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="text-right flex justify-end w-full">
        <button class="text-white flex items-center cursor-pointer" @click="closeAd">
          <i class="fa-solid fa-xmark text-2xl mr-2 drop-shadow-xl"></i>
          <span class="drop-shadow-md">CLOSE</span>
        </button>
      </div>
      <div class="bg-white">
        <img src="http://photo.queenshop.com.tw/www/index/assets/images/pop/241108n.gif" alt="">
      </div>
    </div>
  </div>
</template>