<template>
  <div>
    <div class="study-point">
      <div class="container">
        <div class="title">
          <p>我的学时学分<img src="../assets/my-credit.png" alt=""></p>
        </div>
        <div>必修学分  <b class="data">18/32</b>  分</div>
        <div>选修学分  <b class="data">24/50</b>  分</div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="gpa">
      <div class="container">
        <div class="title">
          <p>我的绩点<img src="../assets/my-gpa.png" alt=""></p>
        </div>
        <div>总绩点<b class="data">18</b></div>
        <div>平均绩点<b class="data">4.5</b></div>
      </div>
    </div>
    <div class="separator"></div>
    <div id="my-data"></div>
    <div class="separator"></div>
    <div id='my-grade'></div>
    <div class="separator"></div>
    <div id="study-trend"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'study-report',
  title: '学习报告',
  mounted() {
    Highcharts.chart('my-data', {
      chart: {
        polar: true,
        type: 'line',
      },
      colors: ['#f0713e'],
      pane: {
        size: '80%',
      },
      title: {
        text: '我的五项实力',
        align: 'left',
        style: {
          fontSize: '18px',
          color: '#0195db',
        },
      },
      xAxis: {
        categories: ['政治', '语文', '数学', '体育', '生物'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        gridLineDashStyle: 'dash',
        labels: {
          style: {
            color: '#17909b',
            fontSize: '14px',
          },
        },
      },
      yAxis: {
        gridLineInterpolation: 'polygon',
        gridLineWidth: 1,
        lineWidth: 0,
        min: 0,
        labels: {
          enabled: false,
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      series: [{
        type: 'area',
        name: '能力值',
        data: [8, 8, 8, 8, 5],
        pointPlacement: 'on',
      }],
      exporting: { enabled: false },
    });
    Highcharts.chart('my-grade', {
      chart: {
        type: 'column',
      },
      title: {
        text: '我的成绩',
        align: 'left',
        margin: 40,
        style: {
          fontSize: '18px',
          color: '#0195db',
        },
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
          text: '',
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: '科目数',
          data: [
            {
              name: 'A',
              y: 3,
              color: '#d8271d',
            }, {
              name: 'B',
              y: 7,
              color: '#fcb815',
            }, {
              name: 'C',
              y: 5,
              color: '#46a35c',
            }, {
              name: 'D',
              y: 9,
              color: '#00b4ff',
            }, {
              name: 'E',
              y: 6,
              color: '#06dd8f',
            }, {
              name: 'F',
              y: 4,
              color: '#c24deb',
            },
          ],
        },
      ],
      exporting: { enabled: false },
    });
    Highcharts.chart('study-trend', {
      chart: {
        type: 'area',
      },
      title: {
        text: '学习趋势',
        align: 'left',
        margin: 40,
        style: {
          fontSize: '18px',
          color: '#0195db',
        },
      },
      xAxis: {
        max: 4,
        allowDecimals: false,
        labels: {
          formatter() {
            return 1 + this.value;
          },
        },
      },
      yAxis: {
        title: {
          text: null,
        },
        min: 0,
        max: 5,
      },
      tooltip: { enabled: false },
      credits: { enabled: false },
      legend: { enabled: false },
      series: [{
        name: '绩点',
        data: [1, 2.2, 2, 3],
      }],
      exporting: { enabled: false },
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container { padding: 20px;}
  img {width: 24px;height: 24px;}
  .title { color: #0195db; font-size: 18px;}
  .study-point, .gpa {
    width: 100%;
    margin-bottom: 20px;
  }
  .study-point .data, .gpa .data {
    font-size: 20px;
    color: #f4342f;
    clear: both;
  }
  .title p img { float:right;}
  .separator {
    width: 100%;
    height: 26px;
    clear: both;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    background-color: #ecedef;
  }
  #my-data, #my-grade, #study-trend { margin-top: 20px;margin-left: 13px;}
</style>
