<template>
    <div>
        <canvas ref="chart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { onMounted, ref } from 'vue';
import ChartData from '@/components/manage/charts/data-sales-revenue-by-month.js'

const chart = ref()

onMounted(() => {
    const exampleChart = new Chart(chart.value, ChartData);
})

</script>