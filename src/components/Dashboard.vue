<template>
    <div>
        <barchart></barchart>
        <linechart></linechart>
    </div>
</template>

<script>
import BarChart from './charts/BarChart.vue'
import LineChart from './CallAPI.vue'
export default {
    components: {
        'barchart': BarChart,
        'linechart': LineChart
    }
}
</script>

<style scoped>

</style>