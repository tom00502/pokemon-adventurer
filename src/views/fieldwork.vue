<script setup>
import { RouterLink, RouterView } from 'vue-router'
const table = [
    {
        work: '提升1次毒和飛行系精靈的品階',
        award: '胡地之笛、金幣28800',
        level: 'legend',
    },
    {
        work: '提升1次蟲和飛行系精靈的品階',
        award: '胡地之笛、金幣28800',
        level: 'legend',
    },
    {
        work: '提升1次草和超能力系精靈的品階',
        award: '胡地之笛、金幣28800',
        level: 'legend',
        checkWord: false,
    },
    {
        work: '提升1次一般和飛行系精靈的品階',
        award: '胡地之笛、金幣28800',
        level: 'legend',
    },
    {
        work: '提升1次草和毒系精靈的品階',
        award: '胡地之笛、金幣28800',
        level: 'legend',
    },
    {
        work: '提升1次岩石和地面系精靈的品階',
        award: '胡地之笛、金幣28800',
        level: 'legend',
    },
    {
        work: '提升1次岩石和水系精靈的品階',
        award: '胡地之笛、金幣28800',
        level: 'legend',
    },
    {
        work: '提升1次蟲和毒系精靈的品階',
        award: '大岩蛇之笛、金幣28800',
        level: 'legend',
    },
    {
        work: '提升1次一般和妖精系精靈的品階',
        award: '大岩蛇之笛、金幣28800',
        level: 'legend',
    },
    {
        work: '提升1次電和鋼系精靈的品階',
        award: '大岩蛇之笛、金幣28800',
        level: 'legend',
    },
    {
        work: '使用1次大師球捕捉精靈',
        award: '50水晶',
        level: 'legend',
        checkAward: false,
    },
    {
        work: '捕捉4只岩石和水系的精靈',
        award: '波克基古之笛、金幣12000',
        level: 'epic',
    },
    {
        work: '捕捉4只毒和飛行系的精靈',
        award: '波克基古之笛、金幣12000',
        level: 'epic',
    },
    {
        work: '捕捉4只草和毒系的精靈',
        award: '波克基古之笛、金幣12000',
        level: 'epic',
    },
    {
        work: '捕捉4只蟲和毒系的精靈',
        award: '波克基古之笛、金幣12000',
        level: 'epic',
    },
    {
        work: '捕捉4只一般和妖精系的精靈',
        award: '波克基古之笛、金幣12000',
        level: 'epic',
        checkWord: false,
    },
    {
        work: '捕捉4只電和鋼系的精靈',
        award: '波克基古之笛、金幣12000',
        level: 'epic',
    },
    {
        work: '捕捉4只草和超能力系的精靈',
        award: '阿勃梭魯之笛',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '捕捉4只蟲和飛行系的精靈',
        award: '阿勃梭魯之笛',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '捕捉4只一般和飛行系的精靈',
        award: '阿勃梭魯之笛',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '捕捉4只岩石和地面系的精靈',
        award: '阿勃梭魯之笛',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '進化1次岩石和地面系的精靈',
        award: 'GEN1史詩之笛',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '進化1次草和毒系的精靈',
        award: 'GEN1史詩之笛',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '進化1次草和超能力系的精靈',
        award: 'GEN1史詩之笛',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '進化1次蟲和毒系的精靈',
        award: 'GEN1史詩之笛',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '進化1次蟲和飛行的精靈',
        award: '神奇膠囊',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '進化1次岩石和水系的精靈',
        award: '神奇膠囊',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '進化1次毒和飛行系的精靈',
        award: '神奇膠囊',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '進化12次精靈',
        award: 'GEN3史詩之笛、金幣3600',
        level: 'epic',
    },
    {
        work: '使用5次PP提升劑',
        award: '差不多娃娃之笛',
        level: 'epic',
        checkAward: false,
    },
    {
        work: '提升1次惡系精靈的品階',
        award: '大岩蛇之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '提升1次超能力系精靈的品階',
        award: 'GEN2傳說之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '提升1次火系精靈的品階',
        award: 'GEN2傳說之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '提升1次水系精靈的品階',
        award: 'GEN3史詩之笛、金幣14400',
        level: 'rare',
    },
    {
        work: '提升1次飛行系精靈的品階',
        award: 'GEN3史詩之笛、金幣14400',
        level: 'rare',
    },
    {
        work: '提升1次一般系精靈的品階',
        award: 'GEN3史詩之笛、金幣14400',
        level: 'rare',
    },
    {
        work: '提升1次龍系精靈的品階',
        award: 'GEN3史詩之笛、金幣14400',
        level: 'rare',
    },
    {
        work: '提升1次冰系精靈的品階',
        award: 'GEN3史詩之笛、金幣14400',
        level: 'rare',
    },
    {
        work: '提升1次地面系精靈的品階',
        award: '禦三家之笛、14400',
        level: 'rare',
    },
    {
        work: '提升1次妖精系精靈的品階',
        award: '禦三家之笛、14400',
        level: 'rare',
    },
    {
        work: '提升1次草系精靈的品階',
        award: '禦三家之笛、14400',
        level: 'rare',
    },
    {
        work: '提升1次幽靈系精靈的品階',
        award: '禦三家之笛、14400',
        level: 'rare',
    },
    {
        work: '提升1次格鬥系精靈的品階',
        award: 'GEN1稀有之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '擊敗8次道館館主',
        award: 'GEN3史詩之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '進化5次精靈',
        award: '金幣1500',
        level: 'rare',
    },
    {
        work: '進化8次精靈',
        award: 'GEN2傳說之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '使用1次全滿藥',
        award: '胡地之笛、28800',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '使用2次活力碎片',
        award: '胡地之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '使用2次活力塊',
        award: '差不多娃娃之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '使用2次全複藥',
        award: 'GEN1稀有之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '使用5次解凍藥',
        award: 'GEN1稀有之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '使用5次解麻藥',
        award: 'GEN1稀有之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '使用5次解眠藥',
        award: 'GEN1稀有之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '使用5次灼傷藥',
        award: 'GEN1稀有之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '使用5次解毒藥',
        award: '禦三家之笛',
        level: 'rare',
        checkAward: false,
    },
    {
        work: '捕捉50只精靈',
        award: 'GEN1稀有之笛',
        level: 'rare',
        checkAward: false,
    },
    { work: '捕捉5只惡系的精靈', award: '', level: 'great', checkAward: false },
    { work: '捕捉5只蟲系的精靈', award: '', level: 'great', checkAward: false },
    { work: '捕捉5只水系的精靈', award: '', level: 'great', checkAward: false },
    { work: '捕捉5只火系的精靈', award: '', level: 'great', checkAward: false },
    { work: '捕捉5只龍系的精靈', award: '', level: 'great', checkAward: false },
    { work: '捕捉5只鋼系的精靈', award: '', level: 'great', checkAward: false },
    {
        work: '捕捉5只格鬥系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '捕捉5只妖精系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '捕捉5只岩石系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '捕捉5只地面系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '捕捉5只幽靈系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '捕捉5只飛行系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    { work: '捕捉30只精靈', award: '', level: 'great', checkAward: false },
    { work: '進化3次冰系的精靈', award: '', level: 'great', checkAward: false },
    {
        work: '進化3次一般系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    { work: '進化3次龍系的精靈', award: '', level: 'great', checkAward: false },
    {
        work: '進化3次格鬥系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    { work: '進化3次蟲系的精靈', award: '', level: 'great', checkAward: false },
    { work: '進化3次毒系的精靈', award: '', level: 'great', checkAward: false },
    { work: '進化3次鋼系的精靈', award: '', level: 'great', checkAward: false },
    {
        work: '進化3次妖精系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    { work: '進化3次電系的精靈', award: '', level: 'great', checkAward: false },
    {
        work: '進化3次飛行系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '進化3次幽靈系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '進化3次岩石系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '進化3次地面系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次一般和飛行系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次岩石和地面系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次岩石和水系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次毒和飛行系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次蟲和飛行系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次蟲和毒系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次草和毒系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次草和超能力系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次一般和妖精系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗4次電和鋼系的精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '使用3次努力增強劑',
        award: 'GEN2傳說之笛',
        level: 'great',
        checkAward: false,
    },
    {
        work: '使用10次命中強化',
        award: '禦三家之笛',
        level: 'great',
        checkAward: false,
    },
    {
        work: '使用10次力量強化',
        award: 'GEN1稀有之笛',
        level: 'great',
        checkAward: false,
    },
    {
        work: '使用10次防禦強化',
        award: 'GEN1稀有之笛',
        level: 'great',
        checkAward: false,
    },
    {
        work: '使用10次特防強化',
        award: 'GEN3史詩之笛',
        level: 'great',
        checkAward: false,
    },
    {
        work: '使用10次要害攻擊',
        award: 'GEN2傳說之笛',
        level: 'great',
        checkAward: false,
    },
    { work: '使用10次好傷藥', award: '', level: 'great', checkAward: false },
    {
        work: '使用10次能力防守',
        award: 'GEN2傳說之笛',
        level: 'great',
        checkAward: false,
    },
    {
        work: '使用10次性格轉換蜜',
        award: 'GEN1史詩之笛',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將一般和妖精系的精靈,提升10級',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將一般和飛行系的精靈,提升10級',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將蟲和飛行系的精靈,提升10級',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將電和鋼系的精靈,提升10級',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將岩石和水系的精靈,提升10級',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將岩石和地面系的精靈,提升10級',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將草和超能力系的精靈,提升10級',
        award: '阿羅拉九尾碎片',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將草和毒系的精靈,提升10級',
        award: '阿羅拉九尾碎片',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將蟲和毒系的精靈,提升10級',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將毒和飛行系的精靈,提升10級',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '將蟲和飛行系的精靈,提升10級',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '使用50次高級求捕捉精靈',
        award: '',
        level: 'great',
        checkAward: false,
    },
    {
        work: '擊敗6次道館館主',
        award: '金幣1500',
        level: 'great',
    },
    {
        work: '將火系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將電系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將水系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將冰系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將蟲系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將草系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將地面系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將格鬥系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將超能力系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將一般系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將龍系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將鋼系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '將飛行系的精靈,提升10級',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    { work: '進化2次精靈', award: '', level: 'normal', checkAward: false },
    { work: '捕捉5只精靈', award: '', level: 'normal', checkAward: false },
    { work: '捕捉10只精靈', award: '', level: 'normal', checkAward: false },
    { work: '捕捉20只精靈', award: '', level: 'normal', checkAward: false },
    {
        work: '使用1次可達鴨噴壺',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    { work: '使用3次體力飲料', award: '', level: 'normal', checkAward: false },
    { work: '使用10次誘捕噴霧', award: '', level: 'normal', checkAward: false },
    {
        work: '使用30次神奇糖果(中)',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '使用50次神奇糖果(小)',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    { work: '擊敗2次道館館主', award: '', level: 'normal', checkAward: false },
    {
        work: '擊敗5次水系的精靈',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '擊敗5次幽靈系的精靈',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '擊敗5次一般系的精靈',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '擊敗5次電系的精靈',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '擊敗5次冰系的精靈',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '擊敗5次格鬥系的精靈',
        award: '',
        level: 'normal',
        checkAward: false,
    },
    {
        work: '使用100次精靈球捕捉精靈',
        award: '',
        level: 'normal',
        checkAward: false,
    },
]
</script>

<template>
    <main>
        <table>
            <tbody>
                <tr>
                    <td>任務</td>
                    <td>獎賞</td>
                </tr>
                <tr v-for="item in table" :key="item.work" :class="item.level">
                    <td>{{ item.work }}</td>
                    <td>
                        {{ item.award
                        }}{{ item.checkAward == false ? '.' : '' }}
                    </td>
                </tr>
            </tbody>
        </table>
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
.legend {
    background: rgb(255, 255, 150);
}
.epic {
    background: rgb(255, 150, 255);
}
.rare {
    background: rgb(157, 150, 255);
}
.great {
    background: rgb(150, 255, 164);
}
</style>
