import { createRouter, createWebHistory } from "vue-router";
import TopBar from "../layouts/TopBar.vue";
const routes = [
  {
    path: "/",
    component: TopBar,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("/src/pages/Home.vue"),
      },
      {
        path: "/projects",
        name: "projects",
        component: () => import("/src/pages/Projects.vue"),
      },
      {
        path: "/skills",
        name: "skills",
        component: () => import("/src/pages/Skills.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("/src/pages/Contact.vue"),
      },
      {
        path: "/resume",
        name: "resume",
        component: () => import("/src/pages/Resume.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
