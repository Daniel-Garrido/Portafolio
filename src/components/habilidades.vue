<script>

export default {
  name: "Habilidades",
  data() {
    return {
      activeTab: "all",
      tabs: [
        { label: "Todos", value: "all" },
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Diseño", value: "design" },
      ],
      tech: [
        // --- FRONTEND ---
        { id: 1, name: "HTML 5", category: "frontend", fa: "fab fa-html5" },
        { id: 2, name: "CSS 3", category: "frontend", fa: "fab fa-css3-alt" },
        { id: 3, name: "Bootstrap 5", category: "frontend", fa: "fab fa-bootstrap" },
        { id: 4, name: "JavaScript", category: "frontend", fa: "fab fa-js" },
        { id: 5, name: "Vue.js", category: "frontend", fa: "fab fa-vuejs" },
        { id: 6, name: "React", category: "frontend", fa: "fab fa-react" },

        // --- BACKEND ---
        { id: 7, name: "Java", category: "backend", img: "/iconos/java.png" },
        { id: 8, name: "Spring Boot", category: "backend", fa: "fas fa-leaf" }, // puedes cambiar por tu icono
        { id: 9, name: "PHP", category: "backend", fa: "fab fa-php" },
        { id: 10, name: "SQL", category: "backend", img: "/iconos/sql.png" },

        // --- DISEÑO ---
        { id: 11, name: "Figma", category: "design", fa: "fab fa-figma" },
        { id: 12, name: "Canva", category: "design", img: "/iconos/canva.svg" },
      ],
    };
  },
  computed: {
    filteredTech() {
      if (this.activeTab === "all") return this.tech;
      return this.tech.filter((t) => t.category === this.activeTab);
    },
  },
  mounted() {
    this.initTooltips();
  },
  updated() {
    // Re-inicializa tooltips cuando cambia el filtro
    this.initTooltips();
  },
  methods: {
    setTab(tab) {
      this.activeTab = tab;
    },
    initTooltips() {
      // si bootstrap está global (window.bootstrap)
      if (window.bootstrap?.Tooltip) {
        // Limpia tooltips previos para evitar duplicados
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
          const instance = window.bootstrap.Tooltip.getInstance(el);
          if (instance) instance.dispose();
        });

        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
          new window.bootstrap.Tooltip(el);
        });
        return;
      }
    },
  },
};
</script>

<template>

  <section id="habilidades" class="d-flex justify-content-center flex-column py-5">
    <!-- titulo de la seccion -->
    <h2 data-aos="fade-down" class="text-center p-2">Stack Tecnológico</h2>
  
    <p class="text text-center">
      Una colección de tecnologías de software que he dominado, explorado o integrado en soluciones del mundo real.
    </p>

    <!-- contenedor principal -->
    <div class="habilidades container py-4 px-3">
      <!--contenedor de las Tabs -->
      <ul class="nav nav-pills justify-content-center gap-2 mb-4 ">
        <li class="nav-item" v-for="tab in tabs" :key="tab.value">
          <!-- botones del menu -->
          <button
            class="nav-link "
            :class="{ active: activeTab === tab.value }"
            type="button"
            @click="setTab(tab.value)"
          >
            {{ tab.label }}
          </button>
        </li>
      </ul>

      <!-- Contenedor de las tecnologías -->
      <div class="tech-grid bg-body-tertiary p-4 border rounded-3">
        <div
          v-for="t in filteredTech"
          :key="t.id"
          class="tech-card"
          data-aos="fade-up"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          :title="t.name"
        >
          <!-- Icono -->
          <div class="tech-icon">
            <!-- Si es fontawesome -->
            <i v-if="t.fa" :class="t.fa"></i>

            <!-- Si es imagen -->
            <img v-else :src="t.img" :alt="t.name" />
          </div>

          <!-- Nombre debajo -->
          <div class="tech-name">{{ t.name }}</div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>

/*Estilo de los botones de las Tabs */
.nav-pills{
  gap: 10px;
}

.nav-pills .nav-link {
  padding: 5px 30px;
  border-radius: 10px;
  gap: 10px;
}

/* Quitar borde, outline y focus ring de las tabs */
.nav-pills .nav-link {
  border: none !important;
  outline: none !important;
  box-shadow: none;
}

/* Estado activo */
.nav-pills .nav-link.active {
  border: none !important;
  outline: none !important;
}

/* Cuando se hace click o se navega con teclado */
.nav-pills .nav-link:focus,
.nav-pills .nav-link:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}

/*Estilo al  contenedor principal de las tecnologías */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  justify-items: center;
  gap: 10px;
  border-radius: 10px;
}


/* Estilo de cada tarjeta de las tecnologías */
.tech-card {
  width: 100%;
  display: grid;
  place-items: center;
  background: var(--bs-secondary-bg);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.tech-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--sombra-card);
  background-color: var(--bs-tertiary-bg);
}

/* Estilos a los iconos de las tecnologías */
.tech-icon {
  font-size: 50px;
  line-height: 1;
  display: grid;
  place-items: center;
}

.tech-icon img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

/* Estilos al nombre debajo de los iconos */
.tech-name {
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}

/* Colores  de  los iconos */
.fab.fa-figma {
  background: linear-gradient(to bottom, #f24e1e 0%, #ff7262 25%, #a259ff 50%, #0acf83 75%, #1abcfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fab.fa-html5 {
  color: #e34f26;
}
.fab.fa-css3-alt {
  color: #1572b6;
}
.fab.fa-bootstrap {
  color: #7952b3;
}
.fab.fa-js {
  color: #f7df1e;
}
.fab.fa-vuejs {
  color: #4fc08d;
}
.fab.fa-react {
  color: #61dafb;
}
.fab.fa-php {
  color: #8993be;
}

/* Responsive design */
@media (max-width: 992px) {
  .tech-grid {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }
}
@media (max-width: 576px) {
  .tech-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

</style>
