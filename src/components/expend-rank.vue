<template>
  <div>
    <div class="chart">
      <p>恭喜你获得了  <b class="achieve">土豪张</b>  称号</p>
      <p>击败了  <b class="data">48%</b>  校友</p>
      <div id="canvasDiv"></div>
    </div>
    <div class="separator"></div>
    <div class="tuhao-box">
      <h2 class="title">校园十大土豪排行榜</h2>
      <ul class="tuhao-list">
        <li>
          <div class="rank">1</div>
          <h3 class="school">医学院</h3>
          <div class="name">张同学</div>
          <div class="expand-mount">总消费:
            <span class="data">524.05</span>元
          </div>
        </li>
        <li>
          <div class="rank">2</div>
          <h3 class="school">管理学院</h3>
          <div class="name">张同学</div>
          <div class="expand-mount">总消费:
            <span class="data">424.05</span>元
          </div>
        </li>
        <li>
          <div class="rank">3</div>
          <h3 class="school">医学院</h3>
          <div class="name">张同学</div>
          <div class="expand-mount">总消费:
            <span class="data">327.05</span>元
          </div>
        </li>
        <li>
          <div class="rank">4</div>
          <h3 class="school">计算机学院</h3>
          <div class="name">张同学</div>
          <div class="expand-mount">总消费:
            <span class="data">324.05</span>元
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'expend-rank',
  title: '消费排行',
  mounted() {
    this.$root.hcharts.chart('canvasDiv', {
      chart: {
        height: document.querySelector('.screen').clientHeight * 0.7,
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: '<b class="huge">48</b>%',
        useHTML: true,
        align: 'center',
        verticalAlign: 'middle',
        y: -15,
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#787878',
        },
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
            y: 48,
            color: '#ff7d01',
          }, {
            y: 52,
            color: '#e9e9e9',
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
  .chart {
    width: 100%;
    border-bottom: 1px solid #cccccc;
    clear: both;
    text-align: center;
    .achieve {
      color: #fe3200;
      font-size: 22px;
    }
    .data {
      color: #ff8800;
      font-size: 20px;
    }
  }
  .separator {
    width: 100%;
    height: 26px;
    clear: both;
    background-color: #ecedef;
  }
  .tuhao-box {
    .title {
      padding: 20px 0;
      margin: 0;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      font-size: 18px;
      color: #0168b7;
      background-color: #f6f9fe;
      text-align: center;
    }
    .tuhao-list li {
      padding: 10px 20px 30px;
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
      .name, .expand-mount {
        color: #666;
      }
      .name {
        float: left;
      }
      .expand-mount {
        float: right;
      }
      .school {
        color: #222;
        padding-bottom: 2px;
        font-weight: normal;
      }
    }
    .tuhao-list .data {
      color: #ff0000;
    }
  }
  .huge {
    font-size: 36px;
  }
</style>
