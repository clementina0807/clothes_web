<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import Checkbox from '@/components/Checkbox.vue'
const props = defineProps({
  image: {
    type: String
  },
  name: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  size: {
    type: String
  },
  checked: {
    type: Boolean,
    default: false
  },
})


const emit = defineEmits('removeCart', 'checkedChange')
const handleRemove = () => {
  emit('removeCart')
}

const quantity = ref(props.quantity)
const checked = ref(props.checked)

const checkedChange = (newVal) => {
  checked.value = newVal
  emit('checkedChange', newVal)
}
watch(checked, (newVal) => {
  checked.value = newVal
  emit('checkedChange', newVal)
})
watch(() => props.checked, (newVal) => {
  checked.value = newVal
  emit('checkedChange', newVal)
})
</script>
<template>
  <div class="flex h-[200px]">
    <checkbox class="mr-2" :checked="checked" @checked-change="checkedChange" />
    <img :src="image" class="w-40 mr-5 h-full object-contain">
    <div class="flex-1 flex flex-col">
      <div class="flex items-center justify-between">
        <h1 class="font-bold">{{ name }}</h1>
        <i @click="handleFavorite(routeId)" class="fa-regular fa-heart text-2xl hover:text-themeRed"
          :class="[`${isFavorite ? 'fa-solid' : 'fa-regular'}`]">
        </i>
      </div>
      <div class="flex flex-1 justify-between items-end">
        <div>
          <a-select v-model:value="quantity" :dropdown-match-select-width="false" placement="topLeft"
            class="w-full mb-2">
            <a-select-option v-for="item in 10" :key="item" value="topLeft">{{ item }}</a-select-option>
          </a-select>
          <p class="sell-price font-bold">
            單價 NT. {{ price }}
            <span class="ml-1">尺寸 {{ size }}</span>
          </p>
        </div>
        <button @click="handleRemove"
          class="px-1  text-base border border-solid border-gray-300 rounded-md cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
          <i class="fa-solid fa-trash-can"></i>
          刪除
        </button>
      </div>
    </div>
  </div>
</template>