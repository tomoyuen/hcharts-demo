<template>
  <div>
    <div class="select-box">
      <select name="" id="">
        <option value="1">2015年11月</option>
        <option value="2">2015年12月</option>
      </select>
    </div>
    <div class="expend-spread">
      <div class="container">
        <div id="spread-chart"></div>
        <div class="title">消费额分布</div>
        <table class="letter-table" cellspacing="0">
          <tr>
            <th></th>
            <th>院系</th>
            <th>占比</th>
            <th>消费额</th>
          </tr>
          <tr>
            <td><p>A</p></td>
            <td>计算机学院</td>
            <td>18%</td>
            <td>37563.2</td>
          </tr>
          <tr>
            <td><p>B</p></td>
            <td>理学院</td>
            <td>13%</td>
            <td>12250</td>
          </tr>
          <tr>
            <td><p>C</p></td>
            <td>外语学院</td>
            <td>12%</td>
            <td>16040</td>
          </tr>
          <tr>
            <td><p>D</p></td>
            <td>文学院</td>
            <td>25%</td>
            <td>55300.8</td>
          </tr>
          <tr>
            <td><p>E</p></td>
            <td>历史学院</td>
            <td>15%</td>
            <td>42300</td>
          </tr>
          <tr>
            <td><p>F</p></td>
            <td>体育学院</td>
            <td>25%</td>
            <td>12300</td>
          </tr>
          <tr>
            <td><p>G</p></td>
            <td>医学院</td>
            <td>18%</td>
            <td>12300</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="separator"></div>
    <div class="average-expend-rank">
      <div class="container">
        <div class="title">人均消费排行</div>
        <div id="rank-chart"></div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="expend-board">
      <div class="container">
        <div class="title">当月消费榜（前十位）</div>
        <table class="rank-list" cellspacing="0">
          <tr>
            <th></th>
            <th>名称</th>
            <th>院系/部处</th>
            <th>消费额</th>
          </tr>
          <tr>
            <td><p>1</p></td>
            <td>李倩</td>
            <td>经管学院</td>
            <td>￥6.00</td>
          </tr>
          <tr>
            <td><p>2</p></td>
            <td>王雄</td>
            <td>经管学院</td>
            <td>￥12.00</td>
          </tr>
          <tr>
            <td><p>3</p></td>
            <td>李倩</td>
            <td>经管学院</td>
            <td>￥6.00</td>
          </tr>
          <tr>
            <td><p>4</p></td>
            <td>王雄</td>
            <td>经管学院</td>
            <td>￥12.00</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="separator"></div>
    <div class="expend-board-last">
      <div class="container">
        <div class="title">当月消费榜（后十位）</div>
        <table class="rank-list" cellspacing="0">
          <tr>
            <th></th>
            <th>名称</th>
            <th>院系/部处</th>
            <th>消费额</th>
          </tr>
          <tr>
            <td><p>1</p></td>
            <td>李倩</td>
            <td>经管学院</td>
            <td>￥6.00</td>
          </tr>
          <tr>
            <td><p>2</p></td>
            <td>王雄</td>
            <td>经管学院</td>
            <td>￥12.00</td>
          </tr>
          <tr>
            <td><p>3</p></td>
            <td>李倩</td>
            <td>经管学院</td>
            <td>￥6.00</td>
          </tr>
          <tr>
            <td><p>4</p></td>
            <td>王雄</td>
            <td>经管学院</td>
            <td>￥12.00</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teacher-expend',
  title: '教师消费',
  mounted() {
    this.$root.hcharts.chart('spread-chart', {
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
        name: '消费金额',
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
        name: '人均消费额',
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
