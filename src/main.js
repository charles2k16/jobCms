import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import mixin from './mixins';
import eventbus from "./eventbus";

import "./plugins/element/index.js";
import "@/assets/css/base.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";

Vue.mixin(mixin)
Vue.config.productionTip = false;
Vue.prototype.$eventbus = eventbus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
