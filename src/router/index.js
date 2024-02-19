import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
const routes = [
  {
    path: "/auth",
    component: () => import("../layout/wrapper/MasterAdmin.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
