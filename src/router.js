import Vue from 'vue'
import Router from 'vue-router';

// import Home from './pages/Home';
import Grid from './components/Grid';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shapes',
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
    }
  ],
  mode: 'history',
})