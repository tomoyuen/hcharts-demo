<template>
  <div id="container"></div>
</template>

<script>
export default {
  name: 'visit-trend',
  title: '访问趋势',
  mounted() {
    this.$root.hcharts.chart('container', {
      colors: ['#35b3ed', '#1dcd00', '#ffb518', '#f5326e', '#06dd8f', '#ff5d3c', '#ff7d01', '#febe04', '#bd6aff', '#2780dc'],
      title: {
        text: '访问趋势',
        x: 20,
        margin: 20,
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { day: '%e' },
        tickInterval: 24 * 3600 * 1000,
      },
      yAxis: {
        title: {
          text: '数量：次',
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080',
        }],
        min: 1500,
        max: 4500,
      },
      tooltip: {
        valueSuffix: '次',
      },
      legend: {
        verticalAlign: 'bottom',
      },
      credits: { enabled: false },
      series: [{
        name: '访问趋势',
        data: [2050, 2000, 2250, 2480, 2600, 2800, 3050, 3200, 3350,
          3450, 3550, 3660, 3690, 3750, 3960, 4020, 4100, 4200, 4100,
          4040, 3860, 3820, 3780, 3740, 3700, 3660, 3620, 3580, 3540, 3500],
        pointStart: Date.UTC(2014, 11, 1),
        pointInterval: 24 * 3600 * 1000,
      }],
    });
  },
};
</script>
