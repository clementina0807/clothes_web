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
  console.log(data);
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
      <div class="font-bold bg-background mr-10 ml-12 mt-12 underline underline-offset-2 leading-loose ">
        <ul>
          <li class="cursor-pointer" @click="getCategory('all')">全部商品</li>
          <li class="cursor-pointer" @click="getCategory('hot')">人氣熱銷88折</li>
          <li class="cursor-pointer" @click="getCategory('featured')">春夏精選79折</li>
          <li class="cursor-pointer" @click="getCategory('global')">全區三件5折</li>
        </ul>
      </div>

      <nav class="flex-1 flex flex-wrap justify-end mt-5 mb-5 -mx-2">
        <div v-for="item in filteredProducts" :key="item.id"
          class="border border-solid border-purple-500 w-[250px] mb-10 mt-2 px-2">
          <sale-card @card-click="changePage(`/product/${item.id}`)" :cover="item.cover" :image= "item.image"
            :name="item.name" :price="item.price" />
        </div>
      </nav>
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
