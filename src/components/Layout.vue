<script setup>
import{ reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
router.push('');

const open = ref(false)
const loginForm = reactive({
  username: '',
  password: ''
})

const showModal = (bool) => {
  open.value = bool
} 

const login = async() => {
  const { data } = await axios.post('https://dummyjson.com/auth/login', {
    username: loginForm.username,
    password: loginForm.password,
  })
  const { token } = data
  localStorage.setItem('TOKEN', token)
  open.value = false
}

const menuList = ref([
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: '商品查詢',
    action: () => changePage('/search')
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: '購物車',
    action: () => changePage('/cart')
  },
  {
    icon: 'fa-solid fa-receipt',
    title: '訂單查詢'
  },
  {
    icon: 'fa-regular fa-pen-to-square',
    title: '部落格'
  },
  {
    icon: 'fa-regular fa-user',
    title: '會員中心',
    action: () => showModal(true)
  },
  {
    icon: 'fa-solid fa-globe',
    title: '翻譯',
    // action: 
  },
  {
    icon: 'fa-regular fa-moon',
    title: '主題'
  }
])
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-headerColor bg-opacity-pink-300">
      <ul class="flex justify-end px-3 py-3 ">
        <li v-for="item in menuList" :key="item.icon"
          class="flex flex-col items-center mr-5 last:mr-0 cursor-pointer group" @click="item.action">
          <i :class="item.icon" class="mb-1"></i>
          <span class="text-xs invisible group-hover:visible">{{ item.title }}</span>
        </li>
        {{ loginForm.username }}
        {{ loginForm.password }}
      </ul>
      <a href="http://localhost:5173/">
        <img class="w-[200px] block mx-auto cursor-pointer " src="@/assets/images/b.gif" alt="" /></a>

    </header>
    <ul class="flex justify-center sticky top-0 bg-white drop-shadow-lg">
      <li class="mr-9 nav-list ">
        <a href= "http://localhost:5173/sale" button @click="changePage('/sale')" class="nav-link relative text-xl py-5 inline-block">SUMMER SALE</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="http://localhost:5173/bestseller" button @click="changePage('/Bestseller')" class="nav-link relative text-xl py-5 inline-block">Bestseller</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="http://localhost:5173/products" button @click="changePage('/Products')" class="nav-link relative text-xl py-5 inline-block">Product</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="http://localhost:5173/new" button @click="changePage('/New')" class="nav-link relative text-xl py-5 inline-block">New Arrival</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="http://localhost:5173/blog" button @click="changePage('/Blog')" class="nav-link relative text-xl py-5 inline-block">Travel photography </a>
      </li>
      <li class="nav-list">
        <a href="#" class="nav-link relative text-xl py-5 inline-block">Contact Us</a>
      </li>
    </ul>
    <slot/>

    <footer>
      <div class=" flex bg-Bottom-pink w-full  h-5/5  text-white">
      <div class="ml-40 mt-8">
      <div class="tracking-wide font-bold mb-3">ABOUT</div><ul>
      <li><a href="" class="">品牌介紹</a></li>
      <li><a href="" class="">門市資訊</a></li>
      <li><a href="">品牌合作</a></li>
      <li><a href="/news">News</a></li></ul></div>
      <div class="ml-40 mt-8 ">
      <div class="  tracking-wide font-bold mb-3 ">HELP</div><ul>
      <li><a href="">會員及購物問題</a></li>
      <li><a href="">Privacy Policy</a></li>
    </ul> </div>
    <div class="ml-40 mt-8">
    <div class=" tracking-wide font-bold mb-3 ">SOCIAL</div><ul>
    <li><a href="https://www.instagram.com/meierq" target="_blank">Instagram</a></li>
    <li><a href="https://www.facebook.com/meier.q" target="_blank">Facebook</a></li>
    <li><a href="https://line.me/R/ti/p/@exv5945d" target="_blank">Line</a></li>
    </ul>
    </div>

    <div class="mx-40">
    <div class="mt-8 mb-2 tracking-wide font-bold">NEWS LETTER</div>
    <div class="news-letter">
    <form id="form-newsletter-signup" novalidate="novalidate">
    <input type="email" class="text-slate-950 mt-2" name="email" placeholder="EMAIL" required=""/>
    <button class="subscribe-mail-btn mx-4 flex-col " type="submit">SUBSCRIBE</button>
    </form>
    </div> 
  
    <div class="tracking-wide font-bold mt-4 ">CUSTOMER SERVICE</div>
    <p class="">service_tw@meierq.com</p>
    <p class="mb-2"> Mon.~ Fri. 09:00-12:00 / 13:00-18:00</p>
   
    <div class="tracking-wide self-start">© 薩摩亞商皇后國際有限公司台灣分公司｜統一編號 53678183</div>
    </div>
    </div>
    </footer>
    </div>

  <div>
    {{ loginForm.username }}
    {{ loginForm.password }}
    <a-modal v-model:open="open" title= "會員登入" @ok="login" class="text-center" ok-text= "登入"  >
      <p class="text-base font-medium leading-[0px] pb-8 ">SIGN IN</p>
      <div class="flex">
      <label for="username" class="mr-2 w-[100px] text-right">電子郵件</label>
      <input v-model="loginForm.username" placeholder=" E-mail" class=" rounded-lg mb-10 mx-10" /></div>
      <div class="flex">
      <label for="username"  class="mr-2 w-[100px] text-right">密碼</label>
      <input v-model="loginForm.password" placeholder=" Password" type="password" class=" rounded-lg mb-7 mx-10"/></div>
    </a-modal>
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

footer {
  color: #fff;
  height:200px;
}

.info-list__item{
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  }

</style>
