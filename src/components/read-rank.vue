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
      <ul class="shuba-list">
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
          <h3 class="school">3学院</h3>
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
      </ul>
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'read-rank',
  title: '阅读排行',
  mounted() {
    Highcharts.chart('canvasDiv', {
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

<style scoped>
  .separator {
    width: 100%;
    height: 26px;
    clear: both;
    background-color: #ecedef;
  }
  .logen {
    margin: 20px; color: #212121;
    .achieve {
      color: #ff0101;
      font-size: 22px;
    }
    .data {
      color: #fdba52;
      font-size: 20px;
    }
  }
  .shuba-box {
    .title {
      padding: 20px 0;
      font-size: 18px;
      margin: 0;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      color: #0168b7;
      background-color: #f6f9fe;
      text-align: center;
    }
    .shuba-list li {
      font-size: 14px;
      padding: 10px 20px 24px;
      list-style: none;
      border-bottom: 1px solid #cccccc;
      display: block;
      clear: both;
      &:nth-child(2n) {
        background-color: #f6f9fe;
      }
      .rank {
        color: #fff;
        background-color: #ef0135;
        float: left;
        width: 36px;
        height: 36px;
        text-align: center;
        line-height: 2.5;
        margin-right: 20px;
        border-radius: 5px;
      }
      &:nth-child(2) .rank {
        background-color: #ff7d00;
      }
      &:nth-child(3) .rank {
        background-color: #31bd80;
      }
      &:nth-child(4) .rank {
        background-color: #1fc2fd;
      }
      .school {
        color: #222;
        padding-bottom: 2px;
        font-size: 14px;
        font-weight: normal;
      }
      .name, .read-mount {
        color: #666;
      }
      .name {
        float: left;
      }
      .read-mount {
        float: right;
      }
      .data {
        color: #ff0000;
      }
    }
    .xueba-list .data {
      color: #ff0000;
    }
  }
</style>
