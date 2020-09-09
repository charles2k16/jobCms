import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../containers/Main";
import Login from "../views/Login";
import Profiles from "../views/Profiles/Profiles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/profiles",
    name: "Home",
    component: Main,
    children: [
      {
        path: "/profiles",
        name: "profiles",
        component: Profiles
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
