import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/events/ :id",
    name: "EventDetailsView",
    props: true,
    component: () => import("../views/EventDetailsView.vue"),
  },
  {
    path: "/orders/ :id",
    name: "OrdersViewView",
    props: true,
    component: () => import("../views/OrdersView.vue"),
  },
  {
    path: "/BestSales",
    name: "BestSales",
    component: () =>
      import("../views/BestSales.vue"),
  },
  {
    path: "/OrdersView",
    name: "OrdersView",
    component: () =>
      import("../views/OrdersView.vue"),
  },
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
