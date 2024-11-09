<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import SaleCard from '@/components/SaleCard.vue'
import { productApi } from '@/api/product'
import { useRouter, useRoute } from 'vue-router';
import { useProductStore } from '@/store/module/product'


// 跳頁
const router = useRouter()
const route = useRoute()
const category = ref(route.query.category)
const changePage = (url) => {
  router.push(url)
}

// 去store拿products
const productStore = useProductStore()
const products = computed(() => productStore.saleProducts.filter(item => item.category === category.value))
const filteredProducts = ref(productStore.saleProducts.filter(item => item.category === category.value))

const discountTypes = {
  88: 0.88,
  79: 0.79,
  5: 0.5
}

// 分類
const getCategory = (discount) => {
  if (discount === 'all') {
    filteredProducts.value = products.value
    return
  }
  const newProducts = products.value.filter(item => item.discount === discountTypes[discount])
  filteredProducts.value = newProducts
}

// 排序
const sortProducts = (event) => {
  const sortType = event.target.value
  const newProducts = [...products.value]
  switch(sortType) {
    case 'priceAsc':
      // asc 升序 => arr.sort((a, b) => a - b);
      filteredProducts.value = newProducts.sort((a, b) => a.price - b.price)
      break
    case 'priceDesc':
      // desc 降序 => arr.sort((a, b) => b - a);
      filteredProducts.value = newProducts.sort((a, b) => b.price - a.price)
      break
    case 'new':
      filteredProducts.value = newProducts.sort((a, b) => b.createdAt - a.createdAt)
      break
    default:
  }
}
watch(route, (newVal) => {
  // 1. 分類值改成當頁分類值
  category.value = newVal.query.category
  // 2. filteredProducts值改成當頁分類值
  filteredProducts.value = productStore.saleProducts.filter(item => item.category === category.value)
})
</script>

<template>
  <div class=" flex justify-end pt-4 mr-8 ">
    <select @change="sortProducts">
      <option>排序</option>
      <option value="priceAsc">$由低到高</option>
      <option value="priceDesc">$由高到低</option>
      <option value="new">最新上架</option>
    </select>
  </div>
  <section id="product">
    <div class="flex">
      <div class="font-bold bg-background mr-10 ml-12 mt-12 underline decoration-dotted leading-loose ">
        <ul>
          <li class="cursor-pointer" @click="getCategory('all')">全部商品</li>
          <li class="cursor-pointer" @click="getCategory(88)">人氣熱銷88折</li>
          <li class="cursor-pointer" @click="getCategory(79)">春夏精選79折</li>
          <li class="cursor-pointer" @click="getCategory(5)">全區三件5折</li>
        </ul>
      </div>

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
    </div>
  </section>
</template>


<style scoped>
.item__images .hover {
    visibility: hidden;
    opacity: 0;
    transition: opacity .5s;
}

.nav-list:hover .nav-link::before {
  width: 100%;
}

.nav-link::before {
  content: "";
  display: block;
  background-color: #f4a7b9;
  width: 0%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all.3s;
  margin-bottom: 10px;

}


</style>
