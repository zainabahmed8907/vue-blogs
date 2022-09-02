import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import BlogsView from '@/views/BlogsView'
import NotFound from '@/views/NotFound'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/blogs",
    name: "BlogView",
    component: BlogsView
  }, {
    path: "/*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
