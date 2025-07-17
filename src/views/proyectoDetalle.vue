<script>
import proyectos from '../data/proyectosData'

export default {
  props: ['id'],
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
    
    <router-link to="/" class="btn-regresar btn btn-primary mb-3">← Volver</router-link>

    <div v-if="proyecto">
      <h2 class="contenedor-proyectos-router-titulo text-center">{{ proyecto.titulo }}</h2>
      <hr class="hr">
      <p class="">{{ proyecto.descripcionDetallada }}</p>

      <h5 class="contenedor-proyectos-router-subtitulo">Tecnologías usadas:</h5>

      <p class="">
        {{ proyecto.descripcionDetalladaTecnologias }}
      </p>
      
      <!-- tecnologias usadas -->
      <div class=" d-flex gap-2 flex-wrap">        
        <template v-for="(tech, i) in proyecto.tecnologias" :key="i">
          <i v-if="typeof tech === 'string'" :class="['fab', `fa-${tech}`, 'fa-lg']"></i>
          <img
            v-else
            :src="tech.icono"
            :alt="tech.nombre"
            width="32"
            height="32"
            style="object-fit: contain;"
          />
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

</template>

<style>

.btn-regresar{
  width: 20%;
}
.contenedor-proyectos-router{
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.contenedor-proyectos-router p{
  color: #686a6f;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
}

.contenedor-proyectos-router-titulo{
  font-weight: bold;
  font-size: 2.3rem;
  padding-top: 20px;
}
.contenedor-proyectos-router-subtitulo{
  font-size: 1.5rem;
}

</style>