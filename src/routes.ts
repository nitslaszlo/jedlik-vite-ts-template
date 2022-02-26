import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import AboutView from "./views/AboutView.vue";
import StartPageView from "./views/StartPageView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    component: StartPageView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
