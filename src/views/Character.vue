<script setup>
import { computed, ref } from '@vue/runtime-core'
import { RouterLink, RouterView } from 'vue-router'
//     `特攻(${board.contact})`,
// `特防(${board.defence})`,
// `速度(${board.speed})`,
// `防禦(${board.block})`,
// `攻擊(${board.attack})`,

const table = {
    大胆: { attack: '-', block: '+' },
    乐天: { defence: '-', block: '+' },
    悠闲: { speed: '-', block: '+' },
    淘气: { contact: '-', block: '+' },
    胆小: { speed: '+', attack: '-' },
    急躁: { speed: '+', block: '-' },
    天真: { speed: '+', defence: '-' },
    爽朗: { speed: '+', contact: '-' },
    温和: { defence: '+', attack: '-' },
    温顺: { defence: '+', block: '-' },
    慎重: { defence: '+', contact: '-' },
    自大: { defence: '+', speed: '-' },
    马虎: { contact: '+', defence: '-' },
    慢吞吞: { contact: '+', block: '-' },
    内敛: { contact: '+', attack: '-' },
    冷静: { contact: '+', speed: '-' },
    固执: { attack: '+', contact: '-' },
    怕寂寞: { attack: '+', block: '-' },
    顽皮: { attack: '+', defence: '-' },
    勇敢: { attack: '+', speed: '-' },
    勤奋: {},
    浮躁: {},
    坦率: {},
    害羞: {},
    认真: {},
}
const searchText = ref('')
const filterTable = computed(() => {
    if (searchText.value == '') return table
    else
        return Object.fromEntries(
            Object.entries(table)
                .map(([key, value]) => {
                    return [
                        key,
                        value.filter((question) =>
                            question.question.includes(searchText.value)
                        ),
                    ]
                })
                .filter(([key, value]) => value.length)
        )
})
</script>

<template>
    <main>
        <div class="page-title">性格列表</div>
        <table>
            <tbody>
                <tr v-for="(item, key) in table" :key="key">
                    <td>{{ key }}</td>
                    <td>
                        <div
                            :class="{
                                'text-red': item.attack == '-',
                                'text-green': item.attack == '+',
                            }"
                        >
                            {{ item.attack }}
                        </div>
                    </td>
                    <td>
                        <div>{{ item.block }}</div>
                    </td>
                    <td>
                        <div>{{ item.contact }}</div>
                    </td>
                    <td>
                        <div>{{ item.defence }}</div>
                    </td>
                    <td>
                        <div>{{ item.speed }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>
<style scoped>
table {
    font-size: 14px;
    border-collapse: collapse;
}
table tr {
    border-bottom: 1px rgb(177, 177, 177) solid;
}
td {
    padding: 4px;
}
.text-red {
    margin: 8px 0px;
    font-size: 16px;
    color: red;
}
.text-green {
    margin: 8px 0px;
    font-size: 16px;
    color: green;
}
.page-title {
    border-left: 8px solid rgb(83, 60, 255);
    padding-left: 8px;
    font-weight: 700;
    font-size: 16px;
    margin: 8px 0px;
}
</style>
