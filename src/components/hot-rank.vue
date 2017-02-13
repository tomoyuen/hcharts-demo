<template>
  <div id="container"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'hot-rank',
  title: '热度排行',
  mounted() {
    Highcharts.chart('container', {
      chart: {
        type: 'column',
        margin: [50, 50, 100, 80],
      },
      title: {
        text: '热度排行',
      },
      subtitle: {
        text: '项目登录用户数排行',
      },
      xAxis: {
        categories: ['消息', '发现', '个人设置', '系统消息', '消费报告', '学习报告', '阅读报告', '校情报告', '我的课表', '我的考试', '我的成绩'],
      },
      yAxis: {
        min: 0,
        max: 2000,
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
          y: 1000,
        }, {
          color: '#1dcd00',
          y: 1200,
        }, {
          color: '#ffb518',
          y: 985,
        }, {
          color: '#f5326e',
          y: 1500,
        }, {
          color: '#06dd8f',
          y: 1550,
        }, {
          color: '#ff5d3c',
          y: 1400,
        }, {
          color: '#ff7d01',
          y: 1320,
        }, {
          color: '#febe04',
          y: 955,
        }, {
          color: '#bd6aff',
          y: 1420,
        }, {
          color: '#2780dc',
          y: 888,
        }, {
          color: '#e83bfd',
          y: 875,
        }],
        dataLabels: {
          enabled: true,
          color: '#4472a7',
          align: 'center',
          x: 4,
        },
      }],
    });
  },
};
</script>
