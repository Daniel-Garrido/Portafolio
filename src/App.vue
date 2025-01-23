<script setup>

//importar los componentes al archivo principal 
import Header from './components/header.vue';
import SobreMi from './components/sobre-mi.vue';

</script>

<template>

  <div id="app">

    <Header />

    <!-- seccion de inicio -->
    <section class="d-flex justify-content-center align-items-center vh-100 bg-light ">

      <div class="container p-1 d-flex align-items-center gap-4">
        <!--Contenedor de Imagen -->
        <div class="contenedor-img d-flex justify-content-center bg-white">
          <img src="./assets/Imagenes/logo.png" alt="Daniel Garrido">
        </div>

        <!--Contenedor de  Información -->
        <div class="contenedor-info w-100 container  bg-white">
          <h1 class="mb-2">Daniel Arcángel Garrido Hoil</h1>
          <p class="text-muted mb-3">Diseñador Web!!</p>
          <!-- Iconos -->
          <div class="iconos d-flex mb-3">
            <a href="#" class="text-decoration-none me-6 text-dark "><i class="fab fa-linkedin"></i></a>
            <a href="#" class="text-decoration-none me-6 text-dark "><i class="fab fa-github"></i></a>
            <a href="#" class="text-decoration-none text-dark"><i class="fab fa-instagram"></i></a>
          </div>
          <!-- Botón de contacto -->
          <a href="#" class=" btn text-white ">Contacto</a>
        </div>
      </div>

    </section>

    <SobreMi />
  
  </div>

</template>

<style>

.contenedor-img img{
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 50%;
}

.iconos a{
  font-size: 20px;
  padding-right: 10px;
}
.btn{
  padding: 5px 30px;
  background-color: #0F97F7;
  border: 1px solid #0F97F7;
  transition: all 0.5s ease;
}


.btn:hover{
  background-color: white;
  transition: all 0.5s ease;
  color: #000 !important;
}
</style>