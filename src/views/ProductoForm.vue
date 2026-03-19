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
const errores = ref({
  nombre: "",
  precio: ""
})

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
  /*Validaciones para que los campos no queden vacias */
  errores.value.nombre = ""
  errores.value.precio = ""

  let valido = true

  if(!nombre.value) {
    errores.value.nombre = "El nombre es obligatorio"
    valido = false
  }

  if(!precio.value) {
    errores.value.precio = "El precio es obligatorio"
    valido = false
  }

  if (!valido) return

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
      <input v-model="nombre" :class="{invalido: errores.nombre}">
      <small v-if="errores.nombre" class="error">{{ errores.nombre }}</small>

      <label>Precio</label>
      <input type="number" v-model="precio" :class="{invalido: errores.precio}">
      <small v-if="errores.precio" class="error">{{ errores.precio }}</small>

      <label>Imagen (URL)</label>
      <input v-model="imagen">

      <button class="btn guardar">Guardar</button>

    </form>
  </div>
</template>

<style>
.contenedor {
width: 100%;
max-width: 600px;
margin: auto;
padding: 30px;
}

form {
display: flex;
flex-direction: column;
gap: 10px;
width: 100%;
}

input {
padding: 8px;
border-radius: 6px;
border: 1px solid #ccc;
width: 100%;
}

.error {
  color: red;
  font-size: 12px;
}

.invalido {
  border: 1px solid red;
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
