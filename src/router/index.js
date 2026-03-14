import { createRouter, createWebHashHistory } from "vue-router"

import Inicio from "../views/Inicio.vue"
import Productos from "../views/Productos.vue"

const routes = [

  {
    path: "/",
    name: "Inicio",
    component: Inicio
  },

  {
    path: "/productos",
    name: "Productos",
    component: Productos
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
