<script setup>
import{ reactive, ref ,computed} from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/store/module/user'
import { userApi } from '@/api/user'
import { message } from 'ant-design-vue';
import { useI18n } from 'vue-i18n'
import { setLanguage } from "@/utils/localStorage";

const userStore = useUserStore()
const myToken = ref(userStore.token)

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
const scrollUp = () =>{
  window.scrollTo({ top: 0, behavior: 'smooth' })
}


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

const menuList = computed(() => [
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: t('product_search'),
    action: () => changePage('/search')
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: t('shopping_cart'),
    action: () => changePage('/cart')
  },
  {
    icon: 'fa-solid fa-receipt',
    title: t('order_search')
  },
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
      </ul>
      <a href="http://localhost:5173/">
        <img class="w-[200px] block mx-auto cursor-pointer " src="@/assets/images/b.gif" alt="" /></a>

    </header>
    <ul class="flex justify-center sticky top-0 bg-white drop-shadow-lg z-50">
      <li class="mr-9 nav-list">
        <div @click="changePage('/sale?category=featured')" class="nav-link relative text-xl py-5 inline-block cursor-pointer">{{ t('summer_sale') }}</div>
      </li>
      <li class="mr-9 nav-list">
        <div @click="changePage('/sale?category=hot')" class="nav-link relative text-xl py-5 inline-block cursor-pointer">{{ t('bestseller') }}</div>
      </li>
      <li class="mr-9 nav-list">
        <div @click="changePage('/sale?category=global')" class="nav-link relative text-xl py-5 inline-block cursor-pointer">{{ t('in_stock') }}</div>
      </li>
    </ul>
    <div class="flex-1 h-full">
      <slot/>
      <div class="menu__bg">
            <div class="menu__container clearfix">
                
                <h1 class="menu__logo">
                    <a href="/" class="menu__logo-link"><img src="https://ithelp.ithome.com.tw/storage/image/nav_logo.svg" alt="iT邦幫忙"></a>
                </h1>

                                
                
                <ul class="list-unstyled menu__left">
                    <li class="menu__item">
                        <a href="https://ithelp.ithome.com.tw/questions" class="menu__item-link  menu__item-link--active  menu__item-link--pl">search 搜尋...</a>
                    </li>
                    <li class="menu__item">
                        <a href="https://ithelp.ithome.com.tw/articles?tab=tech" class="menu__item-link ">技術文章</a>
                    </li>
                    
                    <li class="menu__item">
                        <a href="https://ithelp.ithome.com.tw/articles?tab=job" class="menu__item-link  hidden-xs">iT 徵才</a>
                    </li>
                    
                    <li class="menu__item">
                        <a href="https://ithelp.ithome.com.tw/tags" class="menu__item-link  hidden-xs">Tag</a>
                    </li>
                    <li class="menu__item">
                        <a href="https://ithelp.ithome.com.tw/talks" class="menu__item-link  hidden-xs">聊天室</a>
                    </li>
                    <li class="menu__item menu__item--ironman">
                        <a href="/2024ironman/" target="_blank" class="menu__item-link hidden-xs">2024 鐵人賽</a>
                    </li>
                </ul>
                

                                    
                    <ul class="list-unstyled menu__right">
                        <li class="menu__item">
                            <div id="searchDropdown" class="menu__search-btn menu__search-btn--active">
                                <span class="menu__search-toggle active"></span>
                            </div>
                        </li>
                        <li class="menu__item">
                            <a href="https://ithelp.ithome.com.tw/users/login" class="menu__item-link">登入/註冊</a>
                        </li>
                    </ul>
                            </div>
        </div>
    </div>

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
    <li><a href="https://line.me/ti/p/SJqjZ4H6OD" target="_blank">Line</a></li>
    </ul>
    </div>

    <div class="mx-40">
    <div class="mt-8 mb-2 tracking-wide font-bold">NEWS LETTER</div>
    <div class="news-letter">
    <form id="form-newsletter-signup" novalidate="novalidate">
    <input type="email" class="text-slate-950 mt-2" name="email" placeholder="EMAIL" required=""/>
    <button class="subscribe-mail-btn mx-4 flex-col " type="submit">SUBSCRIBE
　　　
      
    </button>
    </form>
    </div> 


  
    <div class="tracking-wide font-bold mt-4 ">CUSTOMER SERVICE</div>
    <p class="">clpes12061014ab@gmail.com</p>
    <p class="mb-2"> Mon.~ Fri. 09:00-12:00 / 13:00-18:00</p>
   
    <div class="tracking-wide -ml-[732px] ">© 薩摩亞商皇后國際有限公司台灣分公司｜統一編號 53678183</div>
    </div>
    </div>
    </footer>
    </div>

  <div>
    <a-modal v-model:open="open" title= "會員登入" @ok="login" class="text-center" ok-text= "登入"  >
      <p class="text-base font-medium leading-[0px] pb-8 ">SIGN IN</p>
      <div class="flex">
      <label for="username" class="mr-2 w-[100px] text-right">使用者名稱</label>
      <input v-model="loginForm.username" placeholder=" Username" class=" rounded-lg mb-10 mx-10" /></div>
      <div class="flex">
      <label for="username"  class="mr-2 w-[100px] text-right">密碼</label>
      <input v-model="loginForm.password" placeholder=" Password" type="password" class=" rounded-lg mb-7 mx-10"/></div>
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
