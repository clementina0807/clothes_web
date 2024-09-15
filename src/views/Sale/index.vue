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

const getProducts = async() => {
  const { data } = await productApi.getProducts()
  products.value = data
}

onMounted(() => getProducts())
</script>

<template>
  <div class=" flex justify-end pt-4 mr-8 ">
    <select>
      <option>排序</option>
      <option>$由低到高</option>
      <option>$由高到低</option>
      <option>最新上架</option>
      <option>最高人氣</option>
    </select>
  </div>
  <section id="product">
    <div class="flex">
      <div class="font-bold bg-background mr-10 ml-12 mt-12 underline underline-offset-2 leading-loose ">
        <ul><a href=""> 人氣熱銷88折</a>
          <li><a href=""></a></li>
          <a href="">春夏精選79折</a>
          <li><a href=""></a></li>
          <a href="">全區三件5折</a>
          <li><a href=""></a></li>
        </ul>
      </div>

      <nav class="flex-1 flex flex-wrap justify-end mt-5 mb-5 -mx-2">
        <div v-for="item in products" :key="item.id"
          class="border border-solid border-purple-500 w-[250px] mb-10 mt-2 px-2">
          <sale-card @card-click="changePage(`/product/${item.id}`)" :cover="item.cover" :image="item.image"
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
