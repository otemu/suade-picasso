<template>
  <div>
    <h1>Welcome to Dashboard</h1>
    <div class="wrapper">
      <PieChart />
      <BarChart />
    </div>
    <ChartEdit />
  </div>
</template>

<script>
import PieChart from '@/components/charts/PieChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import ChartEdit from '@/components/charts/ChartEdit.vue';

export default {
  name: 'Dashboard',
  components: {
    PieChart,
    BarChart,
    ChartEdit,
  },
};
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    @media only screen and (max-width: 768px) {
      display: block;
    }
  }

</style>
