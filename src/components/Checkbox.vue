<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  },
})
const emit = defineEmits('checkedChange')
const checked = ref(props.checked)

const handleChange = (e) => {
  const checked = e.target.checked
  emit('checkedChange', checked)
}

watch(() => props.checked, (newVal) => {
  checked.value = newVal
})
</script>
<template>
  <div class="flex items-center">
    <label class="relative block w-4 h-4 rounded cursor-pointer border-2 border-solid border-black">
      <input v-model="checked" type="checkbox" class="invisible absolute" @change="handleChange">
      <i :class="{ hidden: !checked }"
        class="fa-solid fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
    </label>
    <div v-if="$slots.title" class="ml-2">
      <slot name="title" />
    </div>
  </div>
</template>