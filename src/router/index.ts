import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Home from "../pages/Home.vue";
// import Login from "../pages/Login.vue";
import Main from "../pages/Main.vue";
import Login from "../views/Login.vue";
import Register from "@/views/Register.vue";
import Detail from "@/views/Detail.vue";
import { localPath } from "@/defined/path";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/",
      name: "main",
      redirect: localPath.home,
      component: Main,
      children: [
        {
          path: localPath.login,
          name: "login",
          component: Login,
        },
        {
          path: localPath.home,
          name: "home",
          component: Home,
        },
        {
          path: localPath.register,
          name: "register",
          component: Register,
        },
        {
          path: localPath.detail,
          name: "detail",
          component: Detail,
        },
      ],
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: Login,
    // },
  ],
});
export default router;
