<template>
  <div id="container"></div>
</template>

<script>
export default {
  name: 'device-count',
  title: '终端统计',
  mounted() {
    this.$root.hcharts.chart('container', {
      chart: {
        type: 'column',
        margin: [50, 50, 100, 80],
      },
      title: {
        text: '终端统计',
      },
      subtitle: {
        text: '各手机型号登录用户数',
      },
      xAxis: {
        categories: ['IPhone 5s', 'MX4', 'IPhone 4s', 'MX3', 'HTC M8', 'HTC Desire 610', 'MI 4', 'MI 3'],
        labels: {
          align: 'center',
        },
      },
      yAxis: {
        min: 0,
        max: 300,
        title: {
          text: null,
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      credits: { enabled: false },
      series: [{
        data: [{
          color: '#35b3ed',
          y: 150,
        }, {
          color: '#1dcd00',
          y: 180,
        }, {
          color: '#ffb518',
          y: 200,
        }, {
          color: '#f5326e',
          y: 230,
        }, {
          color: '#06dd8f',
          y: 210,
        }, {
          color: '#ff5d3c',
          y: 229,
        }, {
          color: '#ff7d01',
          y: 250,
        }, {
          color: '#febe04',
          y: 250,
        }],
        dataLabels: {
          enabled: true,
          color: '#4472a7',
          align: 'center',
        },
      }],
    });
  },
};
</script>
