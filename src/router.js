import Vue from 'vue'
import Router from 'vue-router';
import Grid from './components/Grid';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Grid,
    },
    {
      path: '/photos',
      name: 'photos',
      component: Grid,
    },
    {
      path: '/hellomonday',
      name: 'hellomonday',
      component: Grid
    },
    {
      path: '/stink',
      name: 'stink',
      component: Grid
    },
    {
      path: '/upperquad',
      name: 'upperquad',
      component: Grid
    },
    {
      path: '/zero',
      name: 'zero',
      component: Grid
    },
  ],
  mode: 'history',
})