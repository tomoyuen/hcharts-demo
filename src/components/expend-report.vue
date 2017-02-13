<template>
  <div>
    <div class="yesterday-expend">
      <div class="container">
        <div class="title">
          <img src="img/u13.png" alt="" />
          <p>昨日消费（元）<img src="img/yesterday-expend.png" alt="" /></p>
        </div>
        <div class="data">100.50</div>
        <div class="date">数据截止日期：2014-12-15</div>
      </div>
    </div>
    <div class="last-week-expend">
      <div class="container">
        <div class="title">
          <p>上周消费（元）<img src="img/last-week-expend.png" alt="" /></p>
        </div>
        <div class="data">100.50</div>
        <div class="date">数据截止日期：2014-12-15</div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="total-expend">
      <div class="container">
        <div class="title">
          <p>总消费(元)<img src="img/total-expend.png" alt="" /></p>
        </div>
        <div class="data">5,100.45</div>
        <div class="date">数据截止日期：2014-12-15</div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="weekly-expend">
      <div class="container">
        <div id="canvasDiv"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'device-count',
  title: '消费报告',
  mounted() {
    Highcharts.chart('canvasDiv', {
      colors: ['#0295db'],
      chart: {
        type: 'line',
      },
      title: {
        text: '最近7天消费趋势',
        align: 'left',
        margin: 50,
        style: {
          fontSize: '16px',
          fontWeight: 'normal',
          color: '#777777',
          x: -10,
        },
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%m-%e',
        },
        tickLength: 0,
        minPadding: 0.1,
      },
      yAxis: {
        title: {
          text: '',
        },
        gridLineColor: '#d6d6d6',
        max: 30,
        min: 0,
      },
      tooltip: {
        dateTimeLabelFormats: {
          day: '%Y-%m-%e',
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [{
        name: '金额',
        data: [0, 0, 0, 0, 0, 0, 0],
        pointStart: Date.UTC(2014, 11, 15),
        pointInterval: 24 * 3600 * 1000,
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
  .date { float: right;}
  .yesterday-expend, .last-week-expend, .total-expend {
    padding-bottom: 20px;
    width: 100%;
  }
  .yesterday-expend .data, .last-week-expend .data, .total-expend .data {
    font-size: 48px;
    margin: 40px auto;
    clear: both;
    color: #f4342f;
  }
  p {line-height: 2;}
  .title p img { float:right;}
  .separator {
    width: 100%;
    height: 26px;
    clear: both;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    background-color: #ecedef;
  }
  .yesterday-expend {
    color: #fff;
    background-color: #fd8700;
  }
  .yesterday-expend .title>img {float: left; padding-right: 10px;}
  .yesterday-expend .data {color: #fff;}
  .weekly-expend .title { display: block;clear: both;}
  #canvasDiv {
    padding-top: 12px;
  }
</style>
