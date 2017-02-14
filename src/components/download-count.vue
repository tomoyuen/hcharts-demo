<template>
  <div id="container"></div>
</template>

<script>
export default {
  name: 'download-count',
  title: '项目排行',
  mounted() {
    this.$root.hcharts.chart('container', {
      colors: ['#35b3ed', '#1dcd00', '#ffb518', '#f5326e', '#06dd8f', '#ff5d3c', '#ff7d01', '#febe04', '#bd6aff', '#2780dc'],
      chart: {
        type: 'column',
      },
      title: {
        text: '下载统计',
      },
      xAxis: {
        categories: ['Android', 'IOS'],
        labels: { rotation: 45 },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: (this.$root.hcharts.theme && this.$root.hcharts.theme.textColor) || 'gray',
          },
        },
      },
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        floating: true,
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
            color: (this.$root.hcharts.theme && this.$root.hcharts.theme.dataLabelsColor) || 'white',
          },
        },
      },
      credits: { enabled: false },
      series: [
        {
          name: '应用商店',
          data: [48652, 39548],
        }, {
          name: '主页',
          data: [54841, 72400],
        }, {
          name: '微信分享',
          data: [22790, 33284],
        }, {
          name: 'QQ分享',
          data: [19875, 20458],
        },
      ],
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
