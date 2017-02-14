<template>
  <div>
    <div class="logen">
      <p>恭喜你获得了  <b class="achieve">学习达人</b>  称号</p>
      <p>击败了  <b class="data">89%</b>  校友</p>
    </div>
    <div id='canvasDiv'></div>
    <div class="separator"></div>
    <div class="xueba-box">
      <h2 class="title">校园十大学霸排行榜</h2>
      <ul class="xueba-list">
        <li>
          <div class="rank">1</div>
          <h3 class="school">医学院</h3>
          <div class="name">张同学</div>
          <div class="gpa"><span class="data">5.0</span></div>
        </li>
        <li>
          <div class="rank">2</div>
          <h3 class="school">医学院</h3>
          <div class="name">张同学</div>
          <div class="gpa"><span class="data">4.9</span></div>
        </li>
        <li>
          <div class="rank">3</div>
          <h3 class="school">医学院</h3>
          <div class="name">张同学</div>
          <div class="gpa"><span class="data">4.9</span></div>
        </li>
        <li>
          <div class="rank">4</div>
          <h3 class="school">医学院</h3>
          <div class="name">张同学</div>
          <div class="gpa"><span class="data">4.9</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gpa-rank',
  title: '绩点排行',
  mounted() {
    this.$root.hcharts.chart('canvasDiv', {
      chart: {
        height: document.documentElement.clientHeight * 0.7,
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: '平均<br>绩点',
        align: 'center',
        verticalAlign: 'middle',
        style: {
          fontSize: '20px',
          color: '#e55e3a',
        },
        y: -10,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        enabled: false,
      },
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
      credits: { enabled: false },
      series: [{
        type: 'pie',
        name: '击败',
        innerSize: '60%',
        data: [
          {
            name: 'a',
            y: 89,
            color: '#f36e21',
          }, {
            name: 'b',
            y: 23,
            color: '#e5d478',
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
  .xueba-box {
    .title {
      font-size: 18px;
      padding: 20px 0;
      margin: 0;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      color: #0168b7;
      background-color: #f6f9fe;
      text-align: center;
    }
    .xueba-list li {
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
        font-size: 14px;
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
      .name, .gpa {
        color: #666;
      }
      .name {
        float: left;
      }
      .gpa {
        float: right;
      }
    }
    .xueba-list .data {
      color: #ff0000;
    }
  }
</style>
