<script>
</script>

<template>
  <section id="habilidades" class=" d-flex justify-content-center flex-column py-5">
    <h2 class="text-center p-2 ">Habilidades</h2>
    <hr class="hr">
    
    <div class="habilidades container bg-white py-4 px-3">

      <div class="row">

        <!-- card de diseño -->
        <div class="card_disenio col-md-4 mb-4 ">

          <div class="card p-3">
            <h3 class="text-center text-dark">Diseño</h3>
            <div class="contenedor-info d-flex align-items-center">
              <i class="fab fa-figma me-2"></i>
              <p class="mb-0">Figma</p>
            </div>
            <div class="contenedor-info d-flex align-items-center mt-2">
              <img src="/iconos/canva.svg" alt="">
              <p class="mb-0">Canva</p>
            </div>
          </div>

        </div>

        <!-- card de frontend -->

        <div class="card_disenio col-md-4 mb-4 " >

          <div class="card p-3">
            <h3 class="text-center text-dark">Frontend</h3>
            <div class="contenedor-info d-flex align-items-center mt-2">
              <i class="fab fa-html5 me-2"></i>
              <p class="mb-0">HTML 5</p>
            </div>
            <div class="contenedor-info d-flex align-items-center mt-2">
              <i class="fab fa-css3 me-2"></i>
              <p class="mb-0">CSS 3</p>
            </div>
            <div class="contenedor-info d-flex align-items-center mt-2">
              <i class="fab fa-bootstrap me-2"></i>
              <p class="mb-0">Bootsrap 5</p>
            </div>
            <div class="contenedor-info d-flex align-items-center mt-2">
              <i class="fab fa-js me-2"></i>
              <p class="mb-0">Javascript</p>
            </div>
            <div class="contenedor-info d-flex align-items-center mt-2">
              <i class="fab fa-vuejs me-2"></i>
              <p class="mb-2">Vue js</p>
            </div>
            
            <div class="contenedor-info d-flex align-items-center mt-2">
              <i class="fab fa-react me-2"></i>
              <p class="mb-2">React</p>
            </div>

          </div>
        </div>

        <!-- card de backend -->
        <div class="card_disenio col-md-4 mb-4 scroll-animate" data-animacion="animate__fadeInRight">
          <div class="card p-3">
            <h3 class="text-center text-dark">Backend</h3>
            
            <div class="contenedor-info d-flex align-items-center mt-2">
              <img src="/iconos/java.png" alt="">
              <p class="mb-0">Java</p>
            </div>
            <div class="contenedor-info d-flex align-items-center mt-2">
              <i class="fas fa-server me-2"></i>
              <p class="mb-0">SpringBoot</p>
            </div>

            <div class="contenedor-info d-flex align-items-center mt-2">
              <i class="fab fa-php me-2"></i>
              <p class="mb-0">PHP</p>
            </div>
            <div class="contenedor-info d-flex align-items-center mt-2">
            
              <img src="/iconos/sql.png" alt="">
              <p class="mb-0">SQL</p>
            </div>
          </div>
        </div>
      </div>

    </div>



  </section>
</template>

<style>

/* estilos a las card de habilidades */
.card_disenio{
  cursor: pointer;
}
.card_disenio .card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
 
}

.card_disenio .card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.contenedor-info{
  padding: 5px;
  gap: 10px;
  cursor: pointer;
}
.contenedor-info p{
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #686a6f;
}

/* estilos a los iconos de tecnologías */
.fab.fa-figma {
  background: linear-gradient(
    to bottom,
    #f24e1e 0%,
    #ff7262 25%,
    #a259ff 50%,
    #0acf83 75%,
    #1abcfe 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fab.fa-html5 {
  color: #e34f26; 
}
.fab.fa-css3 {
  color: #1572b6;
}
.fab.fa-bootstrap {
  color: #7952b3;
}
.fab.fa-js {
  color: #f7df1e;
}
.fab.fa-vuejs {
  color: #4FC08D;
}
.fab.fa-php {
  color: #8993be;
}


.card_disenio img {
  width: 20px;
}
</style>