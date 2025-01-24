<script>
export default {
  data() {
    return {
      seleccionarCategoria: "all",
      proyectos: [
        { titulo: "Proyecto 1",
          descripcion: "descripcion del proyecto", 
          categoria: "diseño", 
          imagen: "", 
        },
        { titulo: "Proyecto 2",
          descripcion: "descripcion del proyecto", 
          categoria: "diseño", 
          imagen: "", 
        },
        { titulo: "Proyecto 3",
          descripcion: "descripcion del proyecto", 
          categoria: "diseño", 
          imagen: "", 
        },
        { titulo: "Proyecto 4",
          descripcion: "descripcion del proyecto", 
          categoria: "programacion", 
          imagen: "", 
        },
        { titulo: "Proyecto 5",
          descripcion: "descripcion del proyecto", 
          categoria: "programacion", 
          imagen: "", 
        },

        { titulo: "Proyecto 6",
          descripcion: "descripcion del proyecto", 
          categoria: "software", 
          imagen: "", 
        },


      ],

      proyectosFiltrados: [],
    };

  },

  //metodo para filtrar los proyectos por las categorias 
  methods: {
    filtrarProyectos(){
      if(this.seleccionarCategoria === "all"){
        this.proyectosFiltrados = this.proyectos;
      }
      else{
        this.proyectosFiltrados = this.proyectos.filter(
          (proyecto) => proyecto.categoria === this.seleccionarCategoria
        );
      }
    }
  },

  created() {
    // Inicializa mostrando todos los proyectos
    this.proyectosFiltrados = this.proyectos;
  },
};

</script>

<template>

<section class="bg-light vh-100">
  <h2 class="text-center">Proyectos</h2>

  <div class="container mt-4">
    <!-- Select para filtrar las categorías -->
    <div class="text-left mb-3">
      <select v-model="seleccionarCategoria" class="form-select" @change="filtrarProyectos">
        <option value="all">Seleccione una categoría</option>
        <option value="diseño">Diseño</option>
        <option value="programacion">Programación</option>
        <option value="software">Software</option>
      </select>
    </div>

    <!-- Contenido de las tarjetas (cards) -->
    <div class="row">
      <div v-for="(project, index) in proyectosFiltrados" :key="index" class="col-md-4 mb-4">
        <div class="card">
          <img :src="project.imagen" class="card-img-top" :alt="project.titulo" />
          <div class="card-body">
            <h5 class="card-title">{{ project.titulo }}</h5>
            <p class="card-text">{{ project.descripcion }}</p>
            <a href="#" class="btn btn-primary">Ver Proyecto</a>
          </div>  
        </div>
      </div>
    </div>
  </div>
</section>


</template>

<style>

</style>