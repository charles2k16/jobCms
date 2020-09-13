import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import mixin from './mixins';
import vuetify from "./plugins/vuetify";
import "./plugins/element/index.js";
import "roboto-fontface/css/roboto/roboto-fontface.css";

Vue.mixin(mixin)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
