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
    {
      path: "/shop/detail/:id",
      name: "ShopDetail",
      component: () => import("@/views/ShopDetail.vue")
    },
    {
      path: "/cafes/detail/:id",
      name: "CafesDetail",
      component: () => import("@/views/CafesDetail.vue")
    },
    {
      path: "/news/detail/:id",
      name: "NewsDetail",
      component: () => import("@/views/NewsDetail.vue")
    },
    {
      path: "/360",
      name: "View360",
      component: () => import("@/views/View360.vue")
    },
    {
      path: "/terms",
      name: "Terms",
      component: () => import("@/views/Terms.vue"),
    },
    {
      path: "/schema/:id",
      name: "Schema",
      component: () => import("@/views/Schema.vue"),
    },
  ],
  scrollBehavior() {
    // document.getElementById("app").scrollIntoView();
  },
});

export default router;
