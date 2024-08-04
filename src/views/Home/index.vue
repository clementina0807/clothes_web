<script setup></script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
      <img class="icon" src="@/assets/images/search.png" alt="">
      <img class="icon-1" src="@/assets/images/user.png" alt="">
      <img class="icon-2" src="@/assets/images/shopping-cart.png" alt="">
      <img class="icon-3" src="@/assets/images/list.png" alt="">
      <img class="icon-4" src="@/assets/images/blogger.png" alt="">
      <img class="icon-5" src="@/assets/images/globe.png" alt="">
      <img class="icon-6" src="@/assets/images/moon.png" alt="">
      </div>
      <img class="brand" src="@/assets/images/b.gif" alt="" />
       <div class="advertisement">
       <img src="@/assets/images/網頁進入廣告.png" alt="廣告">
        </div>
        <button id="lineLoginBtn">LINE 登入</button>

        <div class="w-[90%] p-4 mt-20 bg-white rounded-md shadow-md">
  <h2 class="text-center text-purple-500 font-bold mb-10 text-3xl">會員登入
  </h2>
  <p class="mb-2">帳號</p>
  <input type="email"
    class="border-2 border-gray-400 focus:ring-2 w-full p-2 rounded-md"
  />
  <p class="mt-4 mb-2">密碼</p>
  <input
    type="password"
    class="border-2 border-gray-400 focus:ring-2 w-full p-2 rounded-md"
  />
  <a href="javascript:void(0)" class="block mt-2">忘記密碼</a>
  <button
    class="">
    登入
  </button>
</div>
    </header>

    <ul class="nav-list">
      <li class="nav__item">
        <a href="#" class="nav__link">SUMMER SALE</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Bestseller</a>
      </li>
      <li class="nav__item">
        <a href="#product" class="nav__link">Product</a>
      </li>
      <li class="nav__item">
        <a href="#product" class="nav__link">New Arrival</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Blog</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Contact Us</a>
      </li>
    </ul>
    <main>
      <section id="banner">
        <div class="banner-container"></div>
      </section>
      <section id="product">
        <h2 class="product__title">BEST RECOMMEND</h2>
        <div class="container">
          <div class="row">
            <div class="product__card"></div>
            <img class="card_image-1" src="@/assets/images/BESTRECOMMEND01.jpg
    " alt="" />
    <img class="card_image-2" src="@/assets/images/BESTRECOMMEND02.jpg" alt="">
    <img class="card_image-2" src="@/assets/images/BESTRECOMMEND03.jpg" alt="">
    <img class="card_image-2" src="@/assets/images/BESTRECOMMEND04.jpg" alt="">
    <img class="card_image-2" src="@/assets/images/BESTRECOMMEND05.jpg" alt="">
    <img class="card_image-2" src="@/assets/images/BESTRECOMMEND06.jpg" alt="">
    <img class="card_image-2" src="@/assets/images/BESTRECOMMEND07.jpg" alt="">
    <img class="card_image-2" src="@/assets/images/BESTRECOMMEND08.jpg" alt="">

            <div class="mask"></div>

            <!-- <div class="col-4">
              <div class="product__card"></div>
            </div>
            <div class="col-4">
              <div class="product__card"></div>
            </div>
            <div class="col-4">
              <div class="product__card"></div>
            </div>
            <div class="col-4">
              <div class="product__card"></div>
            </div>
            <div class="col-4">
              <div class="product__card"></div>
            </div> -->
          </div>
        </div>
      </section>
      <img class="advertising" src="@/assets/images/右下廣告.jpg" alt="">
      <!-- <div class="advertising"></div> -->
       <img class="arrow__up" src="@/assets/images/arrow-right.png" alt="">

    </main>
    <footer>
      <div class="footer__container">
      <div class="footer__card">
        <ul class="info-list">
          <li class="info-list__item">
            <div class="info-list__item__icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <p class="info-list__item__detail">官方服務時間</p>
          </li>
          <li class="info-list__item">
            <div class="info-list__item__icon">
              <i class="fa-solid line"></i>
            </div>
            <p class="info-list__item__detail">官方Line: @borcelle</p>
          </li>
          <li class="info-list__item">
            <div class="info-list__item__icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <p class="info-list__item__detail">
              信箱: clpes12061014ab@gmail.com
            </p>
          </li>
          <li class="info-list__item">
            <div class="info-list__item__icon">
              <i class="fa-solid workday"></i>
            </div>
            <p class="info-list__item__detail">工作日:週一到週五 09:00-18:00</p>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #fffffb;
  text-align: center;
}
.container {
width: 40%;
margin-right: 30px;
position: absolute;
top:0;
right:0;
justify-content: center;
}

.icon{
width: 5%;

}
.icon-1{
width: 5%;
}
.icon-2{
width: 5%;
}
.icon-3{
width: 5%;
}
.icon-4{
width: 5%;
}
.icon-5{
width: 5%;
}
.icon-6{
width: 5%;
}

.header .brand {
  width: 250px;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* header {
    width: 100%;
    background-color: #f8f8f8;
    padding: 10px 0;
    text-align: center;
} */

/* .advertisement {
    display: inline-block;
} */

.advertisement img {
    width: 50%;
    border: 1px solid #ddd; 
    border-radius: 5px; 
}

main {
  flex: 1;
}

#product .product__title {
  text-align: center;
  color:#DB4D6D;
  height: 70px;
  line-height: 70px;
  font-size: 30px;
}



.nav-list {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.nav-list .nav__item {
  margin-right: 36px;
}
.nav-list .nav__item:last-child {
  margin-right: 0px;
}

.nav-list .nav__link {
  position: relative;
  font-size: 20px;
  color: #f4a7b9;
  padding: 20px 0;
  display: inline-block;
}

.nav-list .nav__link:hover {
  color: #fedfe1;
}

.nav-list .nav__link::before {
  content: "";
  display: block;
  background-color: #f4a7b9;
  width: 0%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all.3s;
}

.nav-list .nav__item:hover .nav__link::before {
  width: 100%;
}

#banner {
  height: 800px;
  background-image: url("../../assets/images/banner.jpg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  /* border: 1px solid blue; */
}

/* .col-4 {
  width: 20%;
  padding: 0 20px;
  border: 1px solid red;
  } */

  #product .product__card {
    height: 200px;
    background-color: #f4a7b9;
    margin-bottom: 20px;
  }
  
  #product .container {
    width: 1150px;
    margin: 0 auto;
    /* border: 1px solid #000; */
    position: relative;
  }
  
  #product .card_image-1{
    object-fit: cover;
    width:20%;
    margin:20px;
  }
  
  #product .card_image-2{
    object-fit: cover;
    width:20%;
    margin:20px;
  }
  
  #product .card_image-3{
    object-fit: cover;
    width:20%;
  }
  
  #product .card_image-4{
    object-fit: cover;
    width:20%;
  }
  
  #product .card_image-5{
    object-fit: cover;
    width:20%;
  }
  
  #product .card_image-6{
    object-fit: cover;
    width:20%;
  }
  
  #product .card_image-7{
    object-fit: cover;
    width:20%;
  }
  
  #product .card_image-8{
    object-fit: cover;
    width:20%;
  }
  .mask {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.3);
    filter:brightness(60%);
  }
  
  .advertising {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width:350px;
    /* height: 50px; */
    line-height: 100px;
    text-align: center;
    background: #f4a7b9;
    color: #fff;
    margin-right: 3%;
    
  }
  .arrow__up{
    position: absolute;
    /* position:fixed; */
    right:0;
    transform:rotate(180deg);
    width:120px;
    filter:drop-shadow(0px 0px 10px rgba(0,0,0,.3)) contrast(200%);
    margin-right: -2%;
    margin-top: -10%;
    
  }
  
  footer {
    background: #f4a7b9;;
    color: #fff;
    height:200px;
    padding-top:40px;
  }
  .footer__container{
    display: flex;
    justify-content: left;
    margin-left: 10%;
  }

</style>



