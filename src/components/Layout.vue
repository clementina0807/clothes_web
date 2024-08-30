<script setup>
import{ reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
router.push('');


// 登入 => 有token 就是登入狀態
// 前端:帳號密碼 => 後端 => 回傳token給前端 => token存在前端內
// api => 網址[協議+域名+路徑]+方法+請求體(可能)
// axios.方法('網址', 請求體)

const open = ref(true)
const loginForm = reactive({
  username: '',
  password: ''
})

const login = async() => {
  // HTTP請求
  const { data } = await axios.post('https://dummyjson.com/auth/login', {
    username: 'emilys',
    password: 'emilyspass',
  })
  const { token } = data
  localStorage.setItem('TOKEN', token)
}
// login()

const submit = () => {
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
    // action: 
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
      <ul class="flex justify-end px-3 py-3">
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

      <!-- <button id="lineLoginBtn">LINE 登入</button>
        <div class="">
          <h2 class="">會員登入</h2>
          <p class="mb-2">帳號</p>
          <input type="email" class="" />
          <p class="mt-4 mb-2">密碼</p>
          <input  type="password" class="" />
          <a href="javascript:void(0)" class="block mt-2">忘記密碼</a>
          <button class="">登入</button>
        </div> -->
    </header>
    <ul class="flex justify-center sticky top-0 bg-white drop-shadow-lg">
      <li class="mr-9 nav-list ">
        <a href= "http://localhost:5173/sale" button @click="changePage('/sale')" class="nav-link relative text-xl py-5 inline-block">SUMMER SALE</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="http://localhost:5173/bestseller" button @click="changePage('/Bestseller')" class="nav-link relative text-xl py-5 inline-block">Bestseller</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="#product" button @click="changePage('/Products')" class="nav-link relative text-xl py-5 inline-block">Product</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="#product" class="nav-link relative text-xl py-5 inline-block">New Arrival</a>
      </li>
      <li class="mr-9 nav-list">
        <a href="#" class="nav-link relative text-xl py-5 inline-block">Blog</a>
      </li>
      <li class="nav-list">
        <a href="#" class="nav-link relative text-xl py-5 inline-block">Contact Us</a>
      </li>
    </ul>
    <slot/>

    <footer>
      <div class=" flex bg-Bottom-pink w-full  h-5/5">
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
    <input class="input-newsletter mt-2" type="text" name="newsletter" placeholder="EMAIL" required="">
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

    <!-- <footer>
      <div class="footer__container">
        <div class=" h-54  bg-Bottom-pink ">
          <ul class="info-list">
            <li class="flex justify-center mb-5">
              <div class="info-list__item__icon">
              </div>
              <p class="info-list__item__detail mt-2 tracking-wider text-lg"> <span class="font-bold">官方服務時間</span></p>
            </li>
            <li class="flex justify-start mb-5">
              <div class="info-list__item__icon">
                <i class="fa-solid line px-1 mt-3"></i>
              </div>
              <i class="fa-brands fa-line "></i>
              <p class="info-list__item__detail tracking-wider">官方Line: @borcelle</p>
            </li>
            <li class="flex justify-start mb-5">
              <div class="info-list__item__icon">
                <i class="fa-solid fa-envelope  px-2"></i>
              </div>
              <p class="info-list__item__detail">
                信箱: clpes12061014ab@gmail.com
              </p>
            </li>
            <li class="flex justify-start mb-5">
              <div class="info-list__item__icon">
              </div>
              <i class="fa-solid fa-briefcase px-2 py-1"></i>
              <p class="flex justify-start tracking-wider">工作日:週一到週五 09:00-18:00</p>
            </li>
            <div style="border-top:1px solid #FFFFFF"></div>
            <li class="flex justify-start mb-5">
              <div class="info-list__item__icon">
                <i class="fa-solid fa-pen-nib px-2 "></i>
              </div>
              <p class="flex justify-start mb-5 tracking-wide">薩摩亞商皇后國際有限公司台灣分公司｜統編53678183</p>
            </li>
          </ul>
        </div>
      </div>
    </footer> -->
    </div>

  <div>
    <a-modal v-model:open="open" title= "會員登入" @ok="submit" class="text-center" >
      <p class="text-base font-medium leading-[0px] pb-8 ">SIGN IN</p>
      <label for="username" class ="flex">電子郵件</label>
      <input v-model="message" placeholder=" E-mail" class="mx-5 rounded-lg mb-10" />
      <!-- <input id="username" v-model="loginForm.username" type="E-mail" class="mx-5"> -->
      <label for="username" class ="flex">密碼</label>
      <input v-model="message" placeholder=" Password" class=" rounded-lg mx-20 mb-7"/>
      <a class="btnLINELogin btn bg-line-green text-white flex rounded-lg w-100 text-lg cursor-pointer justify-center  flex-wrap hover:text-[rgba(0,0,0,0.3)]" href="https://reurl.cc/WNDRKZ" >
      <i id="icon-line-login" class="url(https://static.tpx.tw/sff/meierq-v2/static/img/new-login-line.svg?v=2)  absolute w-6  h-6 left-2;"></i>
      <i class="fa-brands fa-line mx-5 my-2 " style="color:#FFFFFF;"></i>
      <span class="align-center mt-1 ">LINE 登入</span>
      </a>
      <a class="btnFBLogin btn bg-fb-blue  text-white flex rounded-lg w-100 text-lg cursor-pointer justify-center  flex-wrap mt-4 hover:text-[rgba(0,0,0,0.3)]" href="https://reurl.cc/Nl07d6">
      <i class="fa-brands fa-facebook my-2 px-5 " style="color:#FFFFFF;"></i>
      <span class="align-center mt-1 ">FACEBOOK 登入</span>
      </a>
      <!-- <input id="username" v-model="loginForm.password" type="Password" class="mx-5"> -->
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
