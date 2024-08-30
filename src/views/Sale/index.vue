<script setup>
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-headerColor bg-opacity-pink-300">
     <img class="w-[200px] block mx-auto cursor-pointer " src="@/assets/images/b.gif" alt="" />
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
     </header></div>

    <div class="container">
    <nav class="sidebar"></nav>
    <main class="content"></main>
    </div>

     <main>
      <div>
            <ul class="product-menu__submenu collapse show" id="product_menu_0" data-parent="#product_collapsed" style="">
                    <li>
                        <a href="/all">
                            <span class="tag-main-txt">所有商品</span>
                        </a>
                    </li>
                                    <li>
                        <a href="/zh-tw/tag/newin" style="">
                            <span class="tag-main-txt">本週新品</span>
                            <span class="tag-sub-txt">本週新品</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/tag/pleateddresslook" style="color:#A4B48E">
                            <span class="tag-main-txt">壓褶洋搭配指南</span>
                            <span class="tag-sub-txt">365天充滿仙女感</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/tag/cool" style="color:#bb9d79">
                            <span class="tag-main-txt">牛奶絲.涼感專區</span>
                            <span class="tag-sub-txt">牛奶絲.涼感專區</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/tag/bestsheertop" style="">
                            <span class="tag-main-txt">夏日仙女透膚</span>
                            <span class="tag-sub-txt">夏日仙女透膚</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/tag/matcheachother" style="">
                            <span class="tag-main-txt">層次感疊搭單品</span>
                            <span class="tag-sub-txt">層次感疊搭單品</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/tag/topdresses" style="">
                            <span class="tag-main-txt">必收質感細肩洋裝</span>
                            <span class="tag-sub-txt">必收質感細肩洋裝</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/tag/restock" style="">
                            <span class="tag-main-txt">補貨到</span>
                            <span class="tag-sub-txt">補貨到</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/tag/mit" style="">
                            <span class="tag-main-txt">MIT 台灣製</span>
                            <span class="tag-sub-txt">MIT 台灣製</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/tag/qqcollection" style="">
                            <span class="tag-main-txt">膠原柔彈布料</span>
                            <span class="tag-sub-txt">MIT</span>
                        </a>
                    </li>
                    <li class="active">
                        <a href="/zh-tw/tag/hotsale" style="">
                            <span class="tag-main-txt">本月熱銷TOP10</span>
                            <span class="tag-sub-txt">top10</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/onsale" style="">
                            <span class="tag-main-txt">優惠活動</span>
                            <span class="tag-sub-txt">優惠活動</span>
                        </a>
                    </li>
            </ul>
            <ul class="collapse product-menu__submenu" id="product_menu_1" data-parent="#product_collapsed">
                    <li>
                        <a href="/zh-tw/onsale">
                            <span class="tag-main-txt">全部優惠商品</span>
                        </a>
                    </li>
                                    <li>
                        <a href="/zh-tw/tag/add0830" style="color:#910d0d">
                            <span class="tag-main-txt">好評再加款！第二件2折</span>
                            <span class="tag-sub-txt">限時至9/2 23:59</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/campaign/1Q100DA240626" style="color:#910d0d">
                            <span class="tag-main-txt">夏日旅行聯名．現折100元</span>
                            <span class="tag-sub-txt">夏日旅行聯名．現折100元</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/campaign/3Q198D0413" style="color:#910d0d">
                            <span class="tag-main-txt">百搭襪．3雙198元</span>
                            <span class="tag-sub-txt">百搭襪．3雙198元</span>
                        </a>
                    </li>
            </ul>
            <ul class="collapse product-menu__submenu" id="product_menu_2" data-parent="#product_collapsed">
                                    <li>
                        <a href="/zh-tw/category/shop/project/FAIRY" style="">
                            <span class="tag-main-txt">FAIRY 仙女</span>
                            <span class="tag-sub-txt">FAIRY 仙女</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/project/VINTAGE" style="">
                            <span class="tag-main-txt">VINTAGE 復古</span>
                            <span class="tag-sub-txt">VINTAGE 復古</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/project/MMM" style="">
                            <span class="tag-main-txt">MMM 和我們一起生活</span>
                            <span class="tag-sub-txt">MMM 和我們一起生活</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/project/CLASSIC" style="">
                            <span class="tag-main-txt">CLASSIC 簡約知性</span>
                            <span class="tag-sub-txt">CLASSIC 簡約知性</span>
                        </a>
                    </li>
            </ul>
            <ul class="collapse product-menu__submenu" id="product_menu_3" data-parent="#product_collapsed">
                                    <li>
                        <a href="/zh-tw/category/shop/collection/SPARKLE" style="">
                            <span class="tag-main-txt">スパークル SPARKLE</span>
                            <span class="tag-sub-txt">スパークル SPARKLE</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/collection/Dailyneeds" style="">
                            <span class="tag-main-txt">日常美學提案 Dailyneeds</span>
                            <span class="tag-sub-txt">日常美學提案 Dailyneeds</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/collection/formalcollection" style="">
                            <span class="tag-main-txt">輕婚紗 Bridal collection</span>
                            <span class="tag-sub-txt">輕婚紗 Bridal collection</span>
                        </a>
                    </li>
            </ul>
            <ul class="collapse product-menu__submenu" id="product_menu_4" data-parent="#product_collapsed">
                                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/letmebeme" style="">
                            <span class="tag-main-txt">letmebeme聯名企劃</span>
                            <span class="tag-sub-txt">letmebeme聯名企劃</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/KlassiC" style="">
                            <span class="tag-main-txt">KlassiC.聯名</span>
                            <span class="tag-sub-txt">KlassiC.聯名</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/oiiv" style="">
                            <span class="tag-main-txt">oiiv聯名企劃</span>
                            <span class="tag-sub-txt">oiiv聯名企劃</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/spring" style="">
                            <span class="tag-main-txt">spring春春聯名企劃</span>
                            <span class="tag-sub-txt">spring春春聯名企劃</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/PINGPING" style="">
                            <span class="tag-main-txt">PINGPING屏屏聯名企劃</span>
                            <span class="tag-sub-txt">PINGPING屏屏聯名企劃</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/GREENPEA" style="">
                            <span class="tag-main-txt">青豆GREENPEA聯名企劃</span>
                            <span class="tag-sub-txt">青豆GREENPEA聯名企劃</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/nuhi" style="">
                            <span class="tag-main-txt">nuhi聯名企劃</span>
                            <span class="tag-sub-txt">nuhi聯名企劃</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/NAZO" style="">
                            <span class="tag-main-txt">聖元NAZO聯名企劃</span>
                            <span class="tag-sub-txt">聖元NAZO聯名企劃</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/ALICEBIUBROTHER" style="">
                            <span class="tag-main-txt">ALICEBIUBROTHER聯名企劃</span>
                            <span class="tag-sub-txt">ALICEBIUBROTHER聯名企劃</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/styleessentials/MONROE" style="">
                            <span class="tag-main-txt">夢露MONROE聯名企劃</span>
                            <span class="tag-sub-txt">夢露MONROE聯名企劃</span>
                        </a>
                    </li>
            </ul>
            <ul class="collapse product-menu__submenu" id="product_menu_5" data-parent="#product_collapsed">
                                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/bra" style="">
                            <span class="tag-main-txt">BRA/內衣</span>
                            <span class="tag-sub-txt">BRA/內衣</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/vests" style="">
                            <span class="tag-main-txt">背心</span>
                            <span class="tag-sub-txt">背心</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/shorttop" style="">
                            <span class="tag-main-txt">短袖上衣</span>
                            <span class="tag-sub-txt">短袖上衣</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/top" style="">
                            <span class="tag-main-txt">長袖上衣</span>
                            <span class="tag-sub-txt">長袖上衣</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/shirt" style="">
                            <span class="tag-main-txt">襯衫</span>
                            <span class="tag-sub-txt">襯衫</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/dresses" style="">
                            <span class="tag-main-txt">洋裝</span>
                            <span class="tag-sub-txt">洋裝</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/knitwear" style="">
                            <span class="tag-main-txt">針織毛衣</span>
                            <span class="tag-sub-txt">針織毛衣</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/twopieceset" style="">
                            <span class="tag-main-txt">套裝</span>
                            <span class="tag-sub-txt">套裝</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/coat" style="">
                            <span class="tag-main-txt">外套大衣</span>
                            <span class="tag-sub-txt">外套大衣</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/tracksuit" style="">
                            <span class="tag-main-txt">家居服</span>
                            <span class="tag-sub-txt">家居服</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/outerclothing/bikini" style="">
                            <span class="tag-main-txt">泳裝/比基尼</span>
                            <span class="tag-sub-txt">泳裝/比基尼</span>
                        </a>
                    </li>
            </ul>
            <ul class="collapse product-menu__submenu" id="product_menu_6" data-parent="#product_collapsed">
                                    <li>
                        <a href="/zh-tw/category/shop/bottoms/skirts" style="">
                            <span class="tag-main-txt">裙類</span>
                            <span class="tag-sub-txt">裙類</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/bottoms/jumpsuit" style="">
                            <span class="tag-main-txt">連身類</span>
                            <span class="tag-sub-txt">連身類</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/bottoms/shorts" style="">
                            <span class="tag-main-txt">短褲</span>
                            <span class="tag-sub-txt">短褲</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/bottoms/pants" style="">
                            <span class="tag-main-txt">長褲</span>
                            <span class="tag-sub-txt">長褲</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/bottoms/jeans" style="">
                            <span class="tag-main-txt">牛仔褲</span>
                            <span class="tag-sub-txt">牛仔褲</span>
                        </a>
                    </li>
            </ul>
            <ul class="collapse product-menu__submenu" id="product_menu_7" data-parent="#product_collapsed">
                                    <li>
                        <a href="/zh-tw/category/shop/jewelry/earrings" style="">
                            <span class="tag-main-txt">耳飾</span>
                            <span class="tag-sub-txt">耳飾</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/jewelry/ring" style="">
                            <span class="tag-main-txt">戒指</span>
                            <span class="tag-sub-txt">戒指</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/jewelry/necklace" style="">
                            <span class="tag-main-txt">項鍊</span>
                            <span class="tag-sub-txt">項鍊</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/jewelry/hairaccessories" style="">
                            <span class="tag-main-txt">髮飾</span>
                            <span class="tag-sub-txt">髮飾</span>
                        </a>
                    </li>
            </ul>
            <ul class="collapse product-menu__submenu" id="product_menu_8" data-parent="#product_collapsed">
                                    <li>
                        <a href="/zh-tw/category/shop/accessories/bags" style="">
                            <span class="tag-main-txt">包包</span>
                            <span class="tag-sub-txt">包包</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/accessories/hats" style="">
                            <span class="tag-main-txt">帽子</span>
                            <span class="tag-sub-txt">帽子</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/accessories/glasses" style="">
                            <span class="tag-main-txt">眼鏡</span>
                            <span class="tag-sub-txt">眼鏡</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/accessories/scarves" style="">
                            <span class="tag-main-txt">絲巾/圍巾</span>
                            <span class="tag-sub-txt">絲巾/圍巾</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/accessories/皮帶" style="">
                            <span class="tag-main-txt">皮帶</span>
                            <span class="tag-sub-txt">皮帶</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/accessories/socks" style="">
                            <span class="tag-main-txt">襪子</span>
                            <span class="tag-sub-txt">襪子</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/accessories/shoes" style="">
                            <span class="tag-main-txt">鞋</span>
                            <span class="tag-sub-txt">鞋</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zh-tw/category/shop/accessories/lifestyle" style="">
                            <span class="tag-main-txt">品牌日常小物</span>
                            <span class="tag-sub-txt">品牌日常小物</span>
                        </a>
                    </li>
            </ul>
    </div>
     </main>
 

  <div>
 
  </div>
</template>

<style scoped>

header {
  background-color: pink; 
  height:100px;
}

.container {
 flex:1; 
 display: flex; 
}
nav{
 background-color:purple;
}

main {
 background-color: gold;
 flex: 1;
}
</style>
