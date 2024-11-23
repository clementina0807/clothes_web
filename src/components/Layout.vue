<script setup>
import { reactive, ref, computed, onMounted} from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/store/module/user'
import { userApi } from '@/api/user'
import { Button, message } from 'ant-design-vue';
import { useI18n } from 'vue-i18n'
import { setLanguage } from "@/utils/localStorage";
import AdModal from '@/components/AdModal.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import { productApi } from '@/api/product'
import { useProductStore } from '@/store/module/product'



const name = computed(() => route.query.name)

const userStore = useUserStore()
const myToken = ref(userStore.token)

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
const scrollUp = () =>{
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const searchResults = ref([]);  
const keyword = ref(''); 

const getProducts = async () => {
  const { data } = await productApi.getProducts()
  products.value = data          
}

onMounted(() => getProducts())  

// 翻譯
const { t, locale } = useI18n()
const languageList = {
  zh: 'zh_TW',
  en: 'en_US',
}
const changeLanguage = () => { // 切換語言
  const lang = locale.value === languageList.zh ? languageList.en : languageList.zh
  console.log(lang);
  locale.value = lang
  setLanguage(lang)
}


const open = ref(false)
const loginForm = reactive({
  username: '',
  password: ''
})

const showModal = (bool) => {
  open.value = bool
}


const login = async () => {
  try {
    const { data, code } = await userApi.login(loginForm.username, loginForm.password)
    if (code === 200) {
      const { token } = data
      userStore.setToken(token) // 儲存 Token
      myToken.value = token // 重新渲染畫面
      message.success('登入成功')
    }
  } catch (err) {
    message.error('使用者名稱或密碼錯誤')
    console.log(err);
  } finally {
    showModal(false)
  }
}
// 用來切換主題的變數
const isDarkTheme = ref(false);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};

const isSearch = ref(false)

const toggleIsSearch = () => {
  isSearch.value = !isSearch.value
}


const menuList = computed(() => [
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: t('product_search'),
    action: () => toggleIsSearch()
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: t('shopping_cart'),
    action: () => changePage('/cart')
  },
  // {
  //   icon: 'fa-solid fa-receipt',
  //   title: t('order_search')
  // },
  {
    icon: 'fa-regular fa-pen-to-square',
    title: t('blog'),
    action: () => changePage('/blog-home')
  },
  {
    icon: 'fa-regular fa-user',
    title: myToken.value ? t('member_center') : t('login'),
    action: myToken.value ? () => changePage('/member') : () => showModal(true)
  },
  {
    icon: 'fa-solid fa-globe',
    title: t('translation'),
    action: () => changeLanguage()
  },
  {
    icon: 'fa-regular fa-moon',
    title: t('theme')
  }
])

const showAd = ref(true)
const searchValue = ref('')

const search = () => {     
  const keyword = searchValue.value.trim();
  if (keyword) {
    changePage(`/search?keyword=${searchValue.value}`);
  } else {
    message.warning('請輸入搜尋關鍵字');
  }
}



</script>

<template>

  <div class="flex flex-col min-h-screen">
    <header class="bg-headerColor bg-opacity-pink-300">
      <div class="px-3 py-3 flex items-center justify-between">
        <music-player />
        <ul class="flex">
            <div v-if="isDarkTheme" class="darkMode" >
              <i  class="fa-solid fa-moon" button @click="toggleTheme "></i>
             </div>
            <div v-else class="lightMode">
              <i class="fa-regular fa-moon" button @click="toggleTheme "></i>
             </div>
          <li v-for="item in menuList" :key="item.icon"
            class="flex flex-col items-center mr-5 last:mr-0 cursor-pointer group" @click="item.action">
            <i :class="item.icon" class="mb-1"></i>
            <span class="text-xs invisible group-hover:visible">{{ item.title }}</span>
          </li>
        </ul>
      </div>
      <div v-if="isSearch" class="text-center">
        <input class="border border-solid border-black" type="text" v-model="searchValue" @keydown.enter="search"
          placeholder="  SEARCH 搜尋...">
      </div>

      
      <a href="http://localhost:5173/">
        <img class="w-[200px] block mx-auto cursor-pointer " src="@/assets/images/b.gif" alt="" /></a>

    </header>
    <ul class="flex justify-center sticky top-0 bg-white drop-shadow-lg z-50">
      <li class="mr-9 nav-list">
        <div @click="changePage('/sale?category=featured')"
          class="nav-link relative text-xl py-5 inline-block cursor-pointer font-semibold">{{ t('summer_sale') }}</div>
      </li>
      <li class="mr-9 nav-list">
        <div @click="changePage('/sale?category=hot')"
          class="nav-link relative text-xl py-5 inline-block cursor-pointer font-semibold">{{ t('bestseller') }}</div>
      </li>
      <li class="mr-9 nav-list">
        <div @click="changePage('/sale?category=global')"
          class="nav-link relative text-xl py-5 inline-block cursor-pointer font-semibold text-rose-800">{{
          t('in_stock') }}</div>
      </li>
    </ul>
    <div class="flex-1 h-full">
      <slot />
    </div>
    <footer class="py-[20px] bg-Bottom-pink text-white">
      <p class="text-center">© 薩摩亞商皇后國際有限公司台灣分公司｜統一編號 53678183</p>
    </footer>
    <ad-modal :is-show="showAd" />
   </div> 
 

  <div>
    <a-modal v-model:open="open" title="會員登入" @ok="login" class="text-center" ok-text="登入">
      <p class="text-base font-medium leading-[0px] pb-8 ">SIGN IN</p>
      <div class="flex">
        <label for="username" class="mr-2 w-[100px] text-right">使用者名稱</label>
        <input v-model="loginForm.username" placeholder=" Username" class=" rounded-lg mb-10 mx-10" />
      </div>
      <div class="flex">
        <label for="username" class="mr-2 w-[100px] text-right">密碼</label>
        <input v-model="loginForm.password" placeholder=" Password" type="password" class=" rounded-lg mb-7 mx-10" />
      </div>
    </a-modal>
    <div @click="scrollUp" class="fixed bottom-[30px] text-3xl right-[15px] drop-shadow-lg ">
      <i class="fa-solid fa-circle-chevron-up cursor-pointer " style="color: #ffffff"></i>
      <a line="" idx="" href="https://line.me/ti/p/~@hsia.vv">
        <img src="@/assets/images/line.png" class="fixed drop-shadow-md bottom-12 " alt=""></a>
    </div>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
}
.menu-list {
  display: flex;
  justify-content: flex-end;
  padding: 12px 20px;
}

.menu-list__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}
.menu-list__item:last-child {
  margin-right: 0;
}
.menu-list__title {
  font-size: 12px;
  visibility: hidden;
}
.menu-list__item:hover .menu-list__title {
  visibility: visible;
}
.menu-list__item i {
  font-size: 24px;
  margin-bottom: 8px;
}

.icon{ /* 共用class */
  width: 5%;
}


.bar{
  width:100%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

main {
  flex: 1;
}

.main {
  background-color: rgb(210, 0, 0);
  z-index: 1;
  text-align: center;
}

.list-item:hover span {
  visibility: visible;
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

.info-list__item{
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  }

  .darkMode{
  background-color: #121212;
  color: white;
  }

.lightMode {
  background-color: white;
  color: black;
}

</style>
