import Vue from "vue";
import Router from "vue-router";
import Grid from "./components/Grid";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Grid,
      meta: { mode: "home" },
    },
    {
      path: "/about",
      name: "about",
      component: Grid,
      meta: { mode: "about" },
    },
    {
      path: "/photos",
      name: "photos",
      component: Grid,
      meta: { mode: "photos" },
    },
    {
      path: "/projects",
      name: "projects",
      component: Grid,
      meta: { mode: "projects" },
    },
  ],
  mode: "history",
});
