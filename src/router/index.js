import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../containers/Main";
import Login from "../views/Login";
import ProfileList from "../views/Profiles/ProfileList";
import CreateProfile from "../views/Profiles/CreateProfile"

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
        component: ProfileList
      },
      {
        path: "/create-profiles",
        name: "Create Profiles",
        component: CreateProfile
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
