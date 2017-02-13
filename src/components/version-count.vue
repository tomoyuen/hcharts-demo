<template>
  <div id="container"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'device-count',
  title: '版本访问统计',
  mounted() {
    Highcharts.chart('container', {
      colors: ['#35b3ed', '#1dcd00', '#ffb518', '#f5326e', '#06dd8f', '#ff5d3c', '#ff7d01', '#febe04', '#bd6aff', '#2780dc'],
      chart: {
        type: 'column',
      },
      title: {
        text: '版本访问统计',
      },
      xAxis: {
        categories: ['2.0.1', '2.0.0', '1.0.1', '1.0.0'],
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        max: 200000,
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray',
          },
        },
      },
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        floating: true,
        x: 20,
      },
      tooltip: {
        formatter() {
          return `<b>${this.x}</b><br/>${this.series.name}: ${this.y}<br/>Total: ${this.point.stackTotal}`;
        },
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          },
        },
      },
      credits: { enabled: false },
      series: [{
        name: 'Android',
        data: [54841, 72400, 76776, 83361],
      }, {
        name: 'IPhone',
        data: [22790, 33284, 52148, 68333],
      }],
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
