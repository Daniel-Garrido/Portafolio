<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const fullName = "Ingeniero en sistemas";
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
  <section id="inicio" class="inicio d-flex justify-content-center align-items-center vh-100 bg-white">

    <div class="container">

      <div class="contenedor-inicio d-flex align-items-center gap-4">

        <!-- contenedor info -->
        <div class="contenedor-info-inicio w-50 p-4">

          <h1 data-aos="fade-up" class="mb-2">Hola, Soy Daniel Garrido </h1>
          <p data-aos="fade-down" class="span-content mb-3">{{ typedName }}</p>
          <p data-aos="fade-up" class="contenedor-info-inicio-text">
            Soy Ingeniero en Sistemas Computacionales que une la lógica del <span class="span-content">Desarrollo de
              Software </span> con la creatividad
            del diseño.

            Mi enfoque se centra en el <span class="span-content">Desarrollo Web completo, </span> complementado con una
            fuerte habilidad en Diseño UI/UX
            para traducir requisitos complejos en interfaces sencillas y efectivas.

            Cuento con experiencia en <span class="span-content">Diseño Web </span> y estoy comprometido con la entrega
            de soluciones que no solo funcionen
            a la perfección, sino que también deleiten al usuario.
          </p>

          <!-- Contenedor de redes sociales -->
          <div data-aos="fade-down" class=" iconos d-flex justify-content-center mb-3 animacion-redes-sociales">
            <a href="https://www.linkedin.com/in/daniel-garrido-05138b225/" target="_blank"
              class="text-decoration-none me-3">
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
          <div class="d-flex justify-content-center ">
            <div data-aos="fade-up" class="btn-primario">
              <a href="#contacto" class="">Contacto</a>
            </div>
          </div>


        </div>

        <!-- contenedor img -->
        <div data-aos="fade-up" class="d-flex justify-content-center contenedor-inicio-img  w-50 p-4">
          <img class="rounded-circle" src="/logos/FOTOPRINCIPAL.webp" alt="">
        </div>

      </div>
    </div>

  </section>
</template>

<style>

/* estilo a la  seccion principal */
.contenedor-info-inicio h1 {
  font-size: 2.5rem;
}

.contenedor-info-inicio p {
  font-size: 1.5rem;
}

.contenedor-info-inicio-text {
  font-size: 1rem !important;
  text-align: justify;
}

/* estilo a los iconos */
.iconos a {
  font-size: 20px;
  padding-right: 10px;
}

.contenedor-inicio-img img {
  width: 80%;
}

/*************** media querys *****************/
@media (max-width: 900px) {
  .contenedor-inicio {
    flex-direction: column;
  }

  .contenedor-inicio-img {
    order: 1;
    width: 100% !important;
    text-align: center;
  }

  .contenedor-inicio-img img {
    width: 100%;
    height: auto;
    max-width: 300px;
  }

  .contenedor-info-inicio {
    order: 2;
    width: 100% !important;
    padding: 20px;
    text-align: center;
  }

}

/* Medioa querys apartir de 500 px */
@media (max-width: 500px) {

  #inicio {
    padding-top: 100px;
    height: auto !important;
  }


  .contenedor-inicio-img img {
    width: 70%;
  }

  .contenedor-info-inicio h1 {
    font-size: 2.2rem;
  }

  .contenedor-info-inicio-text {
  font-size: 14px !important;
}

}
</style>