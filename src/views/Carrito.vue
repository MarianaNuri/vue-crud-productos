<script setup>

import { useCarritoStore } from "../stores/useCarritoStore"

const carritoStore = useCarritoStore()

</script>

<template>

<div class="contenedor">

<h1 class="titulo">Carrito de Compras</h1>

<!-- MENSAJE SI EL CARRITO ESTA VACIO -->
<div v-if="carritoStore.carrito.length === 0" class="vacio">
Tu carrito está vacío 🌱
</div>

<!-- LISTA DE PRODUCTOS -->
<div v-else class="grid">

<div
class="card"
v-for="producto in carritoStore.carrito"
:key="producto.id"
>

<img :src="producto.imagen" class="imagen">

<h2>{{ producto.nombre }}</h2>

<p class="precio">$ {{ producto.precio }}</p>

<button
class="btn eliminar"
@click="carritoStore.eliminarDelCarrito(producto.id)"
>
Eliminar
</button>

</div>

</div>

<!-- TOTAL -->
<div v-if="carritoStore.carrito.length > 0" class="total">

<!-- CAMBIADO: ahora usa el getter correcto -->
<h2>Total: $ {{ carritoStore.totalPrecio }}</h2>

<!-- CAMBIADO: usa el getter de total de artículos -->
<p>Número de productos: {{ carritoStore.totalArticulos }}</p>

<button
class="btn vaciar"
@click="carritoStore.vaciarCarrito()"
>
Vaciar carrito
</button>

</div>

</div>

</template>

<style>

.contenedor{
max-width:1200px;
margin:auto;
padding:40px;
text-align:center;
}

.titulo{
font-size:40px;
color:#2e7d32;
margin-bottom:30px;
}

.vacio{
font-size:20px;
color:#777;
margin-top:40px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.card{
background:white;
border-radius:15px;
padding:20px;
box-shadow:0 6px 15px rgba(0,0,0,0.1);
transition:0.3s;
display:flex;
flex-direction:column;
align-items:center;
}

.card:hover{
transform:translateY(-8px);
}

.imagen{
width:100%;
height:200px;
object-fit:cover;
border-radius:10px;
margin-bottom:10px;
}

.precio{
font-size:18px;
font-weight:bold;
color:#2e7d32;
}

.btn{
padding:8px 12px;
border:none;
border-radius:6px;
cursor:pointer;
font-size:13px;
margin-top:10px;
}

.eliminar{
background:#e53935;
color:white;
}

.vaciar{
background:#ff9800;
color:white;
margin-top:15px;
}

.btn:hover{
opacity:0.8;
}

.total{
margin-top:40px;
font-size:20px;
}

</style>