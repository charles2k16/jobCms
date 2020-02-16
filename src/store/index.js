import Vue from "vue";
import Vuex from "vuex";
import authenticate from "./modules/authenticate";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    authenticate
  },
  plugins: [
    createPersistedState()
  ]
})
