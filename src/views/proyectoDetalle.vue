<script>
import proyectos from '../data/proyectosData'
import Footer from '../components/footer.vue'

export default {
  props: ['id'],

  components: {
    Footer
  },

  data() {
    return {
      proyecto: null
    }
  },
  created() {
    const index = parseInt(this.id)
    if (!isNaN(index) && proyectos[index]) {
      this.proyecto = proyectos[index]
    }
  }
}
</script>

<template>

  <div class="contenedor-proyectos-router container py-5">

    <router-link :to="{ path: '/', hash: '#proyectos' }" class="btn-regresar btn btn-primary mb-3">
      <i class="fas fa-arrow-left me-2"></i>
    </router-link>


    <div v-if="proyecto">

      <!-- titulo principal -->
      <h2 class="contenedor-proyectos-router-titulo text-center">{{ proyecto.titulo }}</h2>
      <hr class="hr">

      <div class="contenedor-proyectos-imagenes">
        <img v-for="(img, index) in proyecto.galeria" :key="index" :src="img" class="imagen-galeria" />
      </div>

      <!-- descripcion del proyecto -->
      <h5 class="contenedor-proyectos-router-subtitulo">Descripcion del proyecto:</h5>
      <p class="">{{ proyecto.descripcionDetallada }}</p>

      <!-- descripcion de las tecnologias -->
      <h5 class="contenedor-proyectos-router-subtitulo">Tecnologías usadas:</h5>
      <p class="">{{ proyecto.descripcionDetalladaTecnologias }}</p>

      <!-- tecnologias usadas -->
      <div class="contenedor-proyectos-router-iconos d-flex gap-2 flex-wrap">
        <template v-for="(tech, i) in proyecto.tecnologias" :key="i">
          <i v-if="typeof tech === 'string'" :class="['fab', `fa-${tech}`, 'fa-lg']"></i>
          <img v-else :src="tech.icono" :alt="tech.nombre" width="30" height="30" style="object-fit: contain;" />
        </template>
      </div>

      <!-- btn para visualizar el proyecto -->
      <div class="mt-4">
        <a :href="proyecto.link" class="btn text-white" target="_blank">Visualizar el proyecto</a>
      </div>

    </div>

    <div v-else>
      <p>No se encontró el proyecto.</p>
    </div>
  </div>

  <Footer />

</template>

<style>
.btn-regresar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 0px;
  border-radius: 50%;
}

.contenedor-proyectos-router {

  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

.contenedor-proyectos-router p {
  color: #686a6f;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
}

.contenedor-proyectos-router-titulo {
  font-weight: bold;
  font-size: 2.3rem;
  padding-top: 20px;
}

.contenedor-proyectos-imagenes {
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3rem 0px 3rem 0px;
  gap: 10px;
}

.contenedor-proyectos-imagenes img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contenedor-proyectos-router-subtitulo {
  font-size: 1.5rem;
}

.contenedor-proyectos-router-iconos {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.contenedor-proyectos-router-iconos i {
  font-size: 30px;
}


@media(max-width: 750px) {
  .contenedor-proyectos-imagenes {
    grid-template-columns: 1fr 1fr;
  }
}

@media(max-width: 500px) {
 
  .contenedor-proyectos-imagenes {
    grid-template-columns: 1fr;
  }

}
</style>