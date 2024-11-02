<script setup>
import { RouterView } from "vue-router";
import Layout from '@/components/Layout.vue'
import { productApi } from '@/api/product'
import { onMounted, ref } from 'vue'
import { useProductStore } from '@/store/module/product' // 1. 引用 store --> useProductStore

// 2. store變數(useProductStore)執行後並儲存為一個變數productStore --> 才可使用定義在store內的變數
const productStore = useProductStore()
const saleProducts = ref(productStore.saleProducts)

const getSaleProducts = async () => {
  const { data } = await productApi.SaleProducts()
  SaleProducts.value = data
  // 3. 使用
  productStore.setSaleProducts(data)
}

onMounted(() => {
  if (!saleProducts.value.length) {
    getSaleProducts()
  }
})
</script>

<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<style scoped></style>
