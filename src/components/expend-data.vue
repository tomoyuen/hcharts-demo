<template>
  <div>
    <div class="title">
      <h2>It's GOOD! 你已经超越了一切!</h2>
      <h3>消费金额对应描述的图文</h3>
    </div>
    <div id="expend-data-chart"></div>
    <div class="btm-nav">
      <ul>
        <li>
          <a href="#">
            <p>食堂</p>
            <div class="data">40%</div>
          </a>
        </li>
        <li>
         <a href="#">
          <p>超市</p>
          <div class="data">23%</div>
        </a>
      </li>
      <li>
        <a href="#">
          <p>餐厅</p>
          <div class="data">15%</div>
        </a>
      </li>
      <li>
        <a href="#">
          <p>饮品</p>
          <div class="data">17%</div>
        </a>
      </li>
      <li>
        <a href="#">
          <p>其他</p>
          <div class="data">5%</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'expend-data',
  title: '总消费',
  mounted() {
    Highcharts.chart('expend-data-chart', {
      chart: {
        height: document.documentElement.clientHeight - 150,
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: '总消费(元)',
        align: 'center',
        verticalAlign: 'middle',
        y: -5,
        style: {
          fontSize: '18px',
          color: '#e55e3a',
        },
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
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
      credits: {
        enabled: false,
      },
      series: [
        {
          type: 'pie',
          name: '消费占比',
          innerSize: '60%',
          data: [
            {
              name: '食堂',
              y: 40,
              color: '#4daf7b',
            }, {
              name: '超市',
              y: 23,
              color: '#e7653f',
            }, {
              name: '餐厅',
              y: 15,
              color: '#ffb800',
            }, {
              name: '饮品',
              y: 17,
              color: '#00bff3',
            }, {
              name: '其他',
              y: 5,
              color: '#ffbe73',
            },
          ],
        },
      ],
      exporting: { enabled: false },
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    text-align: center;
    margin-top: 20px;
    h2 {
      font-weight: normal;
      color: #ff3300;
      font-size: 18px;
    }
    h3 {
      font-weight: normal;
      color: #787878;
      font-size: 16px;
    }
  }
  .btm-nav {
    margin: 0 auto;
    position: relative;
    bottom: 0;
    text-align: center;
    font-size: 100%;
    color: #787878;
    a {
      text-decoration: none;
      color: #787878;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        background: #e8e8e8;
        width: 18%;
        display: inline-block;
        border-top: 6px solid #4daf7b;
        p {
          margin: 4px;
        }
        div {
          font-size: 120%;
          color: #4daf7b;
        }
      }
    }
  }
  .btm-nav ul li+li {
    border-top: 6px solid #e7653f;
  }
  .btm-nav ul li+li div {color: #e7653f;}

  .btm-nav ul li+li+li {
    border-top: 6px solid #ffb800;
  }
  .btm-nav ul li+li+li div {color: #ffb800;}
  .btm-nav ul li+li+li+li { border-top: 6px solid #00bff3;}
  .btm-nav ul li+li+li+li div { color: #00bff3;}
  .btm-nav ul li+li+li+li+li {
    border-top: 6px solid #ffbe73;
  }
  .btm-nav ul li+li+li+li+li div {color: #ffbe73;}

  .btm-nav .data {
    padding-bottom: 10px;
  }
</style>
