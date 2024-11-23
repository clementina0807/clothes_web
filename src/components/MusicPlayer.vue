<template>
  <div
    class="border border-solid border-black w-[200px] text-center rounded-[24px] py-1 font-bold bg-slate-100 bg-opacity-50">
    <h3>{{ currentSong.name }}</h3>
    <audio ref="audioRef" :src="currentSong.src"></audio>
    <button @click="prevSong" class="bg-[#cbcbcb] cursor-pointer px-2 rounded mr-2">
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button class="cursor-pointer px-2 rounded mr-2" @click="togglePlay">
      <i v-show="!isPlaying" class="fa-solid fa-play"></i>
      <i v-show="isPlaying" class="fa-solid fa-pause"></i>
    </button>
    <button @click="nextSong" class="bg-[#cbcbcb] cursor-pointer px-2 rounded  ">
      <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const songs = ref([
  { name: 'A Stroll Alone', src: '/music/A_Stroll_Alone.mp3' },
  { name: 'Sugar High', src: '/music/Sugar_High.mp3' },
  { name: 'Under The Sun', src: '/music/Under_The_Sun.mp3' }
])
const isPlaying = ref(false)
const audioRef = ref(null)
const currentIndex = ref(0)
const currentSong = computed(() => songs.value[currentIndex.value])

const togglePlay = () => {
  if (audioRef.value && isPlaying.value) {
    audioRef.value.pause();
  } else {
    audioRef.value.play();
  }
  isPlaying.value = !isPlaying.value
}
const playCurrentSong = async () => {
  await audioRef.value.load();
  audioRef.value.play()
  isPlaying.value = true
}
const nextSong = async () => {
  currentIndex.value = (currentIndex.value + 1) % songs.value.length
  await playCurrentSong();
}
const prevSong = async () => {
  currentIndex.value = (currentIndex.value - 1 + songs.value.length) % songs.value.length;
  await playCurrentSong();
}
</script>