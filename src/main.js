import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import modal from "vue-js-modal";
import _ from "lodash";

// CSS
import "./assets/css/output.css";

Object.defineProperty(Vue.prototype, "$_", { value: _ });
Vue.config.productionTip = false;
Vue.use(modal, { dialog: true, dynamic: true });
const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
