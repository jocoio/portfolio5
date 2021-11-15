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
      meta: { mode: 'home' }
    },
    {
      path: '/photos',
      name: 'photos',
      component: Grid,
      meta: { mode: 'photos' }

    },
    {
      path: '/zero',
      name: 'zero',
      component: Grid,
      meta: { mode: 'letter' }
    },
  ],
  mode: 'history',
})