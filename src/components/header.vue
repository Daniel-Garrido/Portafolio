<script setup>
import { ref, onMounted } from 'vue';

//Funncionalidad al menu de navegacion 
onMounted(() => {

  //enlaces del menu
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  //id del menu
  const navbarCollapse = document.getElementById('navbarNav');

  //evento al darle clic al menu
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      event.preventDefault();//evita el comportamiento por default del enlace

      //Obtener el ID de la seccion
      const targetId = link.getAttribute('href').substring(1);
      const targetSeccion = document.getElementById(targetId);

      //agregar scroll a los href del menu de navegacion
      if (targetSeccion) {
        targetSeccion.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      // Cierra el menú colapsable
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    });
  });

});

//---------efecto de modo oscuro-------------------

const isDarkMode = ref(false);
// Función para cambiar de tema
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark-mode'); // Agrega o quita la clase 'dark-mode'

  // Guardar en localStorage para recordar la preferencia
  localStorage.setItem('darkMode', isDarkMode.value);
};

// Verificar si el usuario ya tiene el modo oscuro activado
onMounted(() => {
  if (localStorage.getItem('darkMode') === 'true') {
    isDarkMode.value = true;
    document.body.classList.add('dark-mode');
  }
});

</script>

<template>

  <!-- menu de navegacion -->

  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">

    <div class="menu-navegacion container d-flex justify-content-between align-items-center">

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
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a id="link-inicio" class="nav-link active text-dark" href="#inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a id="link-sobre-mi" class="nav-link text-dark" href="#sobre-mi">Sobre mí</a>
          </li>
          <li class="nav-item">
            <a id="link-habilidades" class="nav-link text-dark" href="#habilidades">Habilidades</a>
          </li>
          <li class="nav-item">
            <a id="link-servicios" class="nav-link text-dark" href="#servicios">Servicios</a>
          </li>
          <li class="nav-item">
            <a id="link-proyectos" class="nav-link text-dark" href="#proyectos">Proyectos</a>
          </li>
          <li class="nav-item">
            <a id="link-contacto" class="nav-link text-dark" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>

      <!-- Íconos de modo oscuro y traductor -->
      <div class="iconos-moods d-none d-xl-flex ps-3">
        <i :class="isDarkMode ? 'fas fa-sun p-2' : 'fas fa-moon p-2'" @click="toggleDarkMode"
          style="cursor: pointer; font-size: 20px;">
        </i>
        <i class="fas fa-language p-2"></i>
      </div>

    </div>
  </nav>

</template>

<style>

.menu-navegacion img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.iconos-moods {
  cursor: pointer;
}

.navbar-nav {
  font-size: 18px;
}

.nav-item a {
  font-weight: 600;
}

/* estilos para el modo dark*/
.dark-mode {
  background-color: var(--color-dark-fondo);
  color: white;
}

/* color de subtitulos */
.dark-mode h2 {
  color: var(--color-principal) !important;
}
.dark-mode h3{
  color: var(--color-principal) !important;
}
/* color del text */
.dark-mode p {
  color: var(--color-principal) !important;
}

/* estilo al menu de navegacion */
.dark-mode .navbar {
  background-color: var(--color-dark-fondo) !important;
  color: white;
}
.dark-mode .nav-link {
  color: var(--color-principal) !important;
}

/* seccion de inicio */
.dark-mode .inicio {
  background-color: var(--color-dark) !important;
  color: var(--color-principal);
}

/* seccion de proyectos */
.dark-mode .proyectos-section-bg {
  background-color: var(--color-dark) !important;
}
.dark-mode .card-proyectos{
  background-color: var(--color-dark-fondo) !important;
}

/* seccion de habilidades */
.dark-mode .habilidades{
  background-color: var(--color-dark-fondo) !important;
}

.dark-mode .card{
  background-color: var(--color-dark-fondo) !important;
  border: 1px solid var(--color-principal);
}
/* seccion de servicios */
.dark-mode .seccion-servicios {
  background-color: var(--color-dark) !important;
}

.dark-mode .seccion-servicios-content-card{
  background-color: var(--color-dark) !important;
  border: 1px solid var(--color-principal);
}
.dark-mode .footer{
  background-color: var(--color-dark) !important;
}
.dark-mode .input {
  background-color: var(--color-dark-fondo) !important;
  border: 1px solid var(--color-principal);
  color: var(--color-principal) !important;
}
.dark-mode .p-5{
  padding: 15px !important;
}
/********  responsive design ***********/
@media(max-width: 500px) {

  .navbar-toggler {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }

  .navbar-toggler-icon {
    font-size: 25px;
  }

  .nav-item {
    padding: 5px 5px 5px 0px;
  }
}
</style>