<template>
  <div>
    <div class="expend-status">
      <div class="title">消费情况</div>
      <div class="content">
        <p>上周消费总额  <b class="data">123.48</b>  元</p>
        <p>环比增长  <b class="data">10%</b>  </p>
      </div>
      <div id="canvasDiv"></div>
    </div>
    <div class="separator"></div>
    <div class="lend-status">
      <div class="title">借阅情况</div>
      <div class="content">
        <p>上周借了  <b class="data">2</b>  本书</p>
        <div class="book">《天空之城》、《遇见未知的自己》</div>
        <p>下周还有  <b class="data">5</b>  本书即将到期</p>
        <div class="book">《左手倒影右手年华》、《给你一个企业你将如何管理》、《大话存储》、《鬼吹灯》、《盗墓笔记》</div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="study-report">
      <div class="title">学习报告</div>
      <div class="content">
        <p>下周还有  <b class="data">2</b>  节课</p>
        <div class="course-table">
          <table>
            <tr>
              <th>课程名称</th>
              <th>上课时间</th>
              <th>上课地点</th>
            </tr>
            <tr>
              <td>计算机基础</td>
              <td>2014-12-12 14:00</td>
              <td>科技大厦201</td>
            </tr>
            <tr>
              <td>马克思主义哲学</td>
              <td>2014-12-14 10:00</td>
              <td>逸夫楼4201</td>
            </tr>
          </table>
        </div>
        <p>下周有  <b class="data">4</b>  门课要考试</p>
        <div class="course-data">
          <table>
            <tr>
              <th>课程名称</th>
              <th>考试时间</th>
              <th>考试地点</th>
            </tr>
            <tr>
              <td>计算机基础</td>
              <td>2014-12-12 14:00</td>
              <td>科技大厦201</td>
            </tr>
            <tr>
              <td>马克思主义哲学</td>
              <td>2014-12-14 10:00</td>
              <td>逸夫楼4201</td>
            </tr>
            <tr>
              <td>英语四级</td>
              <td>2014-12-12 14:00</td>
              <td>科技大厦201</td>
            </tr>
            <tr>
              <td>注册会计师</td>
              <td>2014-12-12 14:00</td>
              <td>逸夫楼4201</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'device-count',
  title: '项目排行',
  mounted() {
    Highcharts.chart('canvasDiv', {
      colors: ['#0295db'],
      chart: {
        type: 'line',
      },
      title: {
        text: null,
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%m-%e',
        },
        minPadding: 0.1,
        tickLength: 0,
        tickInterval: 24 * 3600 * 1000,
      },
      yAxis: {
        title: {
          text: null,
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
        data: [5, 11, 9, 13, 25, 13, 10],
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
  .separator {
    width: 100%;
    height: 26px;
    clear: both;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    background-color: #ecedef;
  }
  .expend-status, .lend-status, .study-report { padding: 20px;}
  .title {
    color: #0090de;
    font-size: 18px;
  }
  .data {
    color: #f10135;
    font-size: 20px;
  }
  .book {
    color: #5d5d5d;
    font-size: 16px;
    line-height: 2
  }
  #canvasDiv {
    padding-top: 12px;
  }
  table {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-collapse: 0;
    border-spacing: 0;
    text-align: center;
  }
  td {
    height: 48px;
  }
  th {
    background-color: #efefef;
    font-size: 16px;
    font-weight: normal;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
