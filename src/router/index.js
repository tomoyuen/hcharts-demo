/* eslint global-require:off */
import Vue from 'vue';
import Router from 'vue-router';
import DeviceCount from '../components/device-count';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DeviceCount',
      component: DeviceCount,
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
    },
  ],
});
