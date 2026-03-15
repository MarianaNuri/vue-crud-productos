import { createRouter, createWebHashHistory } from "vue-router"

// Importación de las vistas principales de la aplicación
import Inicio from "../views/Inicio.vue"
import Productos from "../views/Productos.vue"

// IMPORTACIÓN DE LA VISTA DEL CARRITO
// Esta vista mostrará los productos agregados al carrito,
// el total de productos, el precio total y los botones
// para eliminar productos o vaciar el carrito.
import Carrito from "../views/Carrito.vue"

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
  },

  // -----------------------------
  // RUTA DEL CARRITO
  // -----------------------------
  // Permite navegar a la página del carrito
  // donde se mostrarán los productos añadidos,
  // el mensaje cuando el carrito está vacío,
  // el total de productos y el total a pagar.
  {
    path: "/carrito",
    name: "Carrito",
    component: Carrito
  }

]

const router = createRouter({

  // Se usa HashHistory para que funcione correctamente
  // cuando el proyecto se publique en GitHub Pages
  history: createWebHashHistory(),

  routes
})

export default router