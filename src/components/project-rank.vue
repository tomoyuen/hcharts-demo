<template>
  <div id="container"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'project-rank',
  title: '项目排行',
  mounted() {
    Highcharts.chart('container', {
      chart: {
        type: 'column',
        margin: [50, 50, 100, 80],
      },
      title: {
        text: '项目排行',
      },
      subtitle: {
        text: '项目登录用户数排行',
      },
      xAxis: {
        categories: ['广州大学', '重庆工商', '山东大学', '广东女子学院', '潍坊医学院', '潍坊职业学院', '山东交通学院', '河南财经', '广东商贸'],
        labels: {
          rotation: -45,
          align: 'right',
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
          },
        },
      },
      yAxis: {
        min: 0,
        max: 30000,
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
      series: [
        {
          name: 'Population',
          data: [{
            color: '#35b3ed',
            y: 23400,
          }, {
            color: '#1dcd00',
            y: 22200,
          }, {
            color: '#ffb518',
            y: 21000,
          }, {
            color: '#f5326e',
            y: 19500,
          }, {
            color: '#06dd8f',
            y: 18900,
          }, {
            color: '#ff5d3c',
            y: 17845,
          }, {
            color: '#ff7d01',
            y: 17525,
          }, {
            color: '#febe04',
            y: 16987,
          }, {
            color: '#bd6aff',
            y: 16500,
          }],
          dataLabels: {
            enabled: true,
            color: '#4472a7',
            align: 'center',
            x: 4,
          },
        },
      ],
    });
  },
};
</script>
