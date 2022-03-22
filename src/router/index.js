import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PropuestaView from "../views/PropuestaView.vue";
import MisionView from "../views/MisionView.vue";
import DonacionesView from "../views/DonacionesView.vue";
import ContactoView from "../views/ContactoView.vue";

export const routes = [
  { path: "/", name: "Inicio", component: HomeView },
  { path: "/propuesta", name: "Propuesta", component: PropuestaView },
  { path: "/mision", name: "Mision", component: MisionView },
  { path: "/donaciones", name: "Donaciones", component: DonacionesView },
  { path: "/contacto", name: "Contacto", component: ContactoView },
];

// component: () =>
//   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
