<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()


</script>

<template>
    
    <div class="flex ">
        <img src="https://www.queenshop.com.tw/assets/images/blog/24083002/a.jpg"  class="w-[40%] h-[40%] mx-48 mt-10" >
    <div class="shadow-md">
        <nav class=" flex-col mt-5 mb-5 ">
        <img src="https://www.queenshop.com.tw/assets/images/blog/24083001/s5.jpg" class ="w-60 mt-20 mb-4 cursor-pointer "    @click="changePage('/blog')" >
            <span class="number">1</span>
            <p class="mt-6 mb-8">2024.08.22 </p>
            <h2 class="mb-4">初秋日系多層次穿搭示範</h2>
          
        <img src="https://www.queenshop.com.tw/assets/images/blog/24080901/a.jpg" class="w-60 mb-4 cursor-pointer " alt="" @click="changePage('/blog-1')">
            <span class="number">2</span>
            <p class="mt-6 mb-8">2024.9.15 </p>
            7種牛仔短褲穿搭攻略...
             
        </nav></div></div>
<div class="mx-80 w-[40%]  mt-4">
<h1 class="text-xl  font-semibold  ">BLOG | 【日本佐賀 ‧ 旅拍】佐賀打卡必去咖啡廳&道地美食！   </h1>
<div class=" flex mt-4">
<i class="fa-solid fa-tag  ml-44 mt-1"></i>
<h2 class="italic  mx-6 ">2024.11.8 </h2></div>
<div class="hori-line mt-4 "></div> </div>                                    

<div class="mx-60  w-[40%] ">
    <img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s2.jpg" class="mt-4" alt="">
    <p class="mb-20 mx-4 mt-10 text-zinc-500">
    看完景點介紹，大家有想做去哪一個地方嗎? 
    每個地方都想去怎麼辦XD <br>
    但怎麼能忘記最重要的就是要跟大家分享美食啦！ <br>
    當地必吃以及小編的口袋名單， <br>
    一樣不私藏的跟大家介紹唷～<br>
    除了各種當地必吃美食之外，<br>
    小編也知道妳們就算到了國外也是會跑咖啡廳的人！<br>
    這次來到好幾間很特別又很有趣的咖啡廳<br>
    話不多說 讓我們繼續看下去吧！<br>
    </p>
<img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s3.jpg" class="mb-4" alt="">
<h1 class="font-extrabold text-lg text-blue mx-4 mb-4">01 /レストラン＆カフェ浪漫座｜咖啡廳</h1>
<p class="mb-4 mx-4 tracking-wide leading-loose">
位於佐賀市重要文化財產—舊古賀銀行館內，充滿大正浪漫風情的浪漫座咖啡廳，擁有挑高兩層樓的空間帶給人溫柔、又沉穩的氣氛，陽光灑落，這畫面真的超級美♥

在這裡品嚐到在地咖啡豆所磨製的香濃咖啡外，佐賀的B級美食「西西里飯」在這裡也能享用得到。 除了咖啡與美食，這裡也會不定時舉辦的演奏會，在優雅的樂章下，愜意的度過美好午候～
那什麼是大正浪漫呢?就讓小編為大家解釋解釋～～

大正浪漫是指日本大正時代（1912-1926年）的一種文化和藝術潮流。 這段時期，日本社會經歷了快速的現代化和西化，並受到歐美文化的強烈影響。 大正浪漫也代表了一個充滿創新和變革的時代。</p>
<h1 class="mx-4 pt-12">【INFO】
レストラン＆カフェ浪漫座<br>
📍 日本〒840-0823 Saga, Yanagimachi, 2−9 佐賀市歴史民俗館</h1>
<img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s4.jpg" class="mb-4" alt="">
<h1 class="font-extrabold text-lg text-blue mx-4 mb-4">02 / OVER ROAD CAFE ｜樹屋咖啡廳</h1>
<p class="mb-4 mx-4 tracking-wide leading-loose">
這間咖啡廳於2024年5月開幕，以祕密基地為設計概念， 將已廢棄的大眾澡堂重新改建而成，進到裡面會看到以前澡堂的歷史痕跡。

用心鑽研咖啡的老闆，堅持提供手沖現作的咖啡及甜點， 所以店裡的咖啡跟甜點水準都相當之高！ 而且仔細看就會發現， 店內的餐具及裝潢則是採用佐賀在地的瓷器唷！

除了普通的餐桌座位外，還有吧台座位和立食吧台區， 大家來的時候都可以試試不同的位置唷。

店內座位數約15席而已，所以想要來的水水們要做好排隊的心理準備(笑)</p>
<h1 class="mx-4 pt-12">【INFO】OVER ROAD CAFE
📍 2 Chome-2-37 Tojin, Saga, 840-0813日本<br>
📍 日本〒840-0823 Saga, Yanagimachi, 2−9 佐賀市歴史民俗館</h1>
<img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s5.jpg" class="mb-4" alt="">
<h1 class="font-extrabold text-lg text-blue mx-4 mb-4">03 / 76pain 本店｜麵包店</h1>
<p class="mb-4 mx-4 tracking-wide leading-loose">
76pain是一家致力於成為「深受在地人喜愛的麵包店」為目標，期望透過充滿溫暖的麵包來建立起人與人之間連結的麵包店。

以歐系麵包為主，加入日系麵包手藝，皆使用日本國產小麥粉，不使用任何添加物，吃起來無負擔，大人小孩都能安心享用，超開勳

通常歐系麵包都會比較乾硬、扎口，但76pain製作出來的歐式麵包外酥內軟口感濕潤，種類豐富外，味道真的很厲害，平常就特別愛吃麵包的Q編，這間麵包店已經成為個人心目中的NO.1 ！！

買完麵包，也可到對面逛逛CAFÉ 木と本等可愛小店唷～<br></p>
<h1 class="mx-4 pt-12">【INFO】
76pain
📍 2 Chome-2-14 Tojin, Saga, 840-0813日本<br>
📍 日本〒840-0823 Saga, Yanagimachi, 2−9 佐賀市歴史民俗館</h1>

<img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s6.jpg" class="mb-4" alt="">
<h1 class="font-extrabold text-lg text-blue mx-4 mb-4">04 / CAFÉ 木と本｜咖啡廳</h1>
<p class="mb-4 mx-4 tracking-wide leading-loose">
木と本是一間以「樹」&「書」為主題的咖啡店。書的數量遠超過妳的預期，幾乎可以說是一座小型圖書館。

來到這裡就好像回到家一樣，舒服又自在， 餐廳提供手沖單品咖啡、三明治、輕食及甜點，看書看到餓了就可以點來享用，好幸福餒♥

除了提供咖啡和茶點，這裡還設計了適合長時間停留，可以一個人讀書、學習或工作不被打擾的沉浸式空間。<br></p>

<h1 class="mx-4 pt-12">【INFO】
CAFÉ 木と本<br>
📍 日本〒840-0813 Saga, Tojin, 1 Chome−2−18</h1>

<img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s7.jpg" class="mb-4" alt="">
<h1 class="font-extrabold text-lg text-blue mx-4 mb-4">05 /紅茶專門店 紅葉｜佐賀下午茶</h1>
<p class="mb-4 mx-4 tracking-wide leading-loose">
吃完點心～就好想喝一杯順口的紅茶呀！聽說佐賀市歷史民俗館附近有日本現在很知名的紅茶專門店，快跟我們一起去看看吧！

這間店真的太神奇，老闆原本居然是卡車司機耶～由老闆親自走訪日本各地的茶廠，精心挑選出優質的日本國產紅茶葉及適合搭配紅茶的各式茶點。 店址就在佐賀市極具歷史色彩的「長崎街道」上， 店舖本身的建築是擁有百年歷史的古厝，在充滿日式風情的老屋紅茶館， 感受日本紅茶的無限魅力。

喝完紅茶喜歡的話也可以外帶茶葉回家和家人朋友一起享用唷！<br></p>

<h1 class="mx-4 pt-12">【INFO】
紅茶專門店 紅葉<br>
📍 4-7 Yanagimachi, Saga, 840-0823日本</h1>

<p class="mx-4 tracking-wide leading-loose mt-10">
介紹完咖啡廳之後，就要來分享佐賀必吃美食啦(*ˊ v`*)
以下都是小編真心推薦大家來一定要吃的!!
不吃會後悔啊~~~~
<br></p>
<img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s8.jpg" class="mb-4" alt="">
<h1 class="font-extrabold text-lg text-blue mx-4 mb-4">06 /酒と飯 豆たん | 佐賀牛</h1>
<p class="mb-4 mx-4 tracking-wide leading-loose">
來到佐賀首先就是要先吃當地特色「佐賀牛」啦～ 這間特別的介紹給妳～

小編小知識:
佐賀牛以肉質柔軟、油花甜美又不肥膩，是日本國民心中頂級和牛的代表。它之所以如此美味，原因與佐賀獨有的氣候和環境大有關連。 在佐賀的好山好水、乾淨空氣陶冶，且不給牛隻任何壓力的舒適條件下，牛肉的油花如同霜降般綿密細緻，色澤紅潤、入口即化，品質迅速得到全國認可，才短短五年就在市場佔有一席之地！

看看這個油花，有夠漂亮(*´﹃`) 看著看著又餓了～

這間「酒と飯 豆たん」是個深藏不露的居酒屋，原本以為就是販售一些串燒阿、烤物、關東煮之類的，結果沒想到可以在這裡品嘗到使用佐賀牛燒肉以及新鮮的海膽，實在是太幸福啦～～<br></p>

<h1 class="mx-4 pt-12">【INFO】
酒と飯 豆たん<br>
📍 1 Chome-3-56 Ekimae Chuo, Saga, 840-0801日本</h1>
<img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s9.jpg" class="mb-4" alt="">
<h1 class="font-extrabold text-lg text-blue mx-4 mb-4">07 /呼子活イカ さかなや道場 | 活透抽</h1>
<p class="mb-4 mx-4 tracking-wide leading-loose">
不知道有沒有人跟小編一樣喜歡吃活的海鮮XD
之前去韓國吃活章魚之後就愛上
這次來到佐賀看到活透抽料理就一定要來吃看看呀！

新鮮採摘的活透抽的新鮮度和口感都非常出色！享受充滿口腔的飽滿口感和甜味
吃的時候還會看到觸鬚動來動去實在是非常有趣呢！<br></p>

<h1 class="mx-4 pt-12">【INFO】
呼子活イカ さかなや道場<br>
📍 日本〒840-0801 Saga , Ekimae Chuo , 1 Chome−4−1</h1>
<img src="https://www.queenshop.com.tw/assets/images/blog/24083002/s10.jpg" class="mb-4" alt="">
<h1 class="font-extrabold text-lg text-blue mx-4 mb-4">08 / ふくの家 愛敬店 ｜九州拉麵</h1>
<p class="mb-4 mx-4 tracking-wide leading-loose">
來到日本就是要吃拉麵呀！！ 只能現場候位，大家來的時候記得在門口的登記簿上填上名字跟人數， 店員會依序叫人。

拉麵湯頭較鹹，喜歡重口味的人一定會愛上！！ 還有煎餃也是必點美食～ 一口拉麵一口煎餃 人間美味呀～～<br></p>

<h1 class="mx-4 pt-12">【INFO】
ふくの家 愛敬店<br>
📍 11-20 Aikeicho, Saga, 840-0812日本</h1>

<h2 class="mt-20 mb-60 ">
佐賀牛、活透抽以及九州拉麵<br>
妳們最想吃哪一道呢?<br>
歡迎跟我們分享唷!!</h2></div>






</template>

<style scoped>
.hori-line {
    width: 90%;
    height: 2px;
    border-top: solid #000000 1px;
}

.number {
 border: solid #000000 1px;
 padding: 5px 12px;
}

</style>

