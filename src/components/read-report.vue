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
    <ul class="book-list">
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
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'device-count',
  title: '项目排行',
  mounted() {
    this.$root.hcharts.chart('canvasDiv', {
      chart: {
        height: document.querySelector('.screen').clientHeight * 0.7,
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
  .logen {
    color: #212121;
    margin: 20px;
    .data {
      font-size: 20px;
      color: #e96841;
    }
  }
  .btm-nav {
    margin: 0 auto 20px;
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
        display: inline-block;
        color: #787878;
        vertical-align: top;
        a {
          display: block;
          p {
            width: 60px;
            font-size: 14px;
          }
        }
        .data {
          display: block;
          padding: 8px 20px;
          border-radius: 5px;
          font-size: 120%;
          color: #fff;
          background: #46a35c;
          padding-bottom: 10px;
        }
        &:nth-child(2) .data {
          background-color: #d8271d;
        }
        &:nth-child(3) .data {
          background-color: #ffb800;
        }
        &:nth-child(4) .data {
          background-color: #f48221;
        }
      }
    }
  }
  .countdown-box {
    .title {
      padding: 20px 0;
      margin: 0;
      font-size: 18px;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      color: #0168b7;
      background-color: #f6f9fe;
      text-align: center;
    }
    .book-list li {
      padding: 10px 20px 14px;
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
      .book {
        color: #222;
        padding-bottom: 2px;
        font-size: 14px;
      }
      .date {
        color: #666;
        font-size: 14px;
      }
    }
  }
  #canvasDiv a {
    color: #e55e3a;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
</style>
