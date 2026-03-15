<template>

<header class="navbar">

<router-link to="/" class="logo">VerdeVida</router-link>

<nav class="menu">

<router-link to="/">Inicio</router-link>

<router-link to="/productos">Plantas</router-link>

<router-link to="/carrito">Carrito </router-link>
</nav>

</header>
<main class="contenido">
<router-view/>
</main>

</template>

<style>
body{
margin:0;
font-family: 'Segoe UI', sans-serif;
background:#f5f7f5;
}

.contenido {
    width: 100%;
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
font-size: 24px;
font-weight: bold;
text-decoration: none;
cursor: pointer;
}

.logo:hover {
transform: scale(1.05);
transition: 0.2s;
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
