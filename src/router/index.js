import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../containers/Main";
import Login from "../views/Login";
import ProfileList from "../views/Profiles/ProfileList";
import CreateProfile from "../views/Profiles/CreateProfile";
import Reapply from "../views/Profiles/Reapply";
import Subscribers from "../views/Subscribers/Subscribers";
import Create from "../views/Subscribers/Create";
import ApplyProfile from "../views/Subscribers/ApplyProfile";



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
      },
      {
        path: "/reapply",
        name: "Reapply",
        component: Reapply
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Main,
    children: [
      {
        path: "/subscribers-list",
        name: "Subscribers List",
        component: Subscribers
      },
      {
        path: "/create-subscriber",
        name: "Create Subscriber",
        component: Create
      },
      {
        path: "/apply-profile",
        name: "Reapply Profile",
        component: ApplyProfile
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Main,
    children: [
      {
        path: "/users-list",
        name: "Users List",
        component: Subscribers
      },
      {
        path: "/create-user",
        name: "Create User",
        component: Create
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
