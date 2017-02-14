<template>
  <div>
    <div class="select-box">
      <select name="" id="">
        <option value="1">2013-2014年第1学期</option>
        <option value="2">2013-2014年第2学期</option>
      </select>
    </div>
    <div class="public-course-rank">
      <div class="container">
        <div class="title">公选课排行</div>
        <div id="rank-chart"></div>
        <div class="rank-table">
          <table class="letter-table" cellspacing="0">
            <tr>
              <th></th>
              <th>课程名称</th>
              <th>挂科人数</th>
            </tr>
            <tr>
              <td><p>A</p></td>
              <td>高等数学A</td>
              <td>51</td>
            </tr>
            <tr>
              <td><p>B</p></td>
              <td>大学英语2</td>
              <td>50</td>
            </tr>
            <tr>
              <td><p>C</p></td>
              <td>离散数学</td>
              <td>48</td>
            </tr>
            <tr>
              <td><p>D</p></td>
              <td>数据结构</td>
              <td>45</td>
            </tr>
            <tr>
              <td><p>E</p></td>
              <td>数字电路</td>
              <td>42</td>
            </tr>
            <tr>
              <td><p>F</p></td>
              <td>模拟电路</td>
              <td>41</td>
            </tr>
            <tr>
              <td><p>G</p></td>
              <td>概率论</td>
              <td>39</td>
            </tr>
            <tr>
              <td><p>H</p></td>
              <td>计算机网络原理</td>
              <td>28</td>
            </tr>
            <tr>
              <td><p>I</p></td>
              <td>计算机组成原理</td>
              <td>12</td>
            </tr>
            <tr>
              <td><p>J</p></td>
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
export default {
  name: 'student-course-selected',
  title: '学生选课',
  mounted() {
    this.$root.hcharts.chart('rank-chart', {
      chart: { type: 'bar' },
      title: { text: null },
      xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7'],
        title: { text: null },
      },
      yAxis: {
        min: 0,
        align: 'high',
        labels: { overflow: 'justify' },
        title: { text: null },
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
        name: '选择人数',
        data: [{
          name: 'A',
          color: '#35b3ed',
          y: 15,
        }, {
          name: 'B',
          color: '#1dcd00',
          y: 14,
        }, {
          name: 'C',
          color: '#ffb518',
          y: 12,
        }, {
          name: 'D',
          color: '#f5336f',
          y: 10,
        }, {
          name: 'E',
          color: '#06dd8f',
          y: 8,
        }, {
          name: 'F',
          color: '#ff5d3c',
          y: 6,
        }, {
          name: 'G',
          color: '#ff7d01',
          y: 5,
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
