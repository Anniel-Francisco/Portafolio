import { createWebHashHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../layouts/TopBar.vue"),
    children: [
      {
        path: "/",
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
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
