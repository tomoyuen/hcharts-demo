<template>
  <div>
    <div class="select-box">
      <select name="" id="">
        <option value="1">2013-2014年第1学期</option>
        <option value="2">2013-2014年第2学期</option>
      </select>
    </div>
    <div class="good-student-spread">
      <div class="container">
        <div id="good-student-data"></div>
        <div class="title">优秀学生分布(说明：GPA>3.0为优秀学生)</div>
        <table class="letter-table" cellspacing="0">
          <tr>
            <th></th>
            <th>院系/班级</th>
            <th>占比</th>
            <th>人数</th>
          </tr>
          <tr>
            <td><p>A</p></td>
            <td>计算机学院</td>
            <td>18%</td>
            <td>33</td>
          </tr>
          <tr>
            <td><p>B</p></td>
            <td>理学院</td>
            <td>13%</td>
            <td>30</td>
          </tr>
          <tr>
            <td><p>C</p></td>
            <td>外语学院</td>
            <td>12%</td>
            <td>23</td>
          </tr>
          <tr>
            <td><p>D</p></td>
            <td>文学院</td>
            <td>25%</td>
            <td>51</td>
          </tr>
          <tr>
            <td><p>E</p></td>
            <td>历史学院</td>
            <td>15%</td>
            <td>28</td>
          </tr>
          <tr>
            <td><p>F</p></td>
            <td>体育学院</td>
            <td>25%</td>
            <td>12</td>
          </tr>
          <tr>
            <td><p>G</p></td>
            <td>医学院</td>
            <td>18%</td>
            <td>8</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="separator"></div>
    <div class="average-gpa-rank">
      <div class="container">
        <div class="title">平均GPA排行</div>
        <div id="rank-chart"></div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="flunk-rank">
      <div class="container">
        <div class="title">挂科率排行</div>
        <div class="rank-table">
          <table class="rank-list" cellspacing="0" border="0">
            <tr>
              <th></th>
              <th>课程名称</th>
              <th>挂科人数</th>
            </tr>
            <tr>
              <td><p>1</p></td>
              <td>高等数学A</td>
              <td>51</td>
            </tr>
            <tr>
              <td><p>2</p></td>
              <td>大学英语2</td>
              <td>50</td>
            </tr>
            <tr>
              <td><p>3</p></td>
              <td>离散数学</td>
              <td>48</td>
            </tr>
            <tr>
              <td><p>4</p></td>
              <td>数据结构</td>
              <td>45</td>
            </tr>
            <tr>
              <td><p>5</p></td>
              <td>数字电路</td>
              <td>42</td>
            </tr>
            <tr>
              <td><p>6</p></td>
              <td>模拟电路</td>
              <td>41</td>
            </tr>
            <tr>
              <td><p>7</p></td>
              <td>概率论</td>
              <td>39</td>
            </tr>
            <tr>
              <td><p>8</p></td>
              <td>计算机网络原理</td>
              <td>28</td>
            </tr>
            <tr>
              <td><p>9</p></td>
              <td>计算机组成原理</td>
              <td>12</td>
            </tr>
            <tr>
              <td><p>10</p></td>
              <td>软件工程</td>
              <td>8</td>
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
  title: '学生成绩',
  mounted() {
    Highcharts.chart('good-student-data', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      colors: ['#35b3ed', '#1dcd00', '#ffb518', '#f5336f', '#06dd8f', '#ff5d3c', '#ff7d01'],
      title: {
        text: null,
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -40,
            style: {
              color: 'white',
              fontSize: '20px',
            },
          },
          center: ['50%', '50%'],
        },
      },
      credits: { enabled: false },
      series: [{
        type: 'pie',
        name: '优秀学生占比',
        innerSize: '50%',
        data: [
          ['A', 18],
          ['B', 13],
          ['C', 12],
          ['D', 25],
          ['E', 15],
          ['F', 25],
          ['G', 18],
        ],
      }],
      exporting: { enabled: false },
    });
    Highcharts.chart('rank-chart', {
      chart: { type: 'bar' },
      title: { text: null },
      xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7'],
        title: { text: null },
      },
      yAxis: {
        min: 0,
        align: 'high',
        title: { text: null },
        labels: { overflow: 'justify' },
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
        name: '平均GPA',
        data: [{
          name: '计算机学院',
          color: '#35b3ed',
          y: 13,
        }, {
          name: '理学院',
          color: '#1dcd00',
          y: 12,
        }, {
          name: '外语学院',
          color: '#ffb518',
          y: 11,
        }, {
          name: '文学院',
          color: '#f5336f',
          y: 10,
        }, {
          name: '历史学院',
          color: '#06dd8f',
          y: 8,
        }, {
          name: '体育学院',
          color: '#ff5d3c',
          y: 7,
        }, {
          name: '医学院',
          color: '#ff7d01',
          y: 6,
        }],
      }],
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../style/main.css';
</style>
