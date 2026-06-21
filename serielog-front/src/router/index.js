import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SerieNovaView from "../views/SerieNovaView.vue";
import SerieDetalheView from "../views/SerieDetalheView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/series/nova",
    name: "nova-serie",
    component: SerieNovaView
  },
  {
    path: "/series/:id",
    name: "detalhe-serie",
    component: SerieDetalheView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;