<script setup>

import { useProductoStore } from "../stores/useProductoStore"

// IMPORTAMOS EL STORE DEL CARRITO
import { useCarritoStore } from "../stores/useCarritoStore"

const productoStore = useProductoStore()

// CREAMOS LA INSTANCIA DEL CARRITO
const carritoStore = useCarritoStore()

</script>

<template>

<div class="contenedor">

<h1 class="titulo">Catálogo de Plantas</h1>

<p class="subtitulo">
Descubre plantas perfectas para decorar tu hogar
</p>

<router-link to="/productos/crear" class="btn crear">
    + Nueva planta
</router-link>

<div class="grid">

<div
class="card"
v-for="producto in productoStore.productos"
:key="producto.id"
>

<img :src="producto.imagen" class="imagen">

<h2>{{ producto.nombre }}</h2>

<p class="precio">$ {{ producto.precio }}</p>

<div class="botones">

<!-- BOTÓN PARA AGREGAR AL CARRITO -->
<!-- cuando se presiona, se manda el producto al store del carrito -->
<button 
class="btn comprar"
@click="carritoStore.agregarAlCarrito(producto)"
>
Agregar
</button>

<router-link :to="`/productos/${producto.id}`"class="btn editar">
Editar
</router-link>

<button class="btn eliminar" @click="productoStore.eliminarProducto(producto.id)">
Eliminar
</button>

</div>

</div>

</div>

</div>

</template>

<style>

.contenedor {
width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
  padding: 40px 20px;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  
}

.titulo {
  font-size: 40px;
  color: #2e7d32;
  margin-bottom: 10px;
}

.subtitulo {
  color: #666;
  margin-bottom: 30px;
}

.grid {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(250px, 1fr)) !important;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 980px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.card {
  /*background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;*/
background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 400px;
 
}

.card:hover {
  transform: translateY(-8px);
}

.imagen {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.precio {
  font-size: 18px;
  font-weight: bold;
  color: #2e7d32;
  margin: 10px 0;
}

.botones {
  display: flex;
  flex-direction: row; 
  justify-content: center;
  gap: 5px; 
  margin-top: auto; 
  padding-top: 15px;
}

.btn {
  padding: 8px 15px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  border: none;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background: #157f1a;
}

.comprar{
background:#4caf50;
color:white;
}

.editar{
background:#2196f3;
color:white;
}

.eliminar{
background:#e53935;
color:white;
}

.btn:hover{
opacity:0.8;
}
</style>
