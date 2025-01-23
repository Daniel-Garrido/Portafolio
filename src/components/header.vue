<script setup>
</script>

<template>

  <nav class=" navbar navbar-expand-lg navbar-light bg-white fixed-top">
    
    <div class="menu-navegacion container">
      
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="../assets/Imagenes/logo.png" alt="Logo" class="d-inline-block align-text-top">
      </a>

      <!-- Botón para el menú colapsable -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Contenido del Menú -->
      <div class="collapse navbar-collapse" id="navbarNav">
        
        <ul class="navbar-nav ms-auto">
          
          <li class="nav-item">
            <a class="nav-link active text-dark" aria-current="page" href="">Inicio</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active text-dark" aria-current="page" href="">Sobre mi</a>
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
    </div>
  </nav>

</template>

<style>
.menu-navegacion img{
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
}
</style>