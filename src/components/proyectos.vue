<script>
import proyectosData from "../data/proyectosData.js";

export default {
  data() {
    return {
      seleccionarCategoria: "all",
      proyectos: proyectosData,
      proyectosFiltrados: [],
      proyectoActivo: null,
    };
  },

  methods: {
    filtrarProyectos() {
      this.proyectosFiltrados =
        this.seleccionarCategoria === "all"
          ? this.proyectos
          : this.proyectos.filter(
            (p) => p.categoria === this.seleccionarCategoria
          );
    },

    abrirModal(project) {
      this.proyectoActivo = project;
    },

    // para que el carrusel reinicie al abrir otro proyecto
    keyCarrusel() {
      return this.proyectoActivo ? this.proyectoActivo.titulo : "empty";
    },
  },

  created() {
    this.proyectosFiltrados = this.proyectos;
  },
};
</script>

<template>

  <!-- seccion de proyectos -->
  <section id="proyectos" class="bg-white proyectos-section-bg">
    <div class="p-5">
      <h2 class="text-center p-2">Proyectos</h2>
      
    </div>

    <!-- contnedor principal -->
    <div class="container">

      <!-- selector de categorías -->
      <div class="text-left mb-3">
        <select v-model="seleccionarCategoria" class="form-select" @change="filtrarProyectos">
          <option value="all">Seleccione una categoría</option>
          <option value="diseño">Diseño</option>
          <option value="programacion">Desarrollo web</option>
          <option value="software">Desarrollo de software</option>
        </select>
      </div>

      <!-- contenedor de las cards -->
      <div class="row">

        <div v-for="(project, index) in proyectosFiltrados" :key="index" class="col-md-4 mb-4">

          <!-- cards de proyectos -->
          <div class="card card-proyectos h-100">
            <!-- contenedor de imagenes -->
            <div class="img-container">
              <img :src="project.imagen" class="card-img-top" :alt="project.titulo" />
              <div class="capa"></div>
            </div>

            <!--  -->
            <div class=" card-body d-flex flex-column">

              <!-- contenedor del titulo y descripcion -->
              <div class="card-content-text">
                <h5 class="card-title">{{ project.titulo }}</h5>
                <p class="card-text">{{ project.descripcion }}</p>
              </div>

              <!-- contenedor de iconos de tecnologías -->
              <div class="card-contenedor-iconos">
                <template v-for="(tech, i) in project.tecnologias" :key="i">
                  <img :src="tech.icono" :alt="tech.nombre" width="24" height="24" style="object-fit: contain" />
                </template>
              </div>

              <!-- CONTENEDOR DE LOS BOTONES -->
              <div class="card-contenedor-btn  mt-auto d-flex flex-wrap">

                <!--BTN LEER MÁS -->
                <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                  data-bs-target="#proyectoModal" @click="abrirModal(project)">
                  Leer más
                </button>

                <!--BTN VER PROYECTO -->
                <a :href="project.link" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                  Ver proyecto
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- contenedor del Modal de las cards-->
      <div class="modal fade" id="proyectoModal" tabindex="-1" aria-labelledby="proyectoModalLabel" aria-hidden="true">
        
        <div class="modal-dialog modal-dialog-centered modal-lg">
          
          <div class="modal-content modal-proyecto">
            
            <!-- Contenido del header modal -->
            <div class="modal-header">
              
              <!-- titulo modal -->
              <h5 class="modal-title" id="proyectoModalLabel">
                {{ proyectoActivo?.titulo || "Proyecto" }}
              </h5>

              <!-- btn para cerrar el modal  -->
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
            </div>

            <div class="modal-body">
              <div v-if="proyectoActivo" class="modal-contenido">
                <!-- contenedor de Carrusel / Imagen -->
                <div class="contenedor-slider mb-4">
                  
                  <!-- Si hay galeria, carrusel -->
                  <div v-if="proyectoActivo.galeria && proyectoActivo.galeria.length" :key="keyCarrusel()"
                    :id="'carouselProyecto'" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner rounded">
                      <div v-for="(img, i) in proyectoActivo.galeria" :key="i" class="carousel-item"
                        :class="{ active: i === 0 }">
                        <img :src="img" class="d-block w-100 modal-img" :alt="`${proyectoActivo.titulo} ${i + 1}`" />
                      </div>
                    </div>

                    <!-- botones de los sliders --> 
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselProyecto"
                      data-bs-slide="prev">
                      <span class="bg-dark carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>

                    <!-- botones de los sliders -->
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselProyecto"
                      data-bs-slide="next">
                      <span class="bg-dark carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>

                  </div>

                  <!-- Si NO hay galeria, imagen normal -->
                  <img v-else :src="proyectoActivo.imagen" class="img-fluid rounded modal-img"
                    :alt="proyectoActivo.titulo" />
                </div>

                <!-- contenedor de descripción -->
                <div class="contenedor-info">
                  <p class="mb-2 descripcion-larga">
                    {{ proyectoActivo.descripcionDetallada }}
                  </p>

                  <p class="mb-3 descripcion-tech">
                    {{ proyectoActivo.descripcionDetalladaTecnologias }}
                  </p>

                  <!-- Tecnologías -->
                  <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                    <div v-for="(tech, i) in proyectoActivo.tecnologias" :key="i" class="tech-pill">
                      <img :src="tech.icono" :alt="tech.nombre" width="18" height="18" />
                      <span>{{ tech.nombre }}</span>
                    </div>
                  </div>

                  <a :href="proyectoActivo.link" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                    Ver proyecto
                  </a>
                </div>
              </div>

              <div v-else class="text-muted">Selecciona un proyecto…</div>
            </div>

           
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style>
.form-select {
  width: 50%;
  border: 1px solid #686a6f;
  padding: 5px 15px;
}

.form-select:hover {
  border: 1px solid #686a6f;
}

.card-proyectos {
  border-radius: 20px;
  overflow: hidden;
}

.img-container {
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.img-container:hover .card-img-top {
  transform: scale(1.1);
}

.img-container:hover .capa {
  opacity: 1;
  visibility: visible;
}

.card-img-top {
  width: 100%;
  height: 140px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.capa {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.card-contenedor-iconos {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5px;
}

.card-contenedor-btn {
  padding-top: 3px;
  gap: 10px;
}

/* Estilos adicionales al MODAL PROYECTOS */
.modal-contenido {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contenedor-slider {
  width: 100%;
}

.contenedor-info {
  width: 100%;
}

.modal-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}
@media (max-width: 600px) {
  .form-select {
    width: 100%;
  }
}
</style>