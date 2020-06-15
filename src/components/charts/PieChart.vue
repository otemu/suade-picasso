<template>
  <div class="container">
    <h3>Pie Chart</h3>
    <div class="c-pie" ref="pie"></div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

export default {
  mounted() {
    this.renderPieChart();
  },
  watch: {
    // eslint-disable-next-line
    '$store.state.chartData.updated': function () {
      this.renderPieChart();
    },
  },
  methods: {
    renderPieChart() {
      if (this.chart) {
        this.chart.dispose();
      }
      // Create chart instance
      const chart = am4core.create(this.$refs.pie, am4charts.PieChart);

      // Add data
      chart.data = this.$store.state.chartData.data;

      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'age';
      pieSeries.dataFields.category = 'name';

      // Disable ticks and labels
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;

      this.chart = chart;

      // Add a legend
      chart.legend = new am4charts.Legend();
    },
  },
  beforeDestroy: function () {
    this.chart.dispose();
  }
};
</script>

<style lang="scss">
  .container {
    width: 50%;

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .c-pie {
    height: 500px;
  }
</style>
