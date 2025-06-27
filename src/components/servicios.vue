<script setup>
</script>

<template>

  <section id="servicios" class="seccion-servicios  bg-light">
    <div class="">
      <div class="text-center mb-5">
        <h2 class="text-dark scroll-animate" data-animacion="animate__backInDown">Servicios</h2>
        <hr class="hr">
      </div>

      <div class="seccion-servicios-content">

        <div class="seccion-servicios-content-card scroll-animate" data-animacion="animate__backInUp">
          <div class="">
            <div class="iconos mb-3 text-center">
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

        <div class="seccion-servicios-content-card scroll-animate" data-animacion="animate__backInDown">
          <div class="">
            <div class="iconos mb-3 text-center">
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

      </div>
    </div>


  </section>

</template>

<style>
.seccion-servicios {
  padding: 50px;
}

.seccion-servicios-content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
}

.seccion-servicios-content-card {
  width: 40%;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--color-principal);
}

@media (max-width: 500px) {

  .seccion-servicios {
    padding: 10px;
  }

  .seccion-servicios-content {
    flex-direction: column;
  }

  .seccion-servicios-content-card {
    width: 100%;
  }

}
</style>