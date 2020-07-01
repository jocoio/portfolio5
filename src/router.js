import Vue from 'vue'
import Router from 'vue-router';

import Home from './pages/Home';
import Hello from './pages/HelloMonday';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ],
  mode: 'history'
})