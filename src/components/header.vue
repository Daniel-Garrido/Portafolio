<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTheme } from '../composables/useTheme';
import logoLight from '../assets/Imagenes/logo.png';
import logoDark from '../assets/Imagenes/Logo_Dark.png';

const route = useRoute();
const router = useRouter();

// Enlaces del menú de navegación (id = id de la sección en Home)
const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'certificados', label: 'Certificados' },
];

//---------modo oscuro (data-bs-theme de Bootstrap 5.3)-------------------
const { isDark, toggleTheme } = useTheme();

// Logo según el tema activo
const logoSrc = computed(() => (isDark.value ? logoDark : logoLight));

//---------menú desplegable en móvil-------------------
const menuAbierto = ref(false);

const cerrarMenu = () => {
  menuAbierto.value = false;
};

const toggleMenu = () => {
  menuAbierto.value = !menuAbierto.value;
};

// Evita que la página haga scroll detrás del menú abierto
watch(menuAbierto, (abierto) => {
  document.body.style.overflow = abierto ? 'hidden' : '';
});

// Cerrar con la tecla Escape
const onKeydown = (event) => {
  if (event.key === 'Escape') cerrarMenu();
};

// Cerrar si la pantalla pasa a tamaño escritorio
const mqEscritorio = window.matchMedia('(min-width: 992px)');
const onCambioPantalla = (event) => {
  if (event.matches) cerrarMenu();
};

//---------sombra del header al hacer scroll-------------------
const conScroll = ref(false);
const onScroll = () => {
  conScroll.value = window.scrollY > 10;
};

//---------sección activa (resalta el enlace de la sección visible)-------------------
const seccionActiva = ref('inicio');
let observer = null;

const observarSecciones = () => {
  observer?.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) seccionActiva.value = entry.target.id;
      });
    },
    // Se considera activa la sección que cruza la franja central de la pantalla
    { rootMargin: '-45% 0px -50% 0px' }
  );
  links.forEach(({ id }) => {
    const seccion = document.getElementById(id);
    if (seccion) observer.observe(seccion);
  });
};

//---------navegación a las secciones-------------------
const irASeccion = async (id) => {
  cerrarMenu();

  // Si estamos en otra vista (ej. detalle de proyecto), volver primero a Home
  if (route.name !== 'Home') {
    await router.push({ name: 'Home' });
    await nextTick();
    // Espera a que el scrollBehavior del router (scroll al inicio) termine antes de desplazarse
    await new Promise((resolve) => setTimeout(resolve, 60));
  }

  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Al volver a Home se vuelven a observar sus secciones
watch(
  () => route.name,
  async (nombre) => {
    if (nombre === 'Home') {
      await nextTick();
      observarSecciones();
    }
  }
);

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
  window.addEventListener('scroll', onScroll, { passive: true });
  mqEscritorio.addEventListener('change', onCambioPantalla);
  onScroll();
  observarSecciones();
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  window.removeEventListener('scroll', onScroll);
  mqEscritorio.removeEventListener('change', onCambioPantalla);
  observer?.disconnect();
  document.body.style.overflow = '';
});
</script>

<template>

  <header class="site-header bg-body" :class="{ 'site-header--scroll': conScroll || menuAbierto }">

    <!-- menu de navegacion -->
    <nav class="container site-nav" aria-label="Navegación principal">

      <!-- Logo -->
      <a class="site-nav__logo" href="#inicio" @click.prevent="irASeccion('inicio')" aria-label="Ir al inicio">
        <img :src="logoSrc" alt="Logo de Daniel Garrido" width="50" height="50">
      </a>

      <!-- Enlaces en escritorio -->
      <ul class="site-nav__links">
        <li v-for="link in links" :key="link.id">
          <a :href="`#${link.id}`" class="site-nav__link"
            :class="{ 'is-active': seccionActiva === link.id }"
            :aria-current="seccionActiva === link.id ? 'true' : null" @click.prevent="irASeccion(link.id)">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Acciones: tema, idioma y botón del menú móvil -->
      <div class="site-nav__acciones">
        <!-- En móvil el cambio de tema está dentro del menú desplegable -->
        <button type="button" class="btn-icono btn-icono--tema d-none d-lg-inline-flex" @click="toggleTheme"
          :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'" :aria-pressed="isDark"
          :title="isDark ? 'Modo claro' : 'Modo oscuro'">
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'" aria-hidden="true"></i>
        </button>

        <button type="button" class="btn-icono d-none d-lg-inline-flex" aria-label="Cambiar idioma" title="Idioma">
          <i class="fas fa-language" aria-hidden="true"></i>
        </button>

        <!-- Botón hamburguesa (solo móvil) -->
        <button type="button" class="btn-hamburguesa d-lg-none" :class="{ 'is-open': menuAbierto }"
          @click="toggleMenu" :aria-expanded="menuAbierto" aria-controls="menu-movil"
          :aria-label="menuAbierto ? 'Cerrar menú' : 'Abrir menú'">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <!-- Menú desplegable en móvil -->
    <Transition name="menu-movil">
      <div v-show="menuAbierto" id="menu-movil" class="menu-movil d-lg-none">
        <ul class="menu-movil__lista container">
          <li v-for="(link, i) in links" :key="link.id" :style="{ '--i': i }">
            <a :href="`#${link.id}`" class="menu-movil__link"
              :class="{ 'is-active': seccionActiva === link.id }"
              :aria-current="seccionActiva === link.id ? 'true' : null" @click.prevent="irASeccion(link.id)">
              <span class="menu-movil__texto">{{ link.label }}</span>
            </a>
          </li>
        </ul>

        <!-- Preferencias dentro del menú móvil -->
        <div class="menu-movil__preferencias container" :style="{ '--i': links.length }">
          <button type="button" class="menu-movil__pref" @click="toggleTheme" :aria-pressed="isDark">
            <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'" aria-hidden="true"></i>
            {{ isDark ? 'Modo claro' : 'Modo oscuro' }}
          </button>
          <button type="button" class="menu-movil__pref" aria-label="Cambiar idioma">
            <i class="fas fa-language" aria-hidden="true"></i>
            Idioma
          </button>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Fondo oscuro detrás del menú móvil (cierra al tocarlo) -->
  <Transition name="fade">
    <div v-if="menuAbierto" class="menu-movil__fondo d-lg-none" @click="cerrarMenu" aria-hidden="true"></div>
  </Transition>

</template>

<style scoped>
/* ============ Header ============ */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  border-bottom: 1px solid var(--bs-border-color);
  transition: box-shadow 0.3s ease;
}

.site-header--scroll {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

[data-bs-theme="dark"] .site-header--scroll {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
}

.site-nav {
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-nav__logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

/* ============ Enlaces de escritorio ============ */
.site-nav__links {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem;
}

.site-nav__link {
  position: relative;
  display: block;
  padding: 8px 12px;
  font-size: 18px;
  font-weight: 600;
  color: var(--bs-body-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

/* Línea inferior animada */
.site-nav__link::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 2px;
  height: 2px;
  border-radius: 2px;
  background-color: var(--color-secundario);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.site-nav__link:hover,
.site-nav__link.is-active {
  color: var(--color-secundario);
}

.site-nav__link:hover::after,
.site-nav__link.is-active::after {
  transform: scaleX(1);
}

/* ============ Botones de acciones ============ */
.site-nav__acciones {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.btn-icono {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--bs-body-color);
  font-size: 1.1rem;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.4s ease;
}

.btn-icono:hover {
  background-color: var(--bs-secondary-bg);
  color: var(--color-secundario);
}

.btn-icono--tema:hover {
  transform: rotate(20deg);
}

/* ============ Botón hamburguesa animado ============ */
.btn-hamburguesa {
  width: 44px;
  height: 44px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  border-radius: 12px;
  background-color: var(--bs-secondary-bg);
  transition: background-color 0.3s ease;
}

.btn-hamburguesa span {
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background-color: var(--bs-body-color);
  transition: transform 0.35s ease, opacity 0.25s ease;
}

/* Se transforma en una "X" al abrir */
.btn-hamburguesa.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.btn-hamburguesa.is-open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.btn-hamburguesa.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Foco visible para navegación con teclado */
.btn-icono:focus-visible,
.btn-hamburguesa:focus-visible,
.site-nav__link:focus-visible,
.menu-movil__link:focus-visible,
.menu-movil__pref:focus-visible {
  outline: 2px solid var(--color-secundario);
  outline-offset: 2px;
}

/* ============ Menú desplegable móvil ============ */
.menu-movil {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: calc(100dvh - 76px);
  overflow-y: auto;
  padding: 0.75rem 0 1.25rem;
  background-color: var(--bs-body-bg);
  border-bottom: 1px solid var(--bs-border-color);
  border-radius: 0 0 24px 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.menu-movil__lista {
  list-style: none;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu-movil__link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 14px;
  color: var(--bs-body-color);
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.menu-movil__texto {
  flex: 1;
}

.menu-movil__link:hover,
.menu-movil__link.is-active {
  background-color: rgba(15, 151, 247, 0.1);
  color: var(--color-secundario);
}

/* Fila de preferencias (tema e idioma) */
.menu-movil__preferencias {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid var(--bs-border-color);
}

.menu-movil__pref {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid var(--bs-border-color);
  border-radius: 14px;
  background-color: var(--bs-tertiary-bg);
  color: var(--bs-body-color);
  font-weight: 600;
  transition: border-color 0.25s ease, color 0.25s ease;
}

.menu-movil__pref:hover {
  border-color: var(--color-secundario);
  color: var(--color-secundario);
}

/* Fondo detrás del menú */
.menu-movil__fondo {
  position: fixed;
  inset: 0;
  z-index: 1020;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

/* ============ Animaciones ============ */
.menu-movil-enter-active,
.menu-movil-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-movil-enter-from,
.menu-movil-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Entrada escalonada de cada enlace */
.menu-movil-enter-active li,
.menu-movil-enter-active .menu-movil__preferencias {
  animation: aparecer 0.35s ease both;
  animation-delay: calc(var(--i) * 40ms + 80ms);
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {

  .menu-movil-enter-active,
  .menu-movil-leave-active,
  .menu-movil-enter-active li,
  .menu-movil-enter-active .menu-movil__preferencias {
    transition: none;
    animation: none;
  }
}

/* ============ Escritorio ============ */
@media (min-width: 992px) {
  .site-nav__links {
    display: flex;
  }
}

/* Pantallas medianas: enlaces más compactos */
@media (min-width: 992px) and (max-width: 1199px) {
  .site-nav__link {
    font-size: 16px;
    padding: 8px 8px;
  }
}
</style>
