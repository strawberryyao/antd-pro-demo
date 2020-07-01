import Vue from "vue";
import { Button } from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
