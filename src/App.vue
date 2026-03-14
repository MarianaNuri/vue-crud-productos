<template>

<nav>

<router-link to="/">Inicio</router-link>
<router-link to="/productos">Productos</router-link>
<router-link to="/carrito">Carrito</router-link>

</nav>

<router-view />

</template>

<style>

nav{
display:flex;
gap:20px;
padding:20px;
background:#eee;
}

</style>

