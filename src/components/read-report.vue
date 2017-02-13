<template>
  <div>
    <div class="logen">你已阅读了  <b class="data">120</b>  本书籍</div>
    <div id='canvasDiv'></div>
    <div class="btm-nav">
      <ul>
        <li>
          <a href="#">
            <b class="data">24%</b><p>人文社会科学</p>
          </a>
        </li>
        <li>
         <a href="#">
          <b class="data">35%</b><p>综合性图书</p>
        </a>
      </li>
      <li>
        <a href="#">
          <b class="data">16%</b><p>工业技术</p>
        </a>
      </li>
      <li>
        <a href="#">
          <b class="data">25%</b><p>自然科学</p>
        </a>
      </li>
    </ul>
  </div>
  <div class="countdown-box">
    <h2 class="title">待还书籍倒计时</h2>
    <ui class="book-list">
      <li>
        <div class="rank">1</div>
        <h3 class="book">在您身边为您设计</h3>
        <div class="date">还书日期：2014-12-20</div>
      </li>
      <li>
        <div class="rank">2</div>
        <h3 class="book">马克思主义哲学</h3>
        <div class="date">还书日期：2014-12-20</div>
      </li>
      <li>
        <div class="rank">3</div>
        <h3 class="book">在您身边为您设计</h3>
        <div class="date">还书日期：2014-12-20</div>
      </li>
      <li>
        <div class="rank">4</div>
        <h3 class="book">马克思主义哲学</h3>
        <div class="date">还书日期：2014-12-20</div>
      </li>
    </ui>
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
      chart: {
        height: document.documentElement.clientHeight * 0.7,
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: '<a href="lianyi://readingReport.jumpToMyReading">借阅书<br>籍比例</a>',
        align: 'center',
        verticalAlign: 'middle',
        useHTML: true,
        y: -8,
      },
      tooltip: {
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
      credits: {
        enabled: false,
      },
      series: [{
        type: 'pie',
        name: '比例',
        innerSize: '50%',
        data: [
          {
            name: '人文社会科学',
            y: 24,
            color: '#46a35c',
          }, {
            name: '综合性图书',
            y: 35,
            color: '#d8271d',
          }, {
            name: '工业技术',
            y: 16,
            color: '#ffb800',
          }, {
            name: '自然科学',
            y: 25,
            color: '#ffbe73',
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
  .logen {
    color: #212121;
    margin: 20px;
  }
  .logen .data {
    font-size: 20px;
    color: #e96841;
  }
  .btm-nav {
    margin: 0 auto 20px;
    position: relative;
    bottom: 0;
    text-align: center;
    font-size: 100%;
    color: #787878;
  }
  .btm-nav a {
    text-decoration: none;
    color: #787878;
  }
  .btm-nav ul { margin: 0;padding: 0}
  .btm-nav ul li {
    display: inline-block;
    color: #787878;
    vertical-align: top;
  }
  .btm-nav ul li a {
    display: block;
  }
  .btm-nav ul li a p {
    width: 60px;
    font-size: 14px;
  }
  .btm-nav ul li .data {
    display: block;
    padding: 8px 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    font-size: 120%;
    color: #fff;
    background: #46a35c;
  }
  .btm-nav ul li+li .data {background-color: #d8271d;}
  .btm-nav ul li+li+li .data {background-color: #ffb800;}
  .btm-nav ul li+li+li+li .data {background-color: #f48221;}
  .btm-nav .data {
    padding-bottom: 10px;
  }
  .countdown-box .title {
    padding: 20px 0;
    margin: 0;
    font-size: 18px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    color: #0168b7;
    background-color: #f6f9fe;
    text-align: center;
  }
  .countdown-box .book-list li {
    padding: 10px 20px 14px;
    list-style: none;
    border-bottom: 1px solid #cccccc;
    display: block;
    clear: both;
  }
  .countdown-box .book-list li:nth-child(2n) {
    background-color: #f6f9fe;
  }
  .countdown-box .book-list li .rank {
    color: #fff;
    background-color: #ef0135;
    float: left;
    font-size: 14px;
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
  .countdown-box .book-list li+li .rank { background-color: #ff7d00;}
  .countdown-box .book-list li+li+li .rank { background-color: #31bd80;}
  .countdown-box .book-list li+li+li+li .rank { background-color: #1fc2fd;}
  .countdown-box .book-list li .book { color: #222;padding-bottom: 2px; font-size: 14px;}
  .countdown-box .book-list li .date { color: #666666; font-size: 14px;}
  #canvasDiv a {
    color: #e55e3a;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
</style>
