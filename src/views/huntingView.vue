<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref } from '@vue/runtime-core'
const pokeDistribution = {
    草原: [
        { name: '火焰鳥', level: 'beyond' },
        { name: '時拉比', level: 'beyond' },
        { name: '雷吉斯奇魯', level: 'beyond' },
        { name: '波爾凱尼恩', level: 'beyond' },
        { name: '電龍', level: 'legend' },
        { name: '雷伊布', level: 'legend' },
        { name: '風速狗', level: 'legend' },
        { name: '水伊布', level: 'legend' },
        { name: '索羅亞克', level: 'legend' },
        { name: '波士可多拉', level: 'legend' },
        { name: '阿羅拉椰蛋樹', level: 'legend' },
        { name: '大比鳥', level: 'epic' },
        { name: '卡蒂狗', level: 'epic' },
        { name: '迷唇姐', level: 'epic' },
        { name: '肯泰羅', level: 'epic' },
        { name: '百變怪', level: 'epic' },
        { name: '尼多王', level: 'epic' },
        { name: '布魯皇', level: 'epic' },
        { name: '雷電獸', level: 'epic' },
        { name: '蜻蜻蜓', level: 'rare' },
        { name: '果然翁', level: 'rare' },
        { name: '尼多娜', level: 'rare' },
        { name: '比比鳥', level: 'rare' },
        { name: '勇基拉', level: 'rare' },
        { name: '菊草葉', level: 'rare' },
        { name: '妙蛙草', level: 'rare' },
        { name: '胖可丁', level: 'rare' },
        { name: '火狐狸', level: 'rare' },
        { name: '迷唇娃', level: 'rare' },
        { name: '青綿鳥', level: 'rare' },
        { name: '藤藤蛇', level: 'rare' },
        { name: '尼多力諾', level: 'rare' },
        { name: '哎呀球菇', level: 'rare' },
        { name: '妙蛙種子', level: 'rare' },
        { name: '阿羅拉臭泥', level: 'rare' },
        { name: '布魯', level: 'normal' },
        { name: '皮丘', level: 'normal' },
        { name: '凱西', level: 'normal' },
        { name: '伊布', level: 'normal' },
        { name: '懶人獺', level: 'normal' },
        { name: '跳跳豬', level: 'normal' },
        { name: '皮寶寶', level: 'normal' },
        { name: '小果然', level: 'normal' },
    ],
    森林: [
        { name: '夢幻', level: 'beyond' },
        { name: '水君', level: 'beyond' },
        { name: '急凍鳥', level: 'beyond' },
        { name: '雷吉艾斯', level: 'beyond' },
        { name: '呆呆王', level: 'beyond' },
        { name: '刺龍王', level: 'legend' },
        { name: '暴鯉龍', level: 'legend' },
        { name: '路卡利歐', level: 'legend' },
        { name: '拉普拉斯', level: 'legend' },
        { name: '毒刺水母', level: 'legend' },
        { name: '堅盾劍怪.盾牌型態', level: 'legend' },
        { name: '壺壺', level: 'epic' },
        { name: '雷丘', level: 'epic' },
        { name: '電燈怪', level: 'epic' },
        { name: '吞食獸', level: 'epic' },
        { name: '櫻花魚', level: 'epic' },
        { name: '海刺龍', level: 'epic' },
        { name: '瑪力露麗', level: 'epic' },
        { name: '多刺菊石獸', level: 'epic' },
        { name: '沼王', level: 'rare' },
        { name: '鬼斯', level: 'rare' },
        { name: '利歐路', level: 'rare' },
        { name: '燃燒蟲', level: 'rare' },
        { name: '蚊香君', level: 'rare' },
        { name: '水水獺', level: 'rare' },
        { name: '巴大蝶', level: 'rare' },
        { name: '大針鋒', level: 'rare' },
        { name: '傑尼龜', level: 'rare' },
        { name: '海星星', level: 'rare' },
        { name: '皮卡丘', level: 'rare' },
        { name: '可達鴨', level: 'rare' },
        { name: '墨海馬', level: 'rare' },
        { name: '化石盔', level: 'rare' },
        { name: '太古羽蟲', level: 'rare' },
        { name: '呱呱泡蛙', level: 'rare' },
        { name: '露力麗', level: 'normal' },
        { name: '鯉魚王', level: 'normal' },
        { name: '呆呆獸', level: 'normal' },
        { name: '燈籠魚', level: 'normal' },
        { name: '盾甲繭', level: 'normal' },
        { name: '醜醜魚', level: 'normal' },
        { name: '蘑蘑菇', level: 'normal' },
        { name: '長翅鷗', level: 'normal' },
        { name: '蚊香蝌蚪', level: 'normal' },
    ],
    岩石: [
        { name: '雷公', level: 'beyond' },
        { name: '炎帝', level: 'beyond' },
        { name: '雷吉洛克', level: 'beyond' },
        { name: '代歐奇希斯', level: 'beyond' },
        { name: '河馬獸', level: 'legend' },
        { name: '大鋼蛇', level: 'legend' },
        { name: '冰鬼護', level: 'legend' },
        { name: '卡比獸', level: 'legend' },
        { name: '幸福蛋', level: 'legend' },
        { name: '多邊獸Z', level: 'legend' },
        { name: '始祖大鳥', level: 'legend' },
        { name: '怪力', level: 'epic' },
        { name: '狃拉', level: 'epic' },
        { name: '盔甲鳥', level: 'epic' },
        { name: '長毛豬', level: 'epic' },
        { name: '阿勃梭魯', level: 'epic' },
        { name: '雙彈瓦斯', level: 'epic' },
        { name: '夢歌仙人掌', level: 'epic' },
        { name: '阿羅拉隆隆岩', level: 'epic' },
        { name: '豪力', level: 'rare' },
        { name: '戰舞郎', level: 'rare' },
        { name: '大嘴娃', level: 'rare' },
        { name: '暖暖豬', level: 'rare' },
        { name: '小山豬', level: 'rare' },
        { name: '戴魯比', level: 'rare' },
        { name: '小小象', level: 'rare' },
        { name: '勾魂眼', level: 'rare' },
        { name: '恰雷姆', level: 'rare' },
        { name: '電擊怪', level: 'rare' },
        { name: '大岩蛇', level: 'rare' },
        { name: '哈力栗', level: 'rare' },
        { name: '嘎啦嘎拉', level: 'rare' },
        { name: '三合一磁怪', level: 'rare' },
        { name: '超音波幼蟲', level: 'rare' },
        { name: '阿羅拉隆隆石', level: 'rare' },
        { name: '阿羅拉穿山王', level: 'rare' },
        { name: '鐵啞鈴', level: 'normal' },
        { name: '寶貝龍', level: 'normal' },
        { name: '瑪沙那', level: 'normal' },
        { name: '超音蝠', level: 'normal' },
        { name: '可哥多拉', level: 'normal' },
        { name: '阿羅拉地鼠', level: 'normal' },
        { name: '阿羅拉小拳石', level: 'normal' },
        { name: '阿羅拉穿山鼠', level: 'normal' },
    ],
}
const searchText = ref('')
const filterDistribution = computed(() => {
    if (searchText.value == '') return pokeDistribution
    else
        return Object.fromEntries(
            Object.entries(pokeDistribution)
                .map(([key, value]) => {
                    return [
                        key,
                        value.filter((poke) =>
                            poke.name.includes(searchText.value)
                        ),
                    ]
                })
                .filter(([area, value]) => value.length)
        )
})
</script>

<template>
    <main>
        <div class="page-title">狩獵場精靈分布表</div>
        <div class="note">
            <ul>
                <li>狩獵場可使用30個狩獵球捕捉精靈，用完就結束了</li>
                <li>丟誘餌防止逃跑、但也會降低捕獲率</li>
                <li>丟泥巴則容易捉到，但也會提高逃跑機率</li>
            </ul>
        </div>
        搜尋: <input type="text" v-model="searchText" />
        <div v-for="(pokes, area) in filterDistribution" :key="area">
            <div class="area">
                <span>{{ area }}</span>
            </div>
            <div class="poke-list">
                <div v-for="poke in pokes" :key="poke.name" :class="poke.level">
                    {{ poke.name }}
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
.beyond {
    border: 3px solid transparent;
    border-radius: 8px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, white, white),
        linear-gradient(
            135deg,
            #3632ff 0%,
            #3eff30 33%,
            #ffff00 66%,
            #ff5900 100%
        );
}
.legend {
    border: 3px solid #ffff00;
    border-radius: 8px;
    background: white;
}
.epic {
    border: 3px solid rgb(192, 0, 192);
    border-radius: 8px;
    background: white;
}
.rare {
    border: 3px solid rgb(46, 57, 255);
    border-radius: 8px;
    background: white;
}
.normal {
    border: 3px solid rgb(190, 190, 190);
    border-radius: 8px;
    background: white;
}
.note {
    padding: 8px;
    border: 1px solid gray;
    background: pink;
    border-radius: 8px;
}
.page-title {
    border-left: 8px solid rgb(255, 122, 60);
    padding-left: 8px;
    font-weight: 700;
    font-size: 16px;
    margin: 8px 0px;
}
.poke-list {
    display: flex;
    flex-wrap: wrap;
    background: #dbffdba4;
    padding: 8px;
    border-radius: 8px;
}
.poke-list > div {
    padding: 4px;
    margin: 4px;
    flex-grow: 1;
    text-align: center;
    max-width: 160px;
}
.area {
    margin: 8px 0px;
}
.area span {
    border-left: 4px solid green;
    border-right: 4px solid green;
    padding: 0px 8px;
}
</style>
