import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("/src/pages/Home.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("/src/pages/Projects.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
