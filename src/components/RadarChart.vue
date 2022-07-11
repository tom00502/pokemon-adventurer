<script setup>
import { Radar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    RadialLinearScale,
    LineElement,
} from 'chart.js'
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    RadialLinearScale,
    LineElement
)
defineProps({
    chartData: {
        type: Object,
        required: true,
    },
})
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            suggestedMin: 0,
            suggestedMax: 20,
            pointLabels: {
                font: {
                    size: 20,
                },
            },
        },
    },
}
</script>

<template>
    <Radar :chartData="chartData" :chartOptions="chartOptions" />
</template>
