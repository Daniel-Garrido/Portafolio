<script>
</script>

<template>
  <footer class="bg-dark footer p-4">

    <section class="container section-footer">

      <!-- contenido del footer -->
      <div class="section-footer-content">
        <h3 data-aos="fade-down" class="text-white">
          Daniel Garrido
        </h3>
        <p class="text pt-2">
          Ingeniero en sistemas computacionales especializado en Desarrollo de Software y diseño web
        </p>
      </div>

      <!-- iconos de redes sociales -->
      <div class="section-footer-content-footer iconos iconos-footer d-flex  animacion-redes-sociales">
        <a href="https://www.linkedin.com/in/daniel-garrido-05138b225/" target="_blank"
          class="text-decoration-none me-6 "><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Daniel-Garrido" target="_blank" class="text-decoration-none me-6 "><i
            class="fab fa-github"></i></a>
        <a href="https://www.instagram.com/daniel.garrido_/" target="_blank" class="text-decoration-none "><i
            class="fab fa-instagram"></i></a>
      </div>


    </section>
    
    <!-- Derechos reservados -->
    <div class="contenedor-copryrigth mt-5">
      <p class="text-center text-white">
        &copy; Daniel Garrido | todos los derechos reservados.
      </p>
    </div>

  </footer>

</template>

<style>
.section-footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.iconos-footer {
  justify-content: left !important;
}

.contenedor-copryrigth {
  padding: 20px;
  border-top: 1px solid white;
}

.contenedor-copryrigth p {
  font-size: 14px;
  font-weight: 100;
}

@media(max-width: 500px){
  .section-footer{
  flex-direction: column;
}
}
</style>