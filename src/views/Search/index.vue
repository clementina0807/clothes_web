<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import SaleCard from '@/components/SaleCard.vue'
import { productApi } from '@/api/product'
import { useRouter, useRoute } from 'vue-router';
import { useProductStore } from '@/store/module/product'      

</script>

<template>
      
      <div class="flex-1 flex flex-wrap justify-start mt-5 mb-5 -mx-2">
        <template v-if="filteredProducts.length">
          <div v-for="item in filteredProducts" :key="item.id"
            class="w-1/5 mb-10 mt-2 px-2">
            <sale-card
              @card-click="changePage(`/product/${item.id}?category=saleProducts`)"
              :cover="item.cover"
              :image="item.images[0]"
              :name="item.name"
              :price="item.price"
              :label="category === 'global' ? 'New' : 'Sale'"
            />
          </div>
        </template>
        <template v-else>
          <div class="h-60">
          <div class="bg-pink-300 text-white font-bold px-2 py-1 rounded flex justify-center items-center h-8 ">
            沒有這個商品囉！
          </div>
          </div>
        </template>
      </div>