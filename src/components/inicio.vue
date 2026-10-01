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
  <section id="inicio" class="inicio d-flex justify-content-center align-items-center vh-100 bg-body">

    <div class="container">

      <div class="contenedor-inicio d-flex align-items-center gap-4">

        <!-- contenedor info -->
        <div class="contenedor-info-inicio w-50 p-4">

          <h1 data-aos="fade-up" class="mb-2">Daniel Garrido </h1>
          <p data-aos="fade-down" class="span-content mb-3">{{ typedName }}</p>
          <p data-aos="fade-up" class="contenedor-info-inicio-text">
            Ingeniero en sistemas computacionales y Desarrollador Full Stack con experiencia en el diseño, desarrollo y
            mantenimiento de aplicaciones web escalables. Especializado en el <span class="span-content">desarrollo
              backend</span> con Laravel e
            interfaces
            dinámicas con <span class="span-content">React, JavaScript y TypeScript</span>. <br>
            Cuento además con experiencia como Diseñador Web mediante
            WordPress y Elementor, optimizando la maquetación y la experiencia visual de los proyectos. Capaz de
            adaptarme a proyectos de diversa complejidad en todo el ciclo de vida del software y con manejo de <span
              class="span-content">inglés
              técnico</span> (B1).
          </p>

          <!-- Contenedor de redes sociales -->
          <div data-aos="fade-down" class="contenedor-redes-sociales d-flex flex-wrap justify-content-start mb-3 animacion-redes-sociales gap-2">

            <!-- Icono de LinkedIn -->
            <div class="iconos contenedor-redes-sociales-links d-flex justify-content-center align-items-center gap-2">
              <a href="https://www.linkedin.com/in/daniel-garrido-05138b225/" target="_blank"
                class="text-decoration-none text-body">
                <i class="fab fa-linkedin"></i>
                linkedin
              </a>
            </div>

            <!-- Icono de Github -->
            <div class="iconos contenedor-redes-sociales-links d-flex justify-content-center align-items-center gap-2">
              <a href="https://github.com/Daniel-Garrido" target="_blank" class="text-decoration-none text-body">
                <i class="fab fa-github"></i>
                Github
              </a>
            </div>

            <!-- Icono de Instagram -->
            <div class="iconos contenedor-redes-sociales-links d-flex justify-content-center align-items-center gap-2">
              <a href="https://www.instagram.com/daniel.garrido_/" target="_blank"
                class="text-decoration-none text-body">
                <i class="fab fa-instagram"></i>
                Instagram
              </a>
            </div>

          </div>

        </div>
        <!-- contenedor img -->
        <div class="d-flex justify-content-center contenedor-inicio-img w-50 p-4">
          <img data-aos="fade-up" class="rounded-circle" src="/logos/FOTOPRINCIPAL.webp" alt="Foto principal"
            fetchpriority="high" loading="eager" decoding="async">
        </div>


      </div>
    </div>

  </section>
</template>

<style>


/* estilo a la  seccion principal */
.contenedor-info-inicio h1 {
  font-size: 4rem;
  font-weight: 900;
}

.contenedor-info-inicio p {
  font-size: 2rem;
}

.contenedor-info-inicio-text {
  font-size: 1rem !important;
  text-align: left;
}

/* estilo a los iconos */
.iconos a {
  font-size: 20px;
  padding-right: 10px;
}

.contenedor-inicio-img img {
  width: 80%;
}

.contenedor-redes-sociales-links {
  border: 1px solid var(--color-borde);
  border-radius: 15px;
  padding: 5px 15px;
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

  /* Centrar los botones de redes igual que el texto */
  .contenedor-redes-sociales {
    justify-content: center !important;
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

  /* Botones de redes más compactos para que quepan en pantallas pequeñas */
  .contenedor-redes-sociales-links {
    padding: 4px 10px;
  }

  .contenedor-redes-sociales-links a {
    font-size: 15px;
    padding-right: 0;
  }

  .contenedor-redes-sociales-links i {
    font-size: 22px;
    vertical-align: middle;
  }

}
</style>