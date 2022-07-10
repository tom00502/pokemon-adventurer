<script setup>
import { reactive } from 'vue'
const board = reactive({
    hitPoint: 0,
    attack: 0,
    block: 0,
    contact: 0,
    defence: 0,
    speed: 0,
})
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
    defence: '物攻',
    block: '物防',
    contact: '特攻',
    attack: '特防',
    speed: '速度',
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
}
</script>
<template>
    <div class="item">
        <div class="flex">
            <div>生命</div>
            <div>{{ board.hitPoint }}</div>
        </div>
        <div class="flex">
            <div>物功</div>
            <div>{{ board.attack }}</div>
        </div>
        <div class="flex">
            <div>物防</div>
            <div>{{ board.block }}</div>
        </div>
        <div class="flex">
            <div>特功</div>
            <div>{{ board.contact }}</div>
        </div>
        <div class="flex">
            <div>特防</div>
            <div>{{ board.defence }}</div>
        </div>
        <div class="flex">
            <div>速度</div>
            <div>{{ board.speed }}</div>
        </div>
    </div>
    <div>
        <div v-for="(name, type) in names" :key="name">
            <button @click="useGem(type, 'perfect')">
                使用{{ name }}極好寶石
            </button>
            <button @click="useGem(type, 'normal')">
                使用{{ name }}普通寶石
            </button>
            <button @click="useGem(type, 'low')">使用{{ name }}劣質寶石</button>
        </div>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
}
</style>
