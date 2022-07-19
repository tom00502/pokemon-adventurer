<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref } from '@vue/runtime-core'
const pokeDistribution = {
    GEN1超越之笛: [
        { name: '急凍鳥', level: 'beyond' },
        { name: '閃電鳥', level: 'beyond' },
        { name: '火焰鳥', level: 'beyond' },
    ],
    GEN1傳說之笛: [
        { name: '蚊香泳士', level: 'legend' },
        { name: '毒刺水母', level: 'legend' },
        { name: '刺甲貝', level: 'legend' },
        { name: '寶石海星', level: 'legend' },
        { name: '拉普拉斯', level: 'legend' },
    ],
    GEN2傳說之笛: [
        { name: '叉字蝠', level: 'legend' },
        { name: '刺龍王', level: 'legend' },
        { name: '電龍', level: 'legend' },
        { name: '圈圈熊', level: 'legend' },
        { name: '大奶罐', level: 'legend' },
    ],
    GEN3傳說之笛: [
        { name: '吼鯨王', level: 'legend' },
        { name: '七夕青鳥', level: 'legend' },
        { name: '念力土偶', level: 'legend' },
        { name: '搖籃百合', level: 'legend' },
        { name: '太古盔甲', level: 'legend' },
        { name: '詛咒娃娃', level: 'legend' },
        { name: '帝牙海獅', level: 'legend' },
    ],
    GEN1史詩之笛: [
        { name: '大比鳥', level: 'epic' },
        { name: '雷丘', level: 'epic' },
        { name: '尼多後', level: 'epic' },
        { name: '尼多王', level: 'epic' },
        { name: '皮可西', level: 'epic' },
        { name: '九尾', level: 'epic' },
        { name: '霸王花', level: 'epic' },
        { name: '哥達鴨', level: 'epic' },
        { name: '卡蒂狗', level: 'epic' },
        { name: '怪力', level: 'epic' },
        { name: '大食花', level: 'epic' },
        { name: '隆隆岩', level: 'epic' },
        { name: '烈焰馬', level: 'epic' },
        { name: '呆殼獸', level: 'epic' },
        { name: '臭臭泥', level: 'epic' },
        { name: '鬼斯通', level: 'epic' },
        { name: '頑皮雷彈', level: 'epic' },
        { name: '雙彈瓦斯', level: 'epic' },
        { name: '鑽角犀獸', level: 'epic' },
        { name: '海刺龍', level: 'epic' },
        { name: '迷唇姐', level: 'epic' },
        { name: '電擊獸', level: 'epic' },
        { name: '鴨嘴火獸', level: 'epic' },
        { name: '肯泰羅', level: 'epic' },
        { name: '百變怪', level: 'epic' },
        { name: '多刺菊石獸', level: 'epic' },
        { name: '鐮刀盔', level: 'epic' },
    ],
    GEN2史詩之笛: [
        { name: '美麗花', level: 'epic' },
        { name: '貓頭夜鷹', level: 'epic' },
        { name: '電燈怪', level: 'epic' },
        { name: '天然鳥', level: 'epic' },
        { name: '瑪力露麗', level: 'epic' },
        { name: '毽子棉', level: 'epic' },
        { name: '麒麟奇', level: 'epic' },
        { name: '佛烈托斯', level: 'epic' },
        { name: '布魯皇', level: 'epic' },
        { name: '千針魚', level: 'epic' },
        { name: '壺壺', level: 'epic' },
        { name: '紐拉', level: 'epic' },
        { name: '長毛豬', level: 'epic' },
        { name: '章魚桶', level: 'epic' },
        { name: '巨翅飛魚', level: 'epic' },
        { name: '盔甲鳥', level: 'epic' },
        { name: '驚角鹿', level: 'epic' },
    ],
    GEN3史詩之笛: [
        { name: '樂天河童', level: 'epic' },
        { name: '狡猾天狗', level: 'epic' },
        { name: '大王燕', level: 'epic' },
        { name: '爆音怪', level: 'epic' },
        { name: '鐵掌力士', level: 'epic' },
        { name: '雷電獸', level: 'epic' },
        { name: '吞食獸', level: 'epic' },
        { name: '巨牙鯊', level: 'epic' },
        { name: '噴火駝', level: 'epic' },
        { name: '煤炭龜', level: 'epic' },
        { name: '噗噗豬', level: 'epic' },
        { name: '夢歌仙人掌', level: 'epic' },
        { name: '貓又斬', level: 'epic' },
        { name: '月石', level: 'epic' },
        { name: '太陽岩', level: 'epic' },
        { name: '鯰魚王', level: 'epic' },
        { name: '鐵螯龍蝦', level: 'epic' },
        { name: '徬徨夜靈', level: 'epic' },
        { name: '風鈴鈴', level: 'epic' },
        { name: '獵斑魚', level: 'epic' },
        { name: '櫻花魚', level: 'epic' },
        { name: '古空棘魚', level: 'epic' },
        { name: '熱帶龍', level: 'epic' },
    ],
    GEN1稀有之笛: [
        { name: '八大蝶', level: 'rare' },
        { name: '大針鋒', level: 'rare' },
        { name: '比比鳥', level: 'rare' },
        { name: '拉達', level: 'rare' },
        { name: '大嘴雀', level: 'rare' },
        { name: '阿柏怪', level: 'rare' },
        { name: '皮卡丘', level: 'rare' },
        { name: '穿山王', level: 'rare' },
        { name: '尼多娜', level: 'rare' },
        { name: '尼多力諾', level: 'rare' },
        { name: '皮皮', level: 'rare' },
        { name: '胖可丁', level: 'rare' },
        { name: '大嘴蝠', level: 'rare' },
        { name: '臭臭花', level: 'rare' },
        { name: '派拉斯特', level: 'rare' },
        { name: '摩魯蛾', level: 'rare' },
        { name: '三地鼠', level: 'rare' },
        { name: '貓老大', level: 'rare' },
        { name: '可達鴨', level: 'rare' },
        { name: '火暴猴', level: 'rare' },
        { name: '蚊香君', level: 'rare' },
        { name: '勇基拉', level: 'rare' },
        { name: '豪力', level: 'rare' },
        { name: '口呆花', level: 'rare' },
        { name: '瑪瑙水母', level: 'rare' },
        { name: '隆隆石', level: 'rare' },
        { name: '小火馬', level: 'rare' },
        { name: '三合一磁怪', level: 'rare' },
        { name: '大蔥鴨', level: 'rare' },
        { name: '嘟嘟利', level: 'rare' },
        { name: '白海獅', level: 'rare' },
        { name: '臭泥', level: 'rare' },
        { name: '大舌貝', level: 'rare' },
        { name: '引夢魔人', level: 'rare' },
        { name: '巨鉗蟹', level: 'rare' },
        { name: '霹靂電球', level: 'rare' },
        { name: '蛋蛋', level: 'rare' },
        { name: '嘎啦嘎啦', level: 'rare' },
        { name: '飛腿郎', level: 'rare' },
        { name: '快拳郎', level: 'rare' },
        { name: '大舌頭', level: 'rare' },
        { name: '瓦斯彈', level: 'rare' },
        { name: '獨角犀牛', level: 'rare' },
        { name: '吉利蛋', level: 'rare' },
        { name: '蔓藤怪', level: 'rare' },
        { name: '墨海馬', level: 'rare' },
        { name: '金魚王', level: 'rare' },
        { name: '海星星', level: 'rare' },
        { name: '魔牆人偶', level: 'rare' },
        { name: '多邊獸', level: 'rare' },
        { name: '菊石獸', level: 'rare' },
        { name: '化石盔', level: 'rare' },
        { name: '迷你龍', level: 'rare' },
    ],
    GEN2稀有之笛: [
        { name: '戰舞郎', level: 'rare' },
        { name: '迷唇娃', level: 'rare' },
        { name: '電擊怪', level: 'rare' },
        { name: '鴨嘴寶寶', level: 'rare' },
        { name: '大尾立', level: 'rare' },
        { name: '安瓢蟲', level: 'rare' },
        { name: '阿利多斯', level: 'rare' },
        { name: '波克比', level: 'rare' },
        { name: '茸茸羊', level: 'rare' },
        { name: '瑪力露', level: 'rare' },
        { name: '樹才怪', level: 'rare' },
        { name: '毽子花', level: 'rare' },
        { name: '長尾怪手', level: 'rare' },
        { name: '向日花怪', level: 'rare' },
        { name: '蜻蜻蜓', level: 'rare' },
        { name: '沼王', level: 'rare' },
        { name: '黑暗鴨', level: 'rare' },
        { name: '夢妖', level: 'rare' },
        { name: '果然翁', level: 'rare' },
        { name: '天蠍', level: 'rare' },
        { name: '熊寶寶', level: 'rare' },
        { name: '熔岩蝸牛', level: 'rare' },
        { name: '小山豬', level: 'rare' },
        { name: '太陽珊瑚', level: 'rare' },
        { name: '戴魯比', level: 'rare' },
        { name: '小小象', level: 'rare' },
    ],
    GEN3稀有之笛: [
        { name: '甲殼龍', level: 'rare' },
        { name: '金屬怪', level: 'rare' },
        { name: '大狼犬', level: 'rare' },
        { name: '直沖熊', level: 'rare' },
        { name: '狩獵鳳蝶', level: 'rare' },
        { name: '毒粉蛾', level: 'rare' },
        { name: '蓮帽小童', level: 'rare' },
        { name: '長鼻葉', level: 'rare' },
        { name: '大嘴鷗', level: 'rare' },
        { name: '雨翅蛾', level: 'rare' },
        { name: '過動猿', level: 'rare' },
        { name: '吼爆彈', level: 'rare' },
        { name: '朝北鼻', level: 'rare' },
        { name: '優雅貓', level: 'rare' },
        { name: '勾魂眼', level: 'rare' },
        { name: '大嘴娃', level: 'rare' },
        { name: '可多拉', level: 'rare' },
        { name: '恰雷姆', level: 'rare' },
        { name: '正電拍拍', level: 'rare' },
        { name: '負電拍拍', level: 'rare' },
        { name: '電螢蟲', level: 'rare' },
        { name: '甜甜螢', level: 'rare' },
        { name: '毒薔葳', level: 'rare' },
        { name: '吼吼鯨', level: 'rare' },
        { name: '晃晃斑', level: 'rare' },
        { name: '超音波幼蟲', level: 'rare' },
        { name: '刺球仙人掌', level: 'rare' },
        { name: '青棉鳥', level: 'rare' },
        { name: '觸手百合', level: 'rare' },
        { name: '太古羽蟲', level: 'rare' },
        { name: '飄浮泡泡', level: 'rare' },
        { name: '變隱龍', level: 'rare' },
        { name: '海魔師', level: 'rare' },
        { name: '珍珠貝', level: 'rare' },
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
        <div class="page-title">召喚笛明細</div>
        <div class="note">
            <ul>
                <li>解每日田野調查任務或日常寶箱有機會獲得召喚笛</li>
                <li>召喚的精靈會逃走</li>
                <li>我有的笛子才有放^^'</li>
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
    border: 3px solid;
    border-image: linear-gradient(
            135deg,
            #3632ff 0%,
            #3eff30 33%,
            #ffff00 66%,
            #ff5900 100%
        )
        1;
    padding: 0.25rem;
    clip-path: inset(0 round 4px);
}
.legend {
    border: 3px solid #ffff00;
    border-radius: 4px;
    /* background: rgb(255, 255, 150); */
    /* background: linear-gradient(to right, #feffdb 5%, #f8ff36e1 100%);
    border-left: 7px solid yellow;
    border-right: 7px solid yellow; */
}
.epic {
    border: 3px solid rgb(192, 0, 192);
    border-radius: 4px;
}
.rare {
    border: 3px solid rgb(46, 57, 255);
    border-radius: 4px;
}
.note {
    padding: 8px;
    border: 1px solid gray;
    background: pink;
    border-radius: 8px;
}
.page-title {
    border-left: 8px solid rgb(60, 242, 255);
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
    background: white;
    flex-grow: 1;
    text-align: center;
    max-width: 100px;
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
