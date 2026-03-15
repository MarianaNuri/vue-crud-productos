<template>

<header class="navbar">

<h1 class="logo">VerdeVida</h1>

<nav class="menu">

<router-link to="/">Inicio</router-link>

<router-link to="/productos">Plantas</router-link>

<router-link to="/carrito">Carrito </router-link>

</nav>

</header>

<router-view/>

</template>

<style>

body{
margin:0;
font-family: 'Segoe UI', sans-serif;
background:#f5f7f5;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 60px;
background:white;
box-shadow:0 2px 8px rgba(0,0,0,0.1);
}

.logo{
color:#2e7d32;
}

.menu{
display:flex;
gap:30px;
}

.menu a{
text-decoration:none;
color:#333;
font-weight:500;
}

.menu a:hover{
color:#2e7d32;
}

</style>
