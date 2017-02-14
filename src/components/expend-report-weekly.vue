<template>
  <div class="expend-status">
    <div class="content">
      <p>学校总额  <b class="data">1234</b></p>
      <p>学校总平均  <b class="data">240</b></p>
      <p>环比增长  <b class="data">10%</b></p>
    </div>
    <div id="trend-chart"></div>
    <div id="rank-chart"></div>
    <div id="average-chart"></div>
  </div>
</template>

<script>
export default {
  name: 'expend-reports-weekly',
  title: '消费报告',
  mounted() {
    this.$root.hcharts.chart('trend-chart', {
      colors: ['#0295db'],
      chart: {
        type: 'line',
      },
      title: {
        text: '学校总额一周消费变化趋势',
        align: 'left',
        margin: 60,
        style: {
          color: '#0066a4',
          fontSize: '18px',
        },
        y: 36,
        x: -10,
      },
      xAxis: {
        categories: ['一', '二', '三', '四'],
        tickLength: 0,
        minPadding: 0.1,
      },
      yAxis: {
        title: {
          text: null,
        },
        gridLineColor: '#d6d6d6',
        max: 50,
        min: 0,
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [{
        name: '消费金额',
        data: [10, 28, 24, 25],
      }],
      exporting: { enabled: false },
    });
    this.$root.hcharts.chart('rank-chart', {
      chart: { type: 'bar' },
      title: {
        text: '各学生消费总额排行',
        align: 'left',
        margin: 100,
        style: {
          color: '#0066a4',
          fontSize: '18px',
        },
        x: -10,
        y: 90,
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5', '6'],
        title: { text: null },
        tickLength: 0,
      },
      yAxis: {
        min: 0,
        title: { text: null },
        labels: {
          overflow: 'justify',
          enabled: false,
        },
        tickLength: 0,
        gridLineWidth: 0,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      legend: {
        enabled: false,
      },
      credits: { enabled: false },
      series: [{
        name: '消费总额',
        data: [{
          name: '医学院',
          color: '#f5334c',
          y: 13,
        }, {
          name: '商学院',
          color: '#27a6e0',
          y: 12,
        }, {
          name: '工程学院',
          color: '#c34dea',
          y: 11,
        }, {
          name: '信息学院',
          color: '#e8551c',
          y: 10,
        }, {
          name: '人文学院',
          color: '#ffb800',
          y: 8,
        }, {
          name: '艺术学院',
          color: '#009641',
          y: 7,
        }],
      }],
    });
    this.$root.hcharts.chart('average-chart', {
      chart: {
        type: 'column',
      },
      title: {
        text: '各学院的学生消费人均排行',
        align: 'left',
        margin: 100,
        style: {
          color: '#0066a4',
          fontSize: '18px',
        },
        x: -10,
        y: 90,
      },
      xAxis: {
        categories: ['50', '60', '70', '80', '90', '100'],
        labels: {
          align: 'left',
        },
      },
      yAxis: {
        min: 0,
        allowDecimals: false,
        title: {
          text: null,
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [{
        name: '人均消费金额',
        data: [
          {
            name: 'A',
            y: 1,
            color: '#f5334c',
          }, {
            name: 'B',
            y: 4,
            color: '#e8551c',
          }, {
            name: 'C',
            y: 3,
            color: '#ffb800',
          }, {
            name: 'D',
            y: 6,
            color: '#c34dea',
          }, {
            name: 'E',
            y: 8,
            color: '#27a6e0',
          }, {
            name: 'F',
            y: 3,
            color: '#009641',
          },
        ],
      }],
      exporting: { enabled: false },
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .expend-status {
    padding: 20px;
  }
  .title {
    color: #0090de;
    font-size: 18px;
  }
  .data {
    color: #f10135;
    font-size: 20px;
  }
</style>
