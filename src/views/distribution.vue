<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, reactive, ref, onMounted } from '@vue/runtime-core'
import api from '@/libs/api'
import { useDistributionStore } from '@/stores/distribution'
const distributionStore = useDistributionStore()
// const data = reactive({ distributions: null })
onMounted(() => {
    // if (data.distributions == null) {
    //     api.getDistributed().then((res) => {
    //         data.distributions = res.data.map((area) => {
    //             const pokes = area.p.map((poke) => ({
    //                 ...(poke.f && { frequency: poke.f }),
    //                 ...pokedexStore.pokes[poke.n],
    //             }))
    //             return { name: area.a, pokes }
    //         })
    //     })
    // }
    distributionStore.getDistributions()
})
const searchText = ref('')
const filterDistribution = computed(() => {
    if (searchText.value == '') return distributionStore.distributions
    else
        return distributionStore.distributions
            .map((distribution) => {
                return {
                    ...distribution,
                    pokes: distribution.pokes.filter((poke) =>
                        poke.name.includes(searchText.value)
                    ),
                }
            })
            .filter((distribution) => distribution.pokes.length)
})
const isDark = (name) => {
    return name.includes('晚上')
}
</script>

<template>
    <main>
        <div class="page-title">野生精靈分布表</div>
        <div class="note">
            <ul>
                <li>資料建立中</li>
            </ul>
        </div>
        搜尋: <input type="text" v-model="searchText" />
        <div v-for="area in filterDistribution" :key="area.name">
            <div class="area">
                <span>{{ area.name }}</span>
            </div>
            <div class="poke-list" :class="{ dark: isDark(area.name) }">
                <div
                    v-for="poke in area.pokes"
                    :key="poke.name"
                    :class="poke.quality"
                >
                    {{ poke.name }}
                    <div class="attribute-line">
                        <div
                            v-for="attribute in poke.attribute"
                            :key="attribute"
                            :class="attribute"
                        >
                            {{ attribute }}
                        </div>
                    </div>
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
.note {
    padding: 8px;
    border: 1px solid gray;
    background: pink;
    border-radius: 8px;
}
.normal {
    border: 3px solid rgb(190, 190, 190);
    border-radius: 8px;
    background: white;
}
.page-title {
    border-left: 8px solid rgb(255, 60, 255);
    padding-left: 8px;
    font-weight: 700;
    font-size: 16px;
    margin: 8px 0px;
}
.poke-list {
    display: flex;
    flex-wrap: wrap;
    background: #8eff8e86;
    padding: 8px;
    border-radius: 8px;
}
.dark {
    background: #27792786;
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
.attribute-line {
    display: flex;
    justify-content: space-around;
    /* gap: 8px; */
}
.attribute-line > div {
    font-size: 12px;
    border-radius: 4px;
    /* padding: 0px 8px; */
    width: 48px;
}
.一般 {
    background: gray;
    color: white;
}
.草 {
    background: green;
    color: white;
}
.電 {
    background: rgb(219, 208, 83);
    color: white;
}
.水 {
    background: rgb(60, 142, 215);
    color: white;
}
.蟲 {
    background: rgb(126, 175, 100);
    color: white;
}
.火 {
    background: rgb(176, 0, 0);
    color: white;
}
.毒 {
    background: rgb(166, 68, 166);
    color: white;
}
.超能力 {
    background: rgb(220, 20, 170);
    color: white;
}
.飛行 {
    background: rgb(42, 105, 221);
    color: white;
}
</style>
