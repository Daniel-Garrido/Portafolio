<script>
import proyectosData from '../data/proyectosData.js'

export default {
  data() {
    return {
      seleccionarCategoria: "all",
      proyectos: proyectosData,
      proyectosFiltrados: []
    };
  },

  methods: {
    filtrarProyectos() {
      if (this.seleccionarCategoria === "all") {
        this.proyectosFiltrados = this.proyectos;
      } else {
        this.proyectosFiltrados = this.proyectos.filter(
          (proyecto) => proyecto.categoria === this.seleccionarCategoria
        );
      }
    }
  },

  created() {
    this.proyectosFiltrados = this.proyectos;
  }
};

</script>

<template>

  <section id="proyectos" class="bg-light proyectos-section-bg">
    <!-- seccion del titulo -->
    <div class="p-5">
      <h2 data-aos="fade-down" class="text-center p-2 ">Proyectos</h2>
      <hr class="hr">
    </div>
    <!-- contenedor de las cards -->
    <div class="container ">
      <!-- Select para filtrar las categorías -->
      <div class="text-left mb-3">
        <select v-model="seleccionarCategoria" class="form-select " @change="filtrarProyectos">
          <option class="option" value="all">Seleccione una categoría</option>
          <option class="option" value="diseño">Diseño</option>
          <option class="option" value="programacion">Programación</option>
          <option class="option" value="software">Software</option>
        </select>
      </div>

      <!-- Contenido de las tarjetas (cards) -->
      <div  class="row">

        <div v-for="(project, index) in proyectosFiltrados" :key="index" class="col-md-4 mb-4">

          <!-- contenido de cada card -->
          <div data-aos="fade-up" class="card card-proyectos">

            <!-- contenido de la imagen de la card -->
            <div class="img-container">
              <img :src="project.imagen" class="card-img-top" :alt="project.titulo" />
              <div class="capa"></div> <!-- Capa superpuesta -->
            </div>

            <!-- contenido de la informacion de la card -->
            <div class="card-body card-body-proyectos ">

              <!-- contenido de los textos de la card -->
              <div class="card-content-text">
                <h5 class="card-title text-left">{{ project.titulo }}</h5>
                <p class="card-text">{{ project.descripcion }}</p>
              </div>

              <!-- contenido de los iconos de la card -->
              <div class="card-contenedor-iconos">
                <template v-for="(tech, i) in project.tecnologias" :key="i">
                  <!-- Si tech es un string, usa FontAwesome -->
                  <i v-if="typeof tech === 'string'" :class="['fab', `fa-${tech}`, 'fa-lg']"></i>

                  <!-- Si tech es un objeto con imagen -->
                  <img v-else :src="tech.icono" :alt="tech.nombre" width="24" height="24"
                    style="object-fit: contain;" />
                </template>
              </div>

              <!-- boton de la card -->
              <div class="d-flex justify-content-left">
                <router-link :to="{
                  name: 'proyectoDetalle',
                  params: { id: index }
                }" class="btn btn-primary">
                  Ver Proyecto
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<style>
/* estilo al seleccionador de las categorías */
.form-select {
  width: 50%;
  border: 1px solid #686a6f;
  padding: 5px 15px;
}

.form-select :hover {
  border: none;
}

/* estilo a la card */
.card {
  gap: 0px;
  padding: 0px;
}

.card-proyectos {
  border-radius: 5px;
}

.card-body {
  padding: 15px;
}

.card-content-text h5 {
  padding: 0px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}

.card-content-text p {
  font-size: 14px;
  color: #686a6f;
}

.card {
  height: 100%;
}

/* ajustar el tamaño a las imagenes */
.img-container {
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border-radius: 5px 5px 0px 0px;
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
  height: 120px;
  object-fit: cover;
}

.card-img-top {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* filtro para la imagen de la card */
.capa {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
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

.card-contenedor-iconos i {
  font-size: 20px;
}

/************ media querys *************/
@media(max-width: 600px) {
  .form-select {
    width: 100%;
  }
}
</style>