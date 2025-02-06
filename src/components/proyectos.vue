<script>
export default {
  data() {
    return {
      seleccionarCategoria: "all",
      proyectos: [
        { titulo: "Coffee shop",
          descripcion: "Diseño visual de una cafeteria.", 
          categoria: "diseño", 
          imagen: "proyectos/ProyectoCafeteria1.png", 
        },
        { titulo: "Maia 2.0",
          descripcion: "Diseño visual de un dashboard para la realización de cuestionarios.", 
          categoria: "diseño", 
          imagen: "proyectos/ProyectoDashboardMaia21.png", 
        },
        { titulo: "Tecnm Sistemas",
          descripcion: "Diseño visual de una pagina dedicada a la carrera de ingeniería en sistemas computacionales.", 
          categoria: "diseño", 
          imagen: "proyectos/ProyectoTecSistemas1.png", 
        },
        { titulo: "Maikron ORG",
          descripcion: "Landing page para la empresa Maikron ORG.", 
          categoria: "programacion", 
          imagen: "proyectos/ProyectoMaikron1.png", 
        },
        { titulo: "Laser Pro",
          descripcion: "Landing page para una empresa de depilación laser", 
          categoria: "programacion", 
          imagen: "proyectos/ProyectLaserPro1.png", 
        },

        { titulo: "Italika compilator",
          descripcion: "Software de analizador léxico.", 
          categoria: "software", 
          imagen: "proyectos/ProyectoItalika1.png", 
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

<section class="bg-light ">
  <h2 class="text-center p-2">Proyectos</h2>
  <hr class="hr">

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
        <div class="card card-proyectos">
          <img :src="project.imagen" class="card-img-top " :alt="project.titulo" />
          <div class="card-body card-body-proyectos">
            <h5 class="card-title text-center">{{ project.titulo }}</h5>
            <p class="card-text">{{ project.descripcion }}</p>
            <div class="d-flex justify-content-center">
               <a href="#" class=" btn btn-primary">Ver Proyecto</a>
            </div>
           
          </div>  
        </div>
      </div>
    </div>
  </div>
</section>


</template>

<style>
.card-proyectos{
  border-radius: 0px;
  border: none;
}
.form-select{
  border: none;
  padding: 5px 15px;
}

/* ajustar el tamaño a las imagenes */
.card-img-top {
  width: 100%; 
  height: 200px; 
  object-fit: cover; 
}

.card {
  height: 100%; 
}

</style>