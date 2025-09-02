<template>
  <section id="experiencia" class="d-flex justify-content-center flex-column py-5">
    
    <h2 data-aos="fade-down" class="text-center p-2 ">Experiencia</h2>
    <hr class="hr">

    <!-- contenedor principal -->
    <div class="container contenedor-experiencia">
      <!--contenedor de las card -->
      <article v-for="(job, i) in jobs" :key="i" class="contenedor-experiencia-card">
      
        <!--contenedor del tittulo y logo-->
        <div class="contenedor-experiencia-titulos" >
          
        <div class="">
            <img :src="job.logo" :alt="job.company" class="logo" />
            <div class="">
              <h3 class="">{{ job.role }}</h3>
              <div class="">{{ job.company }}</div>
              <div class=""> {{ job.dates }}</div>
            </div>
        </div>
        </div>

        <!--contenedor de la informacions -->
        <div class="contenedor-experiencia-info">
          <p class="" v-html="highlight(job.summary)"></p>
          <div class="">
            <span v-for="(tag, t) in job.tags" :key="t" class="tag">{{ tag }}</span>
          </div>
        </div>

      </article>
    </div>
  </section>
</template>

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
    tags: ['Figma', 'UI/UX', 'Landing Page', 'HTML', 'CSS']
  },
  {
    role: 'Desarrollador web',
    company: 'Departamento desarrollo académico IT Mérida',
    dates: 'Febrero 2025 – Julio 2025',
    logo: '/logos/LogoTec.jpg',
    summary:
      'Desarrollo de un sistema web con **Spring Boot** para la gestión de créditos académicos, **autenticación JWT** y **procesamiento de archivos (PDF/Excel)**. Interfaz con **Vue.js** y **PrimeVue**. Diseño e implementación de **bases de datos MySQL**.',
    tags: ['Spring Boot', 'JWT', 'PDF/Excel', 'Vue.js', 'PrimeVue', 'MySQL']
  },
  {
    role: 'Programador web',
    company: 'Yucatán Now',
    dates: 'Agosto 2025 – Actualidad',
    logo: '/logos/LogoYunow.jpeg',
    summary:
      'Desarrollo y mantenimiento de funcionalidades para el sitio. Optimización de rendimiento y **mejoras SEO**.',
    tags: ['JavaScript', 'SEO', 'Rendimiento', 'Accesibilidad']
  }
]
</script>

<style scoped>

.contenedor-experiencia-card{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
}

.contenedor-experiencia-titulos img{
    width: 50px;
    height: 50px;
    object-fit: cover;
}

</style>
