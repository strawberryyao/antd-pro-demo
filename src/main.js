import Vue from "vue";
import { Button, Layout, Drawer, Icon, Radio } from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./my-theme-file.less";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Drawer);
Vue.use(Icon);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
