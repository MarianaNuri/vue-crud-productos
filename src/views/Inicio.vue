<template>

<div class="hero">

<h1>Bienvenid@ a VerdeVida</h1>

<p>
Encuentra plantas perfectas para tu hogar y oficina
</p>


<router-link to="/productos" class="boton">
Ver catálogo
</router-link>

</div>

<footer class="integrantes">

<h2>Integrantes del equipo</h2>

<ul>
<li>Mariana Chávez Nuricumbo</li>
<li>Eva del Carmen González Sántiz</li>
<li>Yazmin Guadalupe chacón Hernández </li>
</ul>

</footer>


</template>

<style>

.hero{
height:70vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
}

.hero h1{
font-size:50px;
color:#2e7d32;
}

.hero p{
font-size:18px;
color:#555;
margin:20px 0;
}

.boton{
background:#4caf50;
color:white;
padding:12px 20px;
border-radius:8px;
text-decoration:none;
font-weight:bold;
}

.boton:hover{
background:#388e3c;
}

.integrantes{
margin-top:60px;
background:white;
padding:25px;
border-radius:12px;
box-shadow:0 5px 10px rgba(0,0,0,0.08);
width:300px;
text-align:center;
}

.integrantes h2{
color:#2e7d32;
margin-bottom:10px;
}

.integrantes ul{
list-style:none;
padding:0;
}

.integrantes li{
padding:5px;
color:#444;
}


</style>
