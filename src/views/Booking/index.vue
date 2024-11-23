<script setup>
import { useRouter, useRoute } from 'vue-router';
import { computed, reactive, watch, ref } from 'vue'
import { useProductStore } from '@/store/module/product'

const router = useRouter()
const productStore = useProductStore()

const orderInfo = reactive({
  lastName: '',
  firstName: '',
  phoneNumber: '',
  mail: ''
})

const payMethods = reactive({
  creditCard: 'creditCard',
  linePay: 'linePay',
  convenientStore: 'convenientStore'
})

const payMethod = ref(payMethods.creditCard)

const changePage = (url) => {
  router.push(url)
}

const totalPrice = computed(() => {
  // let price = 0
  // for (const item of cart.value) {
  //   if (item.checked) {
  //     price += item.price * item.quantity
  //   }
  // }
  return productStore.cart.reduce((preVal, item) => preVal + item.price * item.quantity, 0)
})
console.log(totalPrice.value);

const changePayment = (method) => {
  payMethod.value = method
}

const checkout = () => {
  const newOrder = {
    lastName: orderInfo.lastName,
    firstName: orderInfo.firstName,
    phoneNumber: orderInfo.phoneNumber,
    mail: orderInfo.mail,
    products: productStore.cart,
    payMethod: payMethod.value,
    createdAt: Math.floor(Date.now() / 1000)
  }
  productStore.setOrders([
    ...productStore.orders,
    newOrder
  ])
  changePage('/complete-order')
}

watch(() => orderInfo, (newVal) =>{
  console.log(payMethod.value);
  console.log(newVal);
}, { deep: true })
</script>

<template>
  <div class="bg-[#F8C3CD] min-h-[calc(100vh-392px)] pt-5">

    <div class="flex justify-center">
      <i class="fa-solid fa-cart-shopping "></i>
      <ul class="ml-4">購物清單</ul>
      <div class="hori-line mt-4 ml-4 "></div>
      <i class="fa-regular fa-pen-to-square mt-1 ml-4">
        <dt class=" rounded-full bg-slate-100 size-8 -my-6 -mx-2 "></dt>
      </i>
      <ul class="ml-4">填寫資料</ul>
      <div class="hori-line mt-4 ml-4 "></div>
      <i class="fa-regular fa-face-smile mt-1 ml-4"></i>
      <ul class="ml-4">完成訂單</ul>
    </div>

    <div class="py-2 px-4 mx-32 flex flex-col items-center justify-center">
      <div class="w-[70%] mt-6 mb-6 p-4 flex flex-col rounded-2xl bg-white ">
        <h3 class="px-2 pb-3 text-xl font-bold">訂單資料 </h3>
        <div class="m-3 flex justify-between text-lg">
          <span class="font-medium">總金額</span>
          <span class="font-bold text-themeRed text-[22px] text-rose-700">NT$ {{ totalPrice }}</span>
        </div>
      </div>

      <div class=" mb-6 p-4 rounded-2xl bg-white w-[70%] ">
        <h3 class="px-2 pb-3 text-xl font-bold">訂購人資料</h3>
        <hr>
        <div class="flex flex-col m-4 text-base">
          <label for="lastName" class="my-2 font-bold">姓氏</label>
          <div class="mb-3 flex flex-col"><input v-model="orderInfo.lastName" id="lastName" type="text"
              class="bg-orange-100  rounded-lg p-2 " value=""></div>
          <label for="firstName" class="my-2 font-bold">名字</label>
          <div class="mb-3 flex flex-col">
            <input v-model="orderInfo.firstName" id="firstName" type="text"
              class="bg-gray-200 rounded-lg p-2 mb-3 bg-orange-100" value="">
          </div>
          <label for="phone" class="my-2 font-bold">手機號碼</label>
          <div class="mb-3 flex flex-col">
            <input v-model="orderInfo.phoneNumber" id="phone" type="text"
              class="bg-gray-200 rounded-lg p-2 mb-3 bg-orange-100" value="">
          </div>
          <label for="email" class="my-2 font-bold">電子信箱</label>
          <div class="mb-3 flex flex-col">
            <input v-model="orderInfo.mail" id="email" type="email"
              class="bg-gray-200 rounded-lg p-2 mb-3 bg-orange-100" value="">
          </div>
        </div>
      </div>

      <div class="mb-6 p-4 flex flex-col rounded-2xl bg-white w-[70%]">
        <h3 class="px-2 pb-3 text-xl font-bold text-themeG">付款方式</h3>
        <div class="flex flex-col my-5 mx-2 text-lg">
          <div class="flex items-center">
            <label class="mr-1 relative block w-5 h-5 cursor-pointer border-2 border-solid border-black rounded-full">
              <input :checked="payMethod === payMethods.creditCard" type="checkbox" class="invisible absolute"
                @change="changePayment(payMethods.creditCard)">
              <div :class="{ hidden: payMethod !== payMethods.creditCard }"
                class="circle w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              </div>
            </label>
            <div class="my-4">
              <span class="px-2">信用卡/簽帳金融卡</span>
            </div>
          </div>
          <div class="flex items-center">
            <label class="mr-1 relative block w-5 h-5 cursor-pointer border-2 border-solid border-black rounded-full">
              <input :checked="payMethods.linePay" type="checkbox" class="invisible absolute"
                @change="changePayment(payMethods.linePay)">
              <div :class="{ hidden: payMethod !== payMethods.linePay }"
                class="circle w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              </div>
            </label>
            <div class="">
              <span class="px-2">LINE Pay</span>
            </div>
          </div>
          <div class="flex items-center">
            <label class="mr-1 relative block w-5 h-5 cursor-pointer border-2 border-solid border-black rounded-full">
              <input :checked="payMethods.convenientStore" type="checkbox" class="invisible absolute"
                @change="changePayment(payMethods.convenientStore)">
              <div :class="{ hidden: payMethod !== payMethods.convenientStore }"
                class="circle w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              </div>
            </label>
            <div class="my-4">
              <span class="px-2">超商繳費</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <button type="button" class="py-2 px-3 mx-6 text-xl font-bold rounded-xl cursor-pointer bg-[#a9a7a7]"
          @click="changePage('/cart')">回上一頁</button>
        <button class="py-2 px-3 text-xl font-bold rounded-xl bg-[#cd3333] text-[#ffffff] cursor-pointer"
          @click="checkout">確認結帳

        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.hori-line {
    width: 20%;
    height: 2px;
    border-top: solid #000000 1px;
}
</style>
