<script setup>
import { ref, reactive, computed } from 'vue'
import RadarChartVue from '@/components/RadarChart.vue'
class gemCount {
    constructor() {
        this.low = 0
        this.normal = 0
        this.perfect = 0
    }
    get total() {
        return this.low + this.normal + this.perfect
    }
}
const chartData = computed(() => {
    return {
        labels: ['血量', '特攻', '特防', '速度', '防禦', '攻擊'],
        datasets: [
            {
                label: '轉生石板成長檔',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [
                    board.hitPoint,
                    board.contact,
                    board.defence,
                    board.speed,
                    board.block,
                    board.attack,
                ],
                fill: 'origin',
            },
        ],
    }
})
const board = reactive({
    hitPoint: 0,
    attack: 0,
    block: 0,
    contact: 0,
    defence: 0,
    speed: 0,
})
const steps = ref([])
const nowSelect = reactive({ type: 'hitPoint', quality: 'perfect' })
const step = reactive({ count: 0, type: '', quality: '', overflow: 0 })
const effect = {
    hitPoint: 'defence',
    defence: 'block',
    block: 'hitPoint',
    contact: 'attack',
    attack: 'speed',
    speed: 'contact',
}
const names = {
    hitPoint: '血量',
    contact: '特攻',
    defence: '特防',
    attack: '物攻',
    block: '物防',
    speed: '速度',
}
const qualityNames = {
    low: '劣質',
    normal: '普通',
    perfect: '極好',
}
const useGem = (type = nowSelect.type, quality = nowSelect.quality) => {
    if (quality === 'low') {
        board[type] += 1
        board[effect[type]] -= 1
    }
    if (quality === 'normal') {
        board[type] += 2
        board[effect[type]] -= 1
    }
    if (quality === 'perfect') {
        board[type] += 2
    }
    if (board[type] > 20) {
        board[type] = 20
    }
    if (board[effect[type]] < 0) {
        board[effect[type]] = 0
        step.overflow++
    }
    if (step.type === type && step.quality === quality) {
        step.count++
    } else {
        if (step.count !== 0) {
            const { count, type, quality } = step
            steps.value.push({ count, type, quality })
        }
        step.type = type
        step.count = 1
        step.quality = quality
        step.overflow = 0
    }
}

const statistics = computed(() => {
    const gems = {
        hitPoint: new gemCount(),
        defence: new gemCount(),
        block: new gemCount(),
        contact: new gemCount(),
        attack: new gemCount(),
        speed: new gemCount(),
    }
    let total = 0
    steps.value.forEach((step) => {
        total += step.count
        gems[step.type][step.quality] += step.count
    })
    total += step.count
    if (step.count) {
        gems[step.type][step.quality] += step.count
    }
    return {
        total,
        gems: Object.fromEntries(
            Object.entries(gems).filter(([key, value]) => value.total)
        ),
    }
})
const gemLabel = (gem, type) => {
    let label = `${names[type]}寶石:(${gem.total}) `
    if (gem.perfect) {
        label += `極好(${gem.perfect}) `
    }
    if (gem.normal) {
        label += `普通(${gem.normal}) `
    }
    if (gem.low) {
        label += `劣質(${gem.low}) `
    }
    return label
}
const clear = () => {
    board.hitPoint = 0
    board.attack = 0
    board.block = 0
    board.contact = 0
    board.defence = 0
    board.speed = 0
    steps.value = []
    step.count = 0
}
const undo = () => {
    if (step.count == 0) {
        return
    }
    step.count--
    const { quality, type } = step
    if (quality === 'low') {
        board[type] -= 1
        if (step.overflow == 0) {
            board[effect[type]] += 1
        } else {
            step.overflow--
        }
    }
    if (quality === 'normal') {
        board[type] -= 2
        if (step.overflow == 0) {
            board[effect[type]] += 1
        } else {
            step.overflow--
        }
    }
    if (quality === 'perfect') {
        board[type] -= 2
    }
    if (step.count == 0) {
        if (steps.value.length == 0) {
            return
        }
        const { count, quality, type, overflow } = steps.value.pop()
        step.count = count
        step.quality = quality
        step.type = type
        step.overflow = overflow
    }
}
const setQuality = (quality) => {
    console.log(quality)
    nowSelect.quality = quality
    console.log(nowSelect.quality)
}
const setType = (type) => {
    nowSelect.type = type
}
const genDiscript = {
    hitPoint: {
        low: '血量+1, 特防-1',
        normal: '血量+2, 特防-1',
        perfect: '血量+2~4',
    },
    defence: {
        low: '特防+1, 物防-1',
        normal: '特防+2, 物防-1',
        perfect: '特防+2~4',
    },
    block: {
        low: '物防+1, 血量-1',
        normal: '物防+2, 血量-1',
        perfect: '物防+2~4',
    },
    contact: {
        low: '特攻+1, 物攻-1',
        normal: '特攻+2, 物攻-1',
        perfect: '特攻+2~4',
    },
    attack: {
        low: '物攻+1, 速度-1',
        normal: '物攻+2, 速度-1',
        perfect: '物攻+2~4',
    },
    speed: {
        low: '速度+1, 特攻-1',
        normal: '速度+2, 特攻-1',
        perfect: '速度+2~4',
    },
}
const discript = computed(() => {
    return genDiscript[nowSelect.type][nowSelect.quality]
})
</script>
<template>
    <div>轉生模擬器</div>
    <div>
        <RadarChartVue :chartData="chartData" />
    </div>
    <div class="board-value">
        <div v-for="(value, type) in board" :key="type">
            {{ `${names[type]}(${value})` }}
        </div>
    </div>
    <div>
        <div class="use-gen-borad">
            <div class="select-quality">
                <div class="quality-select">
                    <div
                        @click="setQuality('perfect')"
                        :class="{ active: 'perfect' === nowSelect.quality }"
                    >
                        極好<br />寶石
                    </div>
                    <div
                        @click="setQuality('normal')"
                        :class="{ active: 'normal' === nowSelect.quality }"
                    >
                        普通<br />寶石
                    </div>
                    <div
                        @click="setQuality('low')"
                        :class="{ active: 'low' === nowSelect.quality }"
                    >
                        劣質<br />寶石
                    </div>
                </div>
                <div>{{ discript }}</div>
                <button @click="useGem()">鑲嵌</button>
            </div>
            <div class="select-type">
                <div
                    v-for="(name, type) in names"
                    :key="name"
                    @click="setType(type)"
                    :class="{ active: type === nowSelect.type }"
                >
                    {{ name }}寶石
                </div>
            </div>
        </div>
        <button @click="undo">上一步</button>
        <button @click="clear">全部重置</button>
    </div>
    <div class="statistics-board">
        <div>
            <div>操作步驟</div>
            <div v-for="(step, i) in steps" :key="i">
                {{ i + 1 }}. 使用了{{ step.count }}個{{ names[step.type]
                }}{{ qualityNames[step.quality] }}寶石
            </div>
            <div v-if="step.count">
                {{ steps.length + 1 }}. 使用了{{ step.count }}個{{
                    names[step.type]
                }}{{ qualityNames[step.quality] }}寶石
            </div>
        </div>
        <div>
            <div>統計</div>
            <div>總使用寶石數:{{ statistics.total }}</div>
            <div v-for="(gem, type) in statistics.gems" :key="type">
                {{ gemLabel(gem, type) }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
}
button {
    margin: 8px;
    padding: 4px;
}
.statistics-board > :nth-child(2) {
    margin-top: 16px;
}
@media (min-width: 1024px) {
    .statistics-board {
        display: flex;
        gap: 8px;
        justify-content: space-between;
    }
}
.board-value {
    display: flex;
    justify-content: space-between;
}
.quality-select {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}
.quality-select > div {
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    cursor: pointer;
}
.quality-select > div.active {
    border: 3px solid orange;
}
.select-quality {
    display: flex;
    flex-direction: column;
    padding: 8px;
}
.select-quality > :nth-child(2) {
    margin-top: auto;
    text-align: center;
}
.select-quality > :nth-child(3) {
    box-shadow: 0px 1px 0px 0px #fff6af;
    background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
    background-color: #ffec64;
    border-radius: 6px;
    border: 1px solid #ffaa22;
    display: inline-block;
    cursor: pointer;
    color: #333333;
}
.select-quality > :nth-child(3):hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
}
.select-quality > :nth-child(3):active {
    position: relative;
    top: 1px;
}
.select-type > div {
    border: 1px solid gray;
    background: rgb(184, 184, 184);
    padding: 4px;
    cursor: pointer;
}
.select-type > div.active {
    border-left: 0px;
    background: rgb(160, 160, 255);
}
.use-gen-borad {
    display: flex;
    justify-content: space-between;
    background: rgb(160, 160, 255);
    max-width: 500px;
}
</style>
