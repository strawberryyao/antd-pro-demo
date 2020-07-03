import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkNameuser: "layouts" */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register.vue")
      }
    ]
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/home"
      },
      {
        path: "/home",
        component: () =>
          import(/* webpackChunkName: "user" */ "../layouts/Welcome.vue")
      },
      // dashboard
      {
        path: "/dashboard",
        meta: { icon: "setting", title: "基础设置" },
        name: "dashboard",
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/dashboard",
            redirect: "/dashboard/basic"
          },
          {
            path: "/dashboard/basic",
            meta: { title: "参数设置" },
            name: "basic",
            component: () =>
              import(
                /* webpackChunkName: "layout" */ "../views/Basic/index.vue"
              )
          }
        ]
      },
      {
        path: "/form",
        name: "form",
        meta: { icon: "form", title: "客户管理" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/form/basic",
            meta: { title: "客户服务" },
            name: "basicform",
            component: () =>
              import(
                /* webpackChunkName: "forms" */ "../views/Forms/BasicForm.vue"
              )
          }
        ]
      }
    ]
  },

  {
    path: "*",
    name: "404",
    hideInMenu: true,
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
