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
      path: '/hellomonday',
      name: 'hellomonday',
      component: Grid,
      meta: { mode: 'letter' }
      
    },
    {
      path: '/stink',
      name: 'stink',
      component: Grid,
      meta: { mode: 'letter' }
    },
    {
      path: '/upperquad',
      name: 'upperquad',
      component: Grid,
      meta: { mode: 'letter' }
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