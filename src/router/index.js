import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/shops",
      name: "Shops",
      component: () => import("@/views/Shops.vue"),
    },
    {
      path: "/films",
      name: "Films",
      component: () => import("@/views/Films.vue"),
    },
    {
      path: "/cafes",
      name: "Cafes",
      component: () => import("@/views/Cafes.vue"),
    },
    {
      path: "/news",
      name: "News",
      component: () => import("@/views/News.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/views/Contact.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue"),
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
