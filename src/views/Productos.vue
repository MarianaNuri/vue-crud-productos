<script setup>

import { useProductoStore } from "../stores/useProductoStore"

const productoStore = useProductoStore()

</script>

<template>

<div class="contenedor">

<h1 class="titulo">🌿 Catálogo de Plantas</h1>

<p class="subtitulo">
Descubre plantas perfectas para decorar tu hogar
</p>

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

<button class="btn comprar">
Agregar
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
text-align:center;
}

.titulo{
font-size:40px;
color:#2e7d32;
}

.subtitulo{
color:#666;
margin-bottom:40px;
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

.botones{
display:flex;
justify-content:center;
gap:8px;
margin-top:10px;
}

.btn{
padding:8px 12px;
border:none;
border-radius:6px;
cursor:pointer;
font-size:13px;
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
