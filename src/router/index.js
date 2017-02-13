/* eslint global-require:off */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DeviceCount',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/device-count')));
      },
    }, {
      path: '/downloadCount',
      name: 'downloadCount',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/download-count')));
      },
    }, {
      path: '/expendData',
      name: 'expendData',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/expend-data')));
      },
    }, {
      path: '/expendRank',
      name: 'expendRank',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/expend-rank')));
      },
    }, {
      path: '/expendReport',
      name: 'expendReport',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/expend-report')));
      },
    }, {
      path: '/expendReportWeekly',
      name: 'expendReportWeekly',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/expend-report-weekly')));
      },
    }, {
      path: '/gpaRank',
      name: 'gpaRank',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/gpa-rank')));
      },
    }, {
      path: '/hotRank',
      name: 'hotRank',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/hot-rank')));
      },
    }, {
      path: '/lendReport',
      name: 'lendReport',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/lend-report')));
      },
    }, {
      path: '/messageCount',
      name: 'messageCount',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/message-count')));
      },
    }, {
      path: '/projectRank',
      name: 'projectRank',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/project-rank')));
      },
    }, {
      path: '/readRank',
      name: 'readRank',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/read-rank')));
      },
    }, {
      path: '/readReport',
      name: 'readReport',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/read-report')));
      },
    }, {
      path: '/recommendCount',
      name: 'recommendCount',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/recommend-count')));
      },
    }, {
      path: '/reportMsgWeekly',
      name: 'reportMsgWeekly',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/report-msg-weekly')));
      },
    }, {
      path: '/studentCourseSelected',
      name: 'studentSourseSelected',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/student-course-selected')));
      },
    }, {
      path: '/studentExpend',
      name: 'studentExpend',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/student-expend')));
      },
    }, {
      path: '/studentLend',
      name: 'studentLend',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/student-lend')));
      },
    }, {
      path: '/studentScore',
      name: 'studentScore',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/student-score')));
      },
    }, {
      path: '/studyReport',
      name: 'studyReport',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/study-report')));
      },
    }, {
      path: '/teacherExpend',
      name: 'teacherExpend',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/teacher-expend')));
      },
    }, {
      path: '/teacherLend',
      name: 'teacherLend',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/teacher-lend')));
      },
    }, {
      path: '/userCount',
      name: 'userCount',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/user-count')));
      },
    }, {
      path: '/versionCount',
      name: 'versionCount',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/version-count')));
      },
    }, {
      path: '/visitCount',
      name: 'visitCount',
      component: (resolve) => {
        require.ensure([], () => resolve(require('../components/visit-trend')));
      },
    },
  ],
});
