import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import BlogsView from '@/views/BlogsView'
import NotFound from '@/views/NotFound'
import Login from '@/views/Login'
import Register from '@/views/Register'
import ForgotPassword from '@/views/ForgotPassword'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/blogs",
    name: "BlogView",
    component: BlogsView,
    meta: {
      title: "Blogs"
    }
  },
  {
    path: "/login",
    name: "BlogsLogin",
    component: Login,
    meta: {
      title: "Login"
    }
  }, {
    path: "/register",
    name: "BlogsRegister",
    component: Register,
    meta: {
      title: "register"
    }
  }, {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "forgot password"
    }
  },
  {
    path: "/*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})

export default router;
