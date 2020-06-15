<template>
  <div class="container">
    <h3>Bar Chart</h3>
    <div class="c-bar" ref="bar"></div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

export default {
  mounted() {
    this.renderBarChart();
  },
  watch: {
    // eslint-disable-next-line
    '$store.state.chartData.updated': function () {
      this.renderBarChart();
    },
  },
  methods: {
    renderBarChart() {
      if (this.chart) {
        this.chart.dispose();
      }
      // Create chart instance
      const chart = am4core.create(this.$refs.bar, am4charts.XYChart);

      // Add data
      chart.data = this.$store.state.chartData.data;

      // Create axes
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'name';
      categoryAxis.title.text = 'Names';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = 'Age (years)';

      // Create series
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = 'age';
      series.dataFields.categoryX = 'name';
      series.name = 'Age';
      series.tooltipText = '{name}: [bold]{valueY}[/]';

      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      this.chart = chart;
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

  .c-bar {
    height: 500px;
  }
</style>
