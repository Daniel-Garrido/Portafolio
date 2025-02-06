<script setup>

//importar los componentes al archivo principal 
import Header from './components/header.vue';
import SobreMi from './components/sobre-mi.vue';
import Proyectos from './components/proyectos.vue';
import Habilidades from './components/habilidades.vue';
import Footer from './components/footer.vue';
import Servicios from './components/servicios.vue';
</script>

<template>

  <div id="app">

    <Header />

    <!-- seccion de inicio -->
    <section class="inicio d-flex justify-content-center align-items-center vh-100 bg-light ">

      <div class="contenedor-Inicio container p-1 d-flex align-items-center gap-4">
        <!--Contenedor de Imagen -->
        <div class="contenedor-img d-flex justify-content-center ">
          <img src="./assets/Imagenes/logo.png" alt="Daniel Garrido">
        </div>

        <!--Contenedor de  Información -->
        <div class="contenedor-info w-100 container ">
          <h1 class="mb-2">Daniel Arcángel Garrido Hoil</h1>
          <p class="text-muted mb-3">Diseñador Web!!</p>
          <!-- Iconos -->
          <div class="iconos d-flex mb-3 animacion-redes-sociales">
            <a href="#" class="text-decoration-none me-6 "><i class="fab fa-linkedin"></i></a>
            <a href="#" class="text-decoration-none me-6 "><i class="fab fa-github"></i></a>
            <a href="#" class="text-decoration-none "><i class="fab fa-instagram"></i></a>
          </div>
          <!-- Botón de contacto -->
          <a href="#" class=" btn text-white ">Contacto</a>
        </div>
      </div>

    </section>

    <SobreMi />
  
    <Proyectos />

    <Habilidades />

    <Servicios />
    
    <Footer />

  </div>

</template>

<style>




/**** animacion a las redes sociales  *****/
.animacion-redes-sociales{
  perspective: 1000px; 
}

/* Estilo base para los íconos */
.animacion-redes-sociales i {
  font-size: 30px;
  transition: transform 0.8s ease, color 0.8s ease; 
  display: inline-block; 
}

/* Efecto 3D al hacer hover */
.animacion-redes-sociales i:hover {
  transform: rotateY(360deg);  
}

/*estilos para los iconos de las redes sociales  */

.iconos a:nth-child(1) i {
  color: #0077b5;
}

.iconos a:nth-child(2) i {
  color: #333333;
}

.iconos a:nth-child(3) i {
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


/* imagen de inicio */
.contenedor-img img{
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 50%;
}

.iconos a{
  font-size: 30px;
  padding-right: 10px;
}

.btn{
  padding: 5px 30px;
  background-color: #0F97F7;
  border: 1px solid #0F97F7;
  border-radius: 0px;
  transition: all 0.5s ease;

}

.btn:hover{
  background-color: white;
  transition: all 0.5s ease;
  color: #000 !important;
}

@media (max-width: 500px) {
  .contenedor-Inicio{
    flex-direction: column;
  }
}

</style>