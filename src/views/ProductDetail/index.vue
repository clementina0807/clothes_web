<script setup>
import { useRouter, useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import { useProductStore } from '@/store/module/product'
import { message } from 'ant-design-vue';


const route = useRoute()
const routeId = computed(() => Number(route.params.id)) // 字串
const category = computed(() => route.query.category)
const productStore = useProductStore()
const product = computed(() => productStore[category.value].find(item => item.id === routeId.value))
const activeImage = ref(product.value.images?.[0])
const changeImage = (image) => {
  activeImage.value = image
}


const baseUrl =
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
const getImgUrl = i => {
  return `${baseUrl}abstract0${i + 1}.jpg`;
};

const open = ref(false);
const showModal = () => {
  open.value = true;
};
const handleOk = e => {
  console.log(e);
  open.value = false;
};

const sizeList = ref([
  {
    label: 'S',
    value: 'S'
  },
  {
    label: 'M',
    value: 'M'
  },
  {
    label: 'L',
    value: 'L'
  }
])

const chosenSize = ref(sizeList.value[0].value)
const setChosenSize = (size) => {
  chosenSize.value = size
}
// 是不是已收藏
const isFavorite = ref(productStore.favoriteProducts.some(item => item.id === routeId.value))
const handleFavorite = (id) => {
  isFavorite.value = !isFavorite.value // 先變相反狀態
  if (isFavorite.value) {
    message.success('已加入收藏')
  } else {
    message.success('移除收藏')
  }
  productStore.setFavoriteProducts(id)
}

// 數量
const quantity = ref(1)
const plus = () => {
  if (quantity.value === 10) {
    message.warning('最多買 10 件唷 :)')
    return
  }
  quantity.value += 1
}
const minus = () => {
  if (quantity.value > 1) {
    quantity.value -= 1
  }
}
// 加入購物車
const addCart = () => {
  productStore.addCart(routeId.value, chosenSize.value, quantity.value)
  message.success('已加入購物車')
  changePage('/sale?category=global')
}
console.log(chosenSize.value);

</script>
<template>
  <div class="flex container mx-auto py-5">
    <div class="w-1/2">
      <div>
        <img class="w-full h-[300px] object-contain mb-3" :src="activeImage" alt="">
        <div class="flex -mx-3">
          <div v-for="(image) in product.images" :key="image" class="w-1/4" @click="changeImage(image)">
            <img class="w-full h-32 object-cover px-3" :src="image" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 leading-loose">
      <div class="flex flex-col h-full justify-center px-5">
        <p class="text-xl font-bold flex mb-8 justify-between">
          <span >檢閱</span>
          <i @click="handleFavorite(routeId)" class="fa-heart text-2xl hover:text-themeRed cursor-pointer ml-44"
            :class="[`${isFavorite ? 'fa-solid' : 'fa-regular'}`]"></i>
        </p>
        <div class="text-xl font-bold flex justify-between mb-5">
          <p>NT.575</p>
          <ul class="flex cursor-pointer">
            <li v-for="size in sizeList" :key="size.value" @click="setChosenSize(size.value)"
              class="border px-2 text-lg mr-6 border-solid"
              :class="[chosenSize == size.value ? 'border-black' : 'border-transparent']">
              {{ size.label }}
            </li>
          </ul>
        </div>
        <div class="flex text-xl font-bold mb-5">
          <input @click="minus" type='button' value='-' class='Subtraction cursor-pointer' field='' />
          <input v-model="quantity" type='text' name='quantity' value='1' class='qty flex-1' />
          <input @click="plus" type='button' value='+' class='Increase cursor-pointer ' field='' />
        </div>
        <div class="flex justify-center">
          <button class="choosebuy mr-4  w-36 h-12" @click="changePage('/cart')">
            <span>立即結帳</span></button>
          <button @click="addCart" class="addcart w-36 h-12 text-white">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
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

/* .size:before{
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
} */

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