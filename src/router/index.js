import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";
import PropuestaView from "../views/PropuestaView.vue";
import MisionView from "../views/MisionView.vue";
import DonacionesView from "../views/DonacionesView.vue";
import ContactoView from "../views/ContactoView.vue";

export const routes = [
  { path: "/", name: "Inicio", component: InicioView },
  { path: "/propuesta", name: "Propuesta", component: PropuestaView },
  { path: "/mision", name: "Mision", component: MisionView },
  { path: "/donaciones", name: "Donaciones", component: DonacionesView },
  { path: "/contacto", name: "Contacto", component: ContactoView },
];

// component: () =>
//   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),

const router = createRouter({
  scrollBehaviour() {
    return { x: 0, y: 0 };
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
