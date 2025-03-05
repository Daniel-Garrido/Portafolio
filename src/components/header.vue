<script setup>
</script>

<template>

<!-- menu de navegacion -->

<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
  
  <div class="menu-navegacion container d-flex justify-content-between align-items-center">
    
    <!-- Logo -->
    <a class="navbar-brand" href="#">
      <img src="../assets/Imagenes/logo.png" alt="Logo" class="d-inline-block align-text-top">
    </a>

    <!-- Botón para el menú colapsable -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Contenido del Menú -->
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-dark" href="#inicio">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#sobre-mi">Sobre mí</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#habilidades">Habilidades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#servicios">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#proyectos">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>

    <!-- Íconos de modo oscuro y traductor -->
    <div class="iconos-moods d-none d-xl-flex ps-3">
      <i class="fas fa-moon p-2"></i>
      <i class="fas fa-language p-2"></i>
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

.iconos-moods{
  cursor: pointer;
}


</style>