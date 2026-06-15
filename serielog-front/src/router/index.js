import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NovaPlaylistView from "../views/NovaPlaylistView.vue";
import ProdutoDetalheView from "../views/ProdutoDetalheView.vue"; 

const routes = [
  { path: "/", component: HomeView },
  { path: "/playlists/nova", component: NovaPlaylistView },
  { path: "/products/:id", component: ProdutoDetalheView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;