<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const fullName = "Daniel Arcángel Garrido Hoil";
const typedName = ref("");

const typeWriter = (text, delay = 100) => {
  let index = 0;
  const interval = setInterval(() => {
    typedName.value += text.charAt(index);
    index++;
    if (index === text.length) {
      clearInterval(interval);
    }
  }, delay);
}

//*** Botón para redireccionar al inicio ***//
onMounted(() => {
  typeWriter(fullName, 120);

});

onUnmounted(() => {
  typeWriter(fullName, 120);
});

</script>

<template>
<section id="inicio" class="inicio d-flex justify-content-center align-items-center vh-100 bg-light">
  <div class="contenedor-inicio container p-1 d-flex align-items-center gap-4">
    <div class="contenedor-info-inicio w-100">
      
      <h1 data-aos="fade-up" class="mb-2">{{ typedName }}</h1>
      <p data-aos="fade-down" class="text-muted mb-3">Diseñador Web!!</p>
      
      <div data-aos="fade-down" class="iconos d-flex mb-3 animacion-redes-sociales">
        <a href="https://www.linkedin.com/in/daniel-garrido-05138b225/" target="_blank" class="text-decoration-none me-3">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Daniel-Garrido" target="_blank" class="text-decoration-none me-3">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/daniel.garrido_/" target="_blank" class="text-decoration-none">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      
      <!-- Botón de contacto -->
      <a data-aos="fade-up" href="#contacto" class="btn text-white">Contacto</a>
    </div>
  </div>
</section>

</template>

<style>
/***** imagen de inicio *******/
.contenedor-img img {
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 50%;
}

/* estilo a la  seccion principal */
.contenedor-info-inicio h1 {
  font-size: 3.5rem;
  font-weight: bold;
}

/* estilo a los iconos */
.iconos a {
  font-size: 30px;
  padding-right: 10px;
}


/*************** media querys *****************/
@media (max-width: 500px) {

  /* responsive design al contenedor de inicio */
  .contenedor-Inicio {
    flex-direction: column;
  }

  .contenedor-info-inicio {
    justify-content: center;
    text-align: center;
  }

  .contenedor-info-inicio h1 {
    font-size: 2.5rem;
  }

  /* responsive design a los iconos */
  .iconos {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
</style>