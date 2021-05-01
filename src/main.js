import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "jquery/src/jquery.js";
// import "popper.js/dist/popper.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import "./filters"; // Global Filters

import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
