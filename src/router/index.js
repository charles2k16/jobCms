import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../containers/Main";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home",
    component: Main,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
