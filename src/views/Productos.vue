<script setup>

import { useProductoStore } from "../stores/useProductoStore"

const productoStore = useProductoStore()

</script>

<template>

<div class="contenedor">

<h1 class="titulo">Catálogo de Plantas</h1>

<div class="grid">

<div
class="card"
v-for="producto in productoStore.productos"
:key="producto.id"
>

<img :src="producto.imagen" class="imagen">

<h2>{{ producto.nombre }}</h2>

<p class="precio">
$ {{ producto.precio }}
</p>

<div class="botones">

<button class="btn agregar">
Agregar al carrito
</button>

<button class="btn editar">
Editar
</button>

<button class="btn eliminar">
Eliminar
</button>

</div>

</div>

</div>

</div>

</template>

<style>

.contenedor{
max-width:1200px;
margin:auto;
padding:40px;
font-family:Segoe UI;
}

.titulo{
text-align:center;
margin-bottom:30px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:white;
border-radius:12px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
padding:20px;
text-align:center;
transition:0.3s;
}

.card:hover{
transform:translateY(-5px);
}

.imagen{
width:100%;
height:180px;
object-fit:cover;
border-radius:8px;
}

.precio{
font-size:18px;
font-weight:bold;
margin:10px 0;
}

.botones{
display:flex;
justify-content:center;
gap:8px;
flex-wrap:wrap;
}

.btn{
padding:6px 10px;
border:none;
border-radius:6px;
cursor:pointer;
}

.agregar{
background:#42b883;
color:white;
}

.editar{
background:#3498db;
color:white;
}

.eliminar{
background:#e74c3c;
color:white;
}

</style>
