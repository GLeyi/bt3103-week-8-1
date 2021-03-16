<template>
  <div class="chart">
    <h1>Line Chart</h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./CallAPI.js";
export default {
  components: {
    Chart
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 50px;
  color: white;
  background-color: orange;
  padding: 20px;
}
</style>
