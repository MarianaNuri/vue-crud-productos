<script setup>
import {ref, onMounted} from "vue"
import { useRoute, useRouter } from "vue-router"
import {useProductoStore} from "../stores/useProductoStore"

const productoStore = useProductoStore()
const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const nombre = ref("")
const precio = ref("")
const imagen = ref("")

onMounted(() => {
  if(id) {
    const producto = productoStore.obtenerProductoPorId(id)

    if(producto) {
      nombre.value = producto.nombre
      precio.value = producto.precio
      imagen.value = producto.imagen
    }
  }
})

function guardarProducto(){
  const producto = {
    id: id ? id: Date.now(),
    nombre: nombre.value,
    precio: Number(precio.value),
    imagen: imagen.value
  }

  if(id) {
    productoStore.actualizarProducto(id, producto)
  } else {
    productoStore.crearProducto(producto)
  }
  router.push("/productos")
}
</script>

<template>

  <div class="contenedor">
    <h1 v-if="id">Editar producto</h1>
    <h1 v-else>Crear producto</h1>


    <form @submit.prevent="guardarProducto">
      <label>Nombre</label>
      <input v-model="nombre" required>

      <label>Precio</label>
      <input type="number" v-model="precio" required>

      <label>Imagen (URL)</label>
      <input v-model="imagen">

      <button class="btn guardar">Guardar</button>

    </form>
  </div>
</template>

<style>
.contenedor {
max-width: 500px;
margin: auto;
padding: 30px;
}

form {
display: flex;
flex-direction: column;
gap: 10px;
}

input {
padding: 8px;
border-radius: 6px;
border: 1px solid #ccc;
}

.guardar { 
background: #4caf50;
color: white;
padding: 10px;
border: none;
border-radius: 6px;
cursor: pointer;
}
</style>
