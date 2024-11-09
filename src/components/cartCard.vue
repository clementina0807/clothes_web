<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
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

const emit = defineEmits(['removeCart', 'checkedChange', 'selectChange'])

const quantity = ref(props.quantity)
const checked = ref(props.checked)

const removeCart = () => {
  emit('removeCart')
}
const checkedChange = () => {
  emit('checkedChange', checked.value)
}
const selectChange = () => {
  emit('selectChange', quantity.value)
}
watch(() => props.checked, (newVal) => {
  checked.value = newVal
})
</script>
<template>
  <div class="flex h-[200px]">
    <div class="flex items-center">
      <label class="mr-2 relative block w-4 h-4 rounded cursor-pointer border-2 border-solid border-black">
        <input v-model="checked" type="checkbox" class="invisible absolute" @change="checkedChange">
        <i :class="{ hidden: !checked }"
          class="fa-solid fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
      </label>
    </div>
    <img :src="image" class="w-40 mr-5 h-full object-contain">
    <div class="flex-1 flex flex-col">
      <div class="flex items-center justify-between">
        <h1 class="font-bold">{{ name }}</h1>
      </div>
      <div class="flex flex-1 justify-between items-end">
        <div>
          <a-select v-model:value="quantity" :dropdown-match-select-width="false" placement="topLeft" class="w-full mb-2" @change="selectChange">
            <a-select-option v-for="item in 10" :key="item" :value="item">{{ item }}</a-select-option>
          </a-select>
          <p class="sell-price font-bold">
            單價 NT. {{ price }}
            <span class="ml-1">尺寸 {{ size }}</span>
          </p>
        </div>
        <button @click="removeCart"
          class="px-1  text-base border border-solid border-gray-300 rounded-md cursor-pointer hover:bg-[#cd333339] hover:text-[#cd3333]">
          <i class="fa-solid fa-trash-can"></i>
          刪除
        </button>
      </div>
    </div>
  </div>
</template>