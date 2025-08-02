<script setup>

// Importar los componentes al archivo principal
import Header from './components/header.vue';


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
  <div id="app"> 

    <!-- Botón de "ir arriba" --> 
    <a href="#inicio" id="scrollToTop" class="btn-arriba "
      v-show="showScrollButton" @click.prevent="scrollToTop"> <i class="fas fa-arrow-up" aria-hidden="true"></i> 
    </a>
    <!-- seccion de menu de navegacion -->
    <Header /> 
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
</style>