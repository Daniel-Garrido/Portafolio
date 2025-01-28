<script setup>
</script>

<template>

<!-- menu de navegacion -->
<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
  
  <!-- contenedor del menu -->
  <div class="container d-flex justify-content-between align-items-center">
    
    <!-- Ícono de menú (Logo o botón colapsable) -->
    <a class="menu-navegacion navbar-brand" href="#">
      <img src="../assets/Imagenes/logo.png" alt="Logo" class="d-inline-block align-text-top">
    </a>
    
    <!-- Menú de Navegación (centrado) -->
    <div class="menu collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="">Sobre mí</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="">Habilidades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="">Contactos</a>
        </li>
      </ul>
    </div>
    
    <!-- Íconos a la derecha -->
    <div class="d-flex gap-3">
      <i class="fas fa-moon"></i>
      <i class="fas fa-language"></i>
    </div>
    
  </div>
</nav>

</template>

<style>
.menu-navegacion img{
  width: 50px;
  height: 50px;
  object-fit: cover;
}



</style>