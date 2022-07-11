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
        labels: ['生命', '特攻', '特防', '速度', '防禦', '攻擊'],
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
const step = reactive({ count: 0, type: '', quality: '' })
const effect = {
    hitPoint: 'defence',
    defence: 'block',
    block: 'hitPoint',
    contact: 'attack',
    attack: 'speed',
    speed: 'contact',
}
const names = {
    hitPoint: '生命',
    defence: '特防',
    block: '物防',
    contact: '特攻',
    attack: '物攻',
    speed: '速度',
}
const qualityNames = {
    low: '劣質',
    normal: '普通',
    perfect: '極好',
}
const useGem = (type, quality) => {
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
        <div v-for="(name, type) in names" :key="name" class="buttons">
            <button @click="useGem(type, 'perfect')">{{ name }}極好寶石</button>
            <button @click="useGem(type, 'normal')">{{ name }}普通寶石</button>
            <button @click="useGem(type, 'low')">{{ name }}劣質寶石</button>
        </div>
        <button @click="clear">重新</button>
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
.statistics-board {
    display: flex;
    gap: 8px;
}
.board-value {
    display: flex;
    justify-content: space-between;
}
</style>
