<script setup>
import { RouterLink, RouterView } from 'vue-router'
const table = {
    口袋怪獸: [
        { question: '以下絕招中威力不同於其他三只的是?', answer: '瓦割' },
        { question: '以下絕招中初始PP不同於其他三只的是?', answer: '起风' },
        { question: '以下不屬於舊版四大物盾的是', answer: '大綱蛇' },
        { question: '以下HP不同於其他三只的是', answer: '叉字蝠' },
        { question: '以下物功不同於其他三只的是', answer: '暴鯉龍' },
        { question: '以下物防不同於其他三只的是', answer: '沙河馬' },
        { question: '以下特功不同於其他三只的是', answer: '獵斑鰻' },
        { question: '以下特防不同於其他三只的是', answer: '搖籃百合' },
        { question: '以下速度不同於其他三只的是', answer: '愛心魚' },
        { question: '以下絕招命中不同於其他三只的是', answer: '岩石封殺' },
        { question: '下面沒有隨身攜帶物品的神奇寶貝是', answer: '可達鴨' },
        { question: '口袋怪獸中，總共有多少種屬性', answer: '18' },
        { question: '以下四只口袋怪獸裡,誰最重', answer: '古拉頓' },
        {
            question: '圖圖犬,咩利羊,呆呆獸,電龍的尾巴末端分別是什麼顏色',
            answer: '綠橘白紅',
        },
        {
            question: '哪隻精靈的體溫比太陽表面的溫度還要高',
            answer: '熔岩蝸牛',
        },
        { question: '以下種族值為600的是', answer: '夢幻' },
        { question: '光合作用，在大晴天時回復HP最大值的', answer: '2/3' },
        { question: '光合作用，在無天氣時回復HP最大值的', answer: '1/2' },
        { question: '下列口袋妖怪中最適合速攻的是', answer: '化石翼龍' },
        { question: '雷吉洛克有幾只眼睛', answer: '7只' },
        { question: '皮卡丘屬於什麼系的寶可夢', answer: '電系' },
        {
            question: '噴火龍被隆隆岩用原始力量，則原始力量的實際威力是',
            answer: '360',
        },
        { question: '小火龍是第幾世代的寶可夢', answer: '第一世代' },
        { question: '木守宮是第幾世代的寶可夢', answer: '第三世代' },
        {
            question: '已知小磁怪的體重為6千克，那三合一磁怪的體重是多少',
            answer: '60',
        },
        { question: '卡拉卡拉頭上戴著的是誰的頭骨', answer: '母親' },
        { question: '圖鑒編號為001的是下麵那只精靈', answer: '妙蛙種子' },
        {
            question:
                '光合作用，在沙暴、冰雹、下雨、大雨或霧天氣下，回復自己最大HP的',
            answer: '1/4',
        },
    ],
    遊戲背景: [
        { question: '今日美食每天領取幾次?', answer: '3' },
        { question: '精靈之星主要產出什麼?', answer: '精靈碎片' },
        { question: '四大天王在那個城市召開?', answer: '石英聯盟' },
        { question: '瀕死的精靈可以去哪裡治療?', answer: '精靈中心' },
        { question: '真新鎮在長青市那個方位?', answer: '南方' },
        { question: '下麵不屬於精靈獲得技能方式是?', answer: '華麗大賽' },
        { question: '列車正在維修的是哪個市', answer: '吉花市' },
        { question: '在滿金市開發佈會的歌星叫什麼', answer: '梨香' },
        { question: 'MEGA石碎片主要是在哪個副本產出', answer: '聯盟大會' },
        { question: 'MEGA石是由什麼碎片合成的', answer: 'MEGA石碎片' },
        { question: '目前精靈扭蛋機有幾世代', answer: '6' },
        { question: '挑戰精靈訓練家,可以獲得下面哪種物品', answer: '精靈經驗' },
        { question: '挑戰訓練家,每一關,最高為幾星', answer: '3' },
        { question: '下面那種不是遊戲中的扭蛋機', answer: '糖果扭蛋機' },
        { question: '下面那種方式不是遊戲體力恢復的方式', answer: '旅館休息' },
        { question: '下面那種途徑不能獲得攜帶物的', answer: '遠征之路' },
        { question: '下面那種不屬於精靈的培養方式', answer: '覺醒' },
        { question: '狩獵場在下面那個城市', answer: '滿金市' },
        { question: '列車正在維修的是那個城市', answer: '吉花市' },
        { question: '哪個培養方式是本作特有的', answer: '轉生' },
        { question: '在野外草叢捕捉寵物，需要消耗', answer: '疲勞' },
        { question: '我們的疲勞可以用來幹什麼', answer: '捕捉寵物' },
        { question: '精靈有那些途徑獲得經驗', answer: '選項全對' },
        {
            question: '首沖送的巨鉗螳螂，技能"點到為止"，最適合用來',
            answer: '捕捉寵物',
        },
        { question: '八大蝶可以在下面那個地點捕捉', answer: '桐樹林' },
        {
            question: '洗鍊個體質的神奇膠囊可以從哪裡獲得',
            answer: '伊布的寶藏',
        },
    ],
    屬性克制: [
        { question: '草系被多少種屬性克制?', answer: '5' },
        { question: '鋼系克制下麵那3種屬性?', answer: '岩石系、冰系、妖精' },
        {
            question: '地面系克制屬性的數量和下面哪種屬性一樣多?',
            answer: '格斗系',
        },
        { question: '岩石系克制下面哪種屬性', answer: '飛行系' },
        { question: '岩石系被克制的數量和下面哪種屬性一樣多', answer: '草系' },
        {
            question: '以下哪三種屬性克制格鬥系',
            answer: '飛行系,超能力系,妖精系',
        },
        { question: '以下哪三種屬性克制蟲系', answer: '飛行系,岩石系,火系' },
        { question: '克制鬼蟬的屬性有幾個', answer: '5' },
        { question: '幽靈系被下面哪2種屬性克制', answer: '幽靈系,惡系' },
        { question: '下面哪種屬性不克制冰系', answer: '超能力系' },
        { question: '下面哪種屬性克制電系', answer: '地面系' },
    ],
    其他: [
        {
            question: '請問火箭隊出場臺詞中"可愛又迷人的反派腳色"上一句是什麼?',
            answer: '貫徹愛與真實的邪惡',
        },
        { question: '火箭隊中的女隊員叫什麼', answer: '武藏' },
        { question: '小智的皮卡丘最愛的食物是什麼', answer: '番茄醬' },
        { question: '皮卡丘是屬於那位訓練家的精靈', answer: '小智' },
    ],
}
</script>

<template>
    <main>
        寶可夢問答
        <div v-for="(category, key) in table" :key="key">
            <div class="text-red">{{ key }}</div>
            <table>
                <tbody>
                    <tr v-for="item in category" :key="item.question">
                        <td>{{ item.question }}</td>
                        <td>{{ item.answer }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>
<style scoped>
table {
    font-size: 12px;
    border-collapse: collapse;
    width: 100%;
}
table tr {
    border-bottom: 1px rgb(177, 177, 177) solid;
}
.text-red {
    color: red;
}
</style>
