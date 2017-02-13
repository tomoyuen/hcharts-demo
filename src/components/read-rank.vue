<template>
  <div>
    <div class="logen">
      <p>恭喜你获得了  <b class="achieve">阅读达人</b>  称号</p>
      <p>击败了  <b class="data">35%</b>  校友</p>
    </div>
    <div id='canvasDiv'></div>
    <div class="separator"></div>
    <div class="shuba-box">
      <h2 class="title">校园十大书霸排行榜</h2>
      <ui class="shuba-list">
        <li>
          <div class="rank">1</div>
          <h3 class="school">1学院</h3>
          <div class="name">张同学</div>
          <div class="read-mount">总阅读:
            <span class="data">535</span>本
          </div>
        </li>
        <li>
          <div class="rank">2</div>
          <h3 class="school">3医学院</h2>
            <div class="name">张同学</div>
            <div class="read-mount">总阅读:
              <span class="data">534</span>本
            </div>
          </li>
          <li>
            <div class="rank">3</div>
            <h3 class="school">3学院</h3>
            <div class="name">张同学</div>
            <div class="read-mount">总阅读:
              <span class="data">532</span>本
            </div>
          </li>
          <li>
            <div class="rank">4</div>
            <h3 class="school">4学院</h3>
            <div class="name">张同学</div>
            <div class="read-mount">总阅读:
              <span class="data">531</span>本
            </div>
          </li>
        </ui>
      </div>
    </div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'device-count',
  title: '阅读排行',
  mounted() {
    Highcharts.chart('container', {
      chart: {
        height: document.documentElement.clientHeight * 0.7,
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: '总阅读',
        align: 'center',
        verticalAlign: 'middle',
        style: {
          fontSize: '20px',
          color: '#e55e3a',
        },
        y: 4,
      },
      tooltip: { enabled: false },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -30,
            style: {
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0px 1px 2px black',
            },
          },
          center: ['50%', '50%'],
        },
      },
      credits: {
        enabled: false,
      },
      series: [{
        type: 'pie',
        innerSize: '60%',
        data: [
          {
            name: 'a',
            y: 35,
            color: '#e71923',
          }, {
            name: 'b',
            y: 75,
            color: '#00a74b',
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
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  body { background-color: #fefefe; font-size: 14px;}
  .logen { margin: 20px; color: #212121;}
  .logen .achieve { color: #fe0000; font-size: 20px;}
  .logen .data { color: #fdbb53; font-size: 20px;}
  .separator {
    width: 100%;
    height: 26px;
    clear: both;
    background-color: #ecedef;
  }
  .shuba-box .title {
    padding: 20px 0;
    font-size: 18px;
    margin: 0;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    color: #0168b7;
    background-color: #f6f9fe;
    text-align: center;
  }
  .shuba-box .shuba-list li {
    font-size: 14px;
    padding: 10px 20px 24px;
    list-style: none;
    border-bottom: 1px solid #cccccc;
    display: block;
    clear: both;
  }
  .shuba-box .shuba-list li:nth-child(2n) {
    background-color: #f6f9fe;
  }
  .shuba-box .shuba-list li .rank {
    color: #fff;
    background-color: #ef0135;
    float: left;
    width: 36px;
    height: 36px;
    text-align: center;
    line-height: 2.5;
    margin-right: 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
  }
  .shuba-box .shuba-list li+li .rank { background-color: #ff7d00;}
  .shuba-box .shuba-list li+li+li .rank { background-color: #31bd80;}
  .shuba-box .shuba-list li+li+li+li .rank { background-color: #1fc2fd;}
  .shuba-box .shuba-list li .school { color: #222;padding-bottom: 2px;font-size: 16px; font-weight: normal;}
  .shuba-box .shuba-list li .name, .shuba-box .shuba-list li .read-mount { color: #666666;}
  .shuba-list .data { color: #ff0000;}
  .shuba-box .shuba-list li .name { float: left;}
  .shuba-box .shuba-list li .read-mount { float: right;}
</style>
