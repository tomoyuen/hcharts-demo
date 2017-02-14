// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Highcharts from 'highcharts';
import App from './App';
import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    links: ['DeviceCount', 'downloadCount', 'expendData', 'expendRank', 'expendReport', 'expendReportWeekly',
      'gpaRank', 'hotRank', 'lendReport', 'messageCount', 'projectRank', 'readRank', 'readReport', 'recommendCount',
      'reportMsgWeekly', 'studentSourseSelected', 'studentExpend', 'studentLend', 'studentScore', 'studyReport',
      'teacherExpend', 'teacherLend', 'userCount', 'versionCount', 'visitCount'],
    hcharts: Highcharts,
  },
});
