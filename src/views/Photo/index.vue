<script setup>
import { ref, onMounted } from 'vue'
import SaleCard from '@/components/SaleCard.vue'
import { productApi } from '@/api/product'
import { useRouter } from 'vue-router';
const router = useRouter()


const changePage = (url) => {
  router.push(url)
}

const products = ref([])
const filteredProducts = ref([])

const getProducts = async() => {
  const { data } = await productApi.getProducts()
  products.value = data
  console.log(data)
  filteredProducts.value = data
}
const getCategory = (category) => {
  if (category === 'all') {
    filteredProducts.value = products.value
    return
  }
  const newProducts = products.value.filter(item => item.category === category)
  filteredProducts.value = newProducts
}

const sortProducts = (event) => {
  const sortType = event.target.value
  switch(sortType) {
    case 'priceAsc':
      // asc 升序 => arr.sort((a, b) => a - b);
      filteredProducts.value = products.value.sort((a, b) => a.price - b.price)
      break
    case 'priceDesc':
      // desc 降序 => arr.sort((a, b) => b - a);
      filteredProducts.value = products.value.sort((a, b) => b.price - a.price)
      break
    case 'new':
      filteredProducts.value = products.value.sort((a, b) => b.createdAt - a.createdAt)
      console.log(filteredProducts.value);
      break
    default:
  }
}

onMounted(() => getProducts())
</script>

<template>
  <section id="product">
    <div class="flex">
      <div class=" bg-background mr-12 ml-20 mt-12 leading-loose ">
        <ul><a href="" class="font-bold underline underline-offset-2 "> 上著</a>
          <div class="text-sm items-center ">
          <li><a href="">背心</a></li>
          <li><a href="">外套</a></li>
          <li><a href="">襯衫</a></li></div>
          <a href="" class="font-bold underline underline-offset-2 ">下著</a>
          <div class="text-sm items-center ">
          <li><a href="">短裙</a></li>
          <li><a href="">蛋糕裙</a></li></div>
          <a href="" class="font-bold underline underline-offset-2 ">連身款</a>
          <li><a href=""></a></li>
        </ul>
      </div>
<nav class="flex-1 flex flex-wrap justify-end mt-5 mb-5 -mx-2">
  <div>
    <img class="justify-items-center  w-3/4" src="https://photo.queenshop.com.tw/qs/333/240302-PO.jpg" alt="">
  </div>
  </nav></div>
</section>
<nav class="flex-1 flex flex-wrap justify-end mt-5 mb-5 -mx-2">
        <div v-for="item in filteredProducts" :key="item.id"
          class="border border-solid border-purple-500 w-[250px] mb-10 mt-2 px-2">
          <sale-card @card-click="changePage(`/product/${item.id}`)" :cover="item.cover" :image="item.image"
            :name="item.name" :price="item.price" />
        </div>
      </nav>
</template>

<style scoped></style>