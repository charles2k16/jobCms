import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../containers/Main";
import Login from "../views/Login";
import ProfileList from "../views/profiles/ProfileList";
import CreateProfile from "../views/profiles/CreateProfile";
import Reapply from "../views/profiles/Reapply";
import Subscriberlist from "../views/subscribers/Subscriberlist"
import CreateSubscriber from "../views/subscribers/CreateSubscriber"
import SubscriberApply from "../views/subscribers/SubscriberApply"
import UserList from "../views/users/UserList"
import UserCreate from "../views/users/UserCreate"


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
        name: "Profile-List",
        component: ProfileList
      },
      {
        path: "/create-profiles",
        name: "Profile-Create",
        component: CreateProfile
      },
      {
        path: "/reapply",
        name: "Profile-Reapply",
        component: Reapply
      },
      {
        path: "/subcribers",
        name: "Subscribers-List",
        component: Subscriberlist
      },
      {
        path: "/create-subscribers",
        name: "Subscribers-Create",
        component: CreateSubscriber
      },
      {
        path: "/subcriber-apply",
        name: "Subscribers-Apply",
        component: SubscriberApply
      },
      {
        path: "/users",
        name: "Users-List",
        component: UserList
      },
      {
        path: "/ceate-user",
        name: "Users-Create",
        component: UserCreate
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
