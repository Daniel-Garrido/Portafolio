<script setup lang="ts">

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
    company:
      'Asociación para el Avance de las Aplicaciones Inteligentes y Tecnologías con Impacto Social (Maikron).',
    dates: 'Febrero 2024 – Agosto 2024',
    logo: '/logos/LogoMaikron.png',
    summary:
      'Diseños **UI/UX** en Figma para la institución. Desarrollo de una **landing page** para la institución.',
    tags: ['Figma', 'UI/UX', 'Landing Page', 'HTML', 'CSS','Bootsrap']
  },
  {
    role: 'Desarrollador web',
    company: 'Departamento desarrollo académico IT Mérida',
    dates: 'Febrero 2025 – Julio 2025',
    logo: '/logos/LogoTec.jpg',
    summary:
      'Desarrollo de un sistema web con **Spring Boot** para la gestión de créditos académicos, **autenticación JWT** y **procesamiento de archivos (PDF/Excel)**. Interfaz con **Vue.js** y **PrimeVue**. Diseño e implementación de **bases de datos MySQL**.',
    tags: ['Spring Boot', 'JWT', 'PDF/Excel', 'Vue.js', 'PrimeVue', 'MySQL','Java','MySQL','Figma','HTML','CSS']
  },
  {
    role: 'Diseñador web',
    company: 'Yucatán Now',
    dates: 'Agosto 2025 – Actualidad',
    logo: '/logos/LogoYunow.jpeg',
    summary:
      'Desarrollo y mantenimiento de funcionalidades para el sitio. Optimización de rendimiento y mejoras SEO.',
    tags: ['Elementor', 'Wordpress','SEO']
  }
]
</script>

<template>
  <!-- seccion de experencia -->
  <section id="experiencia" class="d-flex justify-content-center flex-column py-5">

    <!-- titulo de la seccion -->
    <h2 data-aos="fade-down" class="text-center p-2">Experiencia</h2>
    <hr class="hr">

    <!-- contenedor principal -->
    <div class="container contenedor-experiencia">
      <!--contenedor de las card -->
      <article data-aos="fade-up" v-for="(job, i) in jobs" :key="i" class="contenedor-experiencia-card">

        <!--contenedor del tittulo y logo-->
        <div class="contenedor-experiencia-titulos py-4 mt-4">

          <div class="contenedor-seccion-experiencia-card">
            
            <!-- titulo del puesto -->
            <h3 class="text-title">{{ job.role }}</h3>

            <!-- contenedor de la imagen y la info -->
            <div class="contenedor-experiencia-titulos-info">
              <img :src="job.logo" :alt="job.company" class="logo" />
              <div class="text-title-titulos">{{ job.company }}</div>
            </div>
            <!-- contenedor de la fecha-->
            <div class="text-date"> {{ job.dates }}</div>
          </div>
        </div>

        <!--contenedor de la informacions -->
        <div class="contenedor-experiencia-info">
          <!-- texto de la info -->
          <p class="" v-html="highlight(job.summary)"></p>
          <div class="">
            <!-- tecnologias usadas -->
            <span v-for="(tag, t) in job.tags" :key="t" class="tag">{{ tag }}</span>
          </div>
        </div>

      </article>
    </div>
  </section>
</template>

<style scoped>

/* contenedor principal */
.contenedor-experiencia-card {
  width: 100%;
  display: grid;           
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 30px;
  padding: 20px;
  margin: 15px 0px 15px 0px;
  border-bottom: 1px solid #c2c2c2;  
}

/* contenedor de las card */
.contenedor-experiencia-titulos {
  width: 100%;
  display: grid;
  align-content: start;
           
}

/* estilos a los titulos de la experiencia */
.text-title{
  font-size: 22px;
  font-weight: 700;
}
.text-title-titulos{
  font-size: 18px;
  font-weight: 400;
}
.text-date{
  font-size: 15px;
  font-style: italic;
  padding: 15px 0px;
}
/* contenedor del logo y de la informacion */
.contenedor-experiencia-titulos-info {
  display: grid;            
  grid-template-columns: 1fr 8fr;
  gap: 10px;
  align-items: center;
  padding: 10px 0;     
}

/* estilos al logos de cada empresa */
.contenedor-experiencia-titulos img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50px;
}


/* contenedor de la informacion de la experiencia */
.contenedor-experiencia-info {
  
  display: grid;
  align-content: start;
  padding: 10px 0px;
  gap: 10px;
}

/* estilos al texto del contenido de la experiencia */
.contenedor-experiencia-info p {
  font-size: 16px;    
  line-height: 1.5;
  font-weight: 600;    
}


/* contenedor de las tags de las tecnologías */
.contenedor-experiencia-info > div {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

/* contenido de las tecnologías usadas  */
.tag {
  font-size: 14px;
  padding: 6px 10px;
  border-radius: 50px;
  border: 1px solid #e6e8eb;
  font-weight: 600;
}

/* ===== Responsive ===== */
@media (max-width: 750px) {

  .contenedor-experiencia-card {
    grid-template-columns: 1fr;  
  }

  .contenedor-experiencia-info p {
    font-size: 13px;
  }
}

</style>
