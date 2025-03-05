<script setup>
</script>

<template>

<section id="servicios" class="seccion-servicios bg-light  d-flex align-items-center">
  <div class="container p-5">
    <div class="text-center mb-5">
      <h2 class="text-dark">Servicios</h2>
      <hr class="hr">
    </div>

    <main class="contenedor-servicios row g-4 justify-content-center">
      
      <!-- card diseñador -->
      <div class="col-md-6 col-lg-5">
        <div class="bg-white p-5 text-center h-100 card-custom">
          <div class=" iconos mb-3">
            <i class="fa-solid fa-pen-nib fa-3x text-primary"></i>
          </div>
          <h3 class="mb-3">Diseñador</h3>
          <div class="text-left">
            <p><i class="fa-solid fa-check text-success"></i> Diseño UI/UX</p>
            <p><i class="fa-solid fa-check text-success"></i> Maquetación web</p>
            <p><i class="fa-solid fa-check text-success"></i> Diseño de prototipos y mockups</p>
            <p><i class="fa-solid fa-check text-success"></i> Diseño de logos</p>
          </div>
          <a href="#contacto" class="btn btn-primary mt-3">Cotizar Proyecto</a>
        </div>
      </div>

      <!-- card desarrollador web -->
      <div class="col-md-6 col-lg-5">
        <div class="bg-white p-5 text-center  h-100 card-custom">
          <div class="iconos mb-3">
            <i class="fa-solid fa-code fa-3x text-primary"></i>
          </div>
          <h3 class="mb-3">Desarrollador Frontend</h3>
          <div class="text-left">
            <p><i class="fa-solid fa-check text-success"></i> Desarrollo de páginas web responsivas</p>
            <p><i class="fa-solid fa-check text-success"></i> Desarrollo de aplicaciones web</p>
            <p><i class="fa-solid fa-check text-success"></i> Optimización SEO</p>
            <p><i class="fa-solid fa-check text-success"></i> Desarrollo de landing page</p>
          </div>
          <a href="#contacto" class="btn btn-primary mt-3">Cotizar Proyecto</a>
        </div>
      </div>

    </main>
  </div>
</section>


</template>

<style>

@media (max-width: 500px){
  .contenedor-servicios{
  gap:30px;
}

}

</style>