<script setup lang="ts">

// Definición del tipo Job
type Job = {
  role: string
  company: string
  dates: string
  logo: string
  summary: string
  tags: string[]
}

// Convierte **texto** en resaltado verde
const highlight = (text: string) =>
  text.replace(/\*\*(.+?)\*\*/g, '<span class="hl">$1</span>')

const jobs: Job[] = [
 
  {
    role: 'Diseñador web',
    company: 'Yucatán Now',
    dates: 'Agosto 2025 – Actualidad',
    logo: '/logos/LogoYunow.jpeg',
    summary:'Desarrollo y administración de un sitio web de noticias para Yucatán Now utilizando WordPress y Elementor, enfocándome en la experiencia del usuario y el correcto funcionamiento de la plataforma. Realizo mantenimiento continuo y optimización SEO on-page para mejorar el posicionamiento en buscadores. Brindo soporte y mantenimiento al sitio web de Gran San Diego Residencial, además de apoyar en la creación de contenido digital mediante la edición de imágenes con Canva y la edición de videos con Filmora.',
    tags: ['']
  },
  
]
</script>

<template>
  <!-- seccion de experencia -->
  <section id="experiencia" class="d-flex justify-content-center flex-column py-5">

    <!-- titulo de la seccion -->
    <h2 data-aos="fade-down" class="text-center p-2">Experiencia</h2>
   

    <!-- contenedor principal -->
    <div class="container contenedor-experiencia ">
      <!--contenedor de las card -->
      <section data-aos="fade-up" v-for="(job, i) in jobs" :key="i" class="contenedor-experiencia-card  shadow-lg p-4">

        <!--contenedor del tittulo y logo-->
        <div class="contenedor-experiencia-titulos p-3">

          <!-- titulo del puesto -->
          <h3 class="text-title">{{ job.role }}</h3>
          <!-- contenedor de la imagen y la info -->
          <div class="contenedor-experiencia-titulos-info">
            <img :src="job.logo" :alt="job.company" class="logo" />
            <div class="text-title-titulos">{{ job.company }}</div>
          </div>

          <!-- contenedor de la fecha-->
          <div class="contenedor-experiencia-date text-date"> {{ job.dates }}</div>
        </div>

        <!--contenedor de la informacions -->
        <div class="contenedor-experiencia-info p-2">
          <!-- texto de la info -->
          <p class="" v-html="highlight(job.summary)"></p>
          
          <div class="">
            <!-- tecnologias usadas -->
            <span v-for="(tag, t) in job.tags" :key="t" class="tag">{{ tag }}</span>
          </div>

        </div>

      </section>
    </div>
  </section>
</template>

<style scoped>

.text-title{
 font-size: 20px;
 color: var(--color-secundario);
}

.text-title-titulos{
  font-size: 16px;
  font-weight: 600;
}

.text-date{
  font-size: 14px;
  font-style: italic;
  color: #686a6f;
  padding-top:4px;
}

/* contenedor principal */
.contenedor-experiencia-card {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
}

/* contenedor de la card de informacion (Titulo. logo fecha tags) */
.contenedor-experiencia-titulos {
  width: 100%;
  display: grid;
}

/* estilos al logos de cada empresa */
.contenedor-experiencia-titulos img {
  width: 40px;
  height: auto;
  border-radius: 50px;
}

/* contenedor del logo y de la informacion */
.contenedor-experiencia-titulos-info {
  display: flex;
  align-items: center;    
  gap: 5px;  
}

.contenedor-experiencia-info p{
  font-size: 14px;
  font-weight: 600;
}

/* =========== Responsive ================= */
@media (max-width: 750px) {

  .contenedor-experiencia-card {
    grid-template-columns: 1fr;
  }

  .contenedor-experiencia-info p {
    font-size: 14px;
  }
}

@media(max-width:500px) {
  .contenedor-experiencia-card {
    width: 100%;
    display: grid;
    place-items: center;
  }
}
</style>
