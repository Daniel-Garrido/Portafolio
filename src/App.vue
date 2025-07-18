<script setup>
// Importar los componentes al archivo principal
import Header from './components/header.vue';

// Importar funciones de Vue y la librería de emailjs
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
const showScrollButton = ref(false);

const handleScroll = () => {
  if (window.scrollY > 300) {
    showScrollButton.value = true;
  } else {
    showScrollButton.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  typeWriter(fullName, 120);

  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  typeWriter(fullName, 120);
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>

  <!-- seccion principal de la pagina -->
  <div id="app"> <!-- Botón de "ir arriba" --> <a href="#inicio" id="scrollToTop" class="btn-arriba "
      v-show="showScrollButton" @click.prevent="scrollToTop"> <i class="fas fa-arrow-up" aria-hidden="true"></i> </a>
    
    <Header /> <!-- seccion de inicio -->
    
    <section id="inicio" class="inicio d-flex justify-content-center align-items-center vh-100 bg-light ">
      <div class="contenedor-Inicio container p-1 d-flex align-items-center gap-4"> <!--Contenedor de  Información -->
        <div class="contenedor-info-inicio w-100 container ">
          <h1 class="mb-2 ">{{ typedName }}</h1>
          <p class="text-muted mb-3 ">Diseñador Web!!</p> <!-- Iconos -->
          <div class="iconos d-flex mb-3 animacion-redes-sociales "> <a
              href="https://www.linkedin.com/in/daniel-garrido-05138b225/" target="_blank"
              class="text-decoration-none me-6 "><i class="fab fa-linkedin"></i></a> <a
              href="https://github.com/Daniel-Garrido" target="_blank" class="text-decoration-none me-6 "><i
                class="fab fa-github"></i></a> <a href="https://www.instagram.com/daniel.garrido_/" target="_blank"
              class="text-decoration-none "><i class="fab fa-instagram"></i></a> </div> <!-- Botón de contacto --> <a
            href="#contacto" class="btn text-white">Contacto</a>
        </div>
      </div>
    </section>

  </div>

  <router-view />

</template>

<style>

/* estilo a los botones  */
.btn {
  padding: 5px 30px;
  background-color: #0F97F7;
  border: 1px solid #0F97F7;
  border-radius: 0px;
  transition: all 0.5s ease;
}

.btn:hover {
  background-color: white;
  transition: all 0.5s ease;
  color: #000 !important;
}

/**Estilo al btn para redireccionar al inicio */
.btn-arriba {
  width: 50px;
  height: 50px;

  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  color: white;
  background-color: #0f97f7;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  text-decoration: none;

  z-index: 1000;
  transition: all 0.5s ease;
}

.btn-arriba:hover {
  text-decoration: none;
  color: white;
  box-shadow: 0 8px 15px rgba(62, 182, 238, 0.5);
  ;
  transform: scale(1.1);
}

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