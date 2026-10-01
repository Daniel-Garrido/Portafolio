<script setup lang="ts">

// Definición del tipo Job
type Job = {
  role: string
  company: string
  dates: string
  current: boolean
  logo: string
  summary: string
  skills: string[]
}

// Convierte **texto** en resaltado con el color principal
const highlight = (text: string) =>
  text.replace(/\*\*(.+?)\*\*/g, '<span class="hl">$1</span>')

const jobs: Job[] = [

  {
    role: 'Diseñador web',
    company: 'Olter marketing Médico',
    dates: 'Agosto 2026 – Actualidad',
    current: true,
    logo: '/logos/LogoOlter.png',
    summary: 'Responsable del diseño, desarrollo y mantenimiento de sitios web para empresas y profesionales del sector médico, utilizando **WordPress** y **Elementor**. Elaboración de propuestas de diseño y prototipos en **Figma**, asegurando una experiencia de usuario moderna y alineada con la identidad de cada marca. Implementación de buenas prácticas de **SEO** mediante plugins especializados para mejorar el posicionamiento orgánico, así como configuración y gestión de herramientas de seguridad para proteger los sitios web. Optimización del rendimiento, diseño responsive y colaboración con el equipo de marketing para desarrollar soluciones digitales orientadas a la captación de pacientes y fortalecimiento de la presencia en línea.',
    skills: ['WordPress', 'Elementor', 'Figma', 'SEO', 'Seguridad web', 'Responsive'],
  },

  {
    role: 'Diseñador web',
    company: 'Yucatán Now',
    dates: 'Agosto 2025 – Actualidad',
    current: true,
    logo: '/logos/LogoYunow.jpeg',
    summary: 'Diseñador Web responsable de la maquetación, optimización y mantenimiento de los sitios web de **Yucatán Now** y **Gran San Diego Residencial**, asegurando un óptimo rendimiento, funcionalidad y experiencia de usuario. Encargado del diseño y desarrollo de interfaces web responsivas utilizando **WordPress** y **Elementor**, adaptadas a distintos dispositivos. Además, brindé apoyo en diseño gráfico digital mediante la creación de recursos visuales, banners y portadas temáticas para coberturas especiales y publicaciones digitales, contribuyendo al fortalecimiento de la identidad visual y presencia en línea de ambas marcas.',
    skills: ['WordPress', 'Elementor', 'Diseño gráfico', 'Responsive'],
  },

];
</script>

<template>
  <!-- seccion de experencia -->
  <section id="experiencia" class="seccion-experiencia py-5">

    <div class="container">

      <!-- encabezado de la seccion -->
      <header class="text-center mb-5">
        <h2 data-aos="fade-down" class="seccion-titulos p-2">Mi experiencia profesional</h2>
        <p data-aos="fade-up" class="text seccion-subtitulo mx-auto mb-0">
          Empresas y proyectos donde he aplicado diseño y desarrollo web para generar resultados reales.
        </p>
      </header>

      <!-- línea de tiempo -->
      <ol class="timeline">
        <li v-for="(job, i) in jobs" :key="i" class="timeline-item" data-aos="fade-up">

          <!-- marcador de la línea de tiempo (logo de la empresa) -->
          <div class="timeline-marker" :class="{ 'timeline-marker--actual': job.current }">
            <img :src="job.logo" :alt="`Logo de ${job.company}`" width="48" height="48" loading="lazy" />
          </div>

          <!-- tarjeta de la experiencia -->
          <article class="experiencia-card">

            <!-- encabezado: puesto, empresa y fecha -->
            <div class="experiencia-card__header">
              <div class="experiencia-card__titulos">
                <h3 class="experiencia-card__puesto">{{ job.role }}</h3>
                <p class="experiencia-card__empresa">
                  <i class="fa-solid fa-building" aria-hidden="true"></i>
                  {{ job.company }}
                </p>
              </div>

              <div class="experiencia-card__meta">
                <span class="experiencia-card__fecha">
                  <i class="fa-regular fa-calendar" aria-hidden="true"></i>
                  {{ job.dates }}
                </span>
                <span v-if="job.current" class="experiencia-card__estado">
                  <span class="punto-activo" aria-hidden="true"></span>
                  Actualmente
                </span>
              </div>
            </div>

            <!-- descripcion -->
            <p class="experiencia-card__descripcion" v-html="highlight(job.summary)"></p>

            <!-- herramientas utilizadas -->
            <ul class="experiencia-card__skills" aria-label="Herramientas utilizadas">
              <li v-for="skill in job.skills" :key="skill" class="skill-tag">{{ skill }}</li>
            </ul>

          </article>
        </li>
      </ol>

    </div>
  </section>
</template>

<style scoped>
.seccion-titulos {
  font-size: 2.5rem !important;
  font-weight: 800 !important;
  font-family: var(--font-heading) !important;
}

.seccion-subtitulo {
  max-width: 640px;
}

/* =========== Línea de tiempo ================= */
.timeline {
  --marker-size: 56px;
  --linea-x: calc(var(--marker-size) / 2);

  position: relative;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 0 0 calc(var(--marker-size) + 28px);
  list-style: none;
}

/* línea vertical */
.timeline::before {
  content: '';
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: var(--linea-x);
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, var(--color-secundario), var(--color-borde));
  border-radius: 2px;
}

.timeline-item {
  position: relative;
}

.timeline-item + .timeline-item {
  margin-top: 2rem;
}

/* marcador con el logo de la empresa */
.timeline-marker {
  position: absolute;
  top: 20px;
  left: calc(-1 * (var(--marker-size) + 28px));
  width: var(--marker-size);
  height: var(--marker-size);
  padding: 4px;
  border-radius: 50%;
  background-color: var(--bs-body-bg);
  border: 2px solid var(--color-borde);
  z-index: 1;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.timeline-marker--actual {
  border-color: var(--color-secundario);
  box-shadow: 0 0 0 4px rgba(15, 151, 247, 0.15);
}

/* contain + fondo blanco para que los logos tipo texto no se recorten */
.timeline-marker img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
  background-color: #fff;
  display: block;
}

/* =========== Tarjeta ================= */
.experiencia-card {
  position: relative;
  padding: 1.75rem;
  border: 1px solid var(--color-borde);
  border-radius: 16px;
  background-color: var(--color-superficie);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

/* pequeña flecha que apunta al marcador */
.experiencia-card::before {
  content: '';
  position: absolute;
  top: 40px;
  left: -8px;
  width: 14px;
  height: 14px;
  background-color: inherit;
  border-left: 1px solid var(--color-borde);
  border-bottom: 1px solid var(--color-borde);
  transform: rotate(45deg);
  transition: border-color 0.3s ease;
}

.timeline-item:hover .experiencia-card {
  border-color: var(--color-secundario);
  box-shadow: var(--sombra-card);
  transform: translateY(-3px);
}

.timeline-item:hover .experiencia-card::before {
  border-color: var(--color-secundario);
}

.timeline-item:hover .timeline-marker {
  border-color: var(--color-secundario);
  transform: scale(1.06);
}

/* encabezado de la tarjeta */
.experiencia-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-borde);
}

.experiencia-card__puesto {
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--bs-emphasis-color);
}

.experiencia-card__empresa {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-secundario);
}

.experiencia-card__empresa i {
  font-size: 0.9rem;
}

/* fecha y estado */
.experiencia-card__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.experiencia-card__fecha {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background-color: var(--bs-secondary-bg);
  color: var(--color-texto-secundario);
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.experiencia-card__estado {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #198754;
}

[data-bs-theme="dark"] .experiencia-card__estado {
  color: #4ade80;
}

/* punto verde con pulso */
.punto-activo {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: currentColor;
}

.punto-activo::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: currentColor;
  animation: pulso 1.8s ease-out infinite;
}

@keyframes pulso {
  from {
    transform: scale(1);
    opacity: 0.6;
  }

  to {
    transform: scale(2.6);
    opacity: 0;
  }
}

/* descripción */
.experiencia-card__descripcion {
  margin-bottom: 1.25rem;
  color: var(--color-texto-secundario);
  font-size: 1rem;
  line-height: 1.75;
}

/* resaltado de **texto** (v-html necesita :deep en estilos scoped) */
.experiencia-card__descripcion :deep(.hl) {
  font-weight: 700;
  color: var(--bs-emphasis-color);
}

/* etiquetas de herramientas */
.experiencia-card__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-tag {
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid rgba(15, 151, 247, 0.35);
  background-color: rgba(15, 151, 247, 0.08);
  color: var(--color-secundario);
  font-size: 0.85rem;
  font-weight: 600;
}

@media (prefers-reduced-motion: reduce) {
  .punto-activo::after {
    animation: none;
  }

  .timeline-item:hover .experiencia-card,
  .timeline-item:hover .timeline-marker {
    transform: none;
  }
}

/* =========== Responsive ================= */
@media (max-width: 768px) {
  .seccion-titulos {
    font-size: 2rem !important;
  }

  .timeline {
    --marker-size: 44px;
    padding-left: calc(var(--marker-size) + 16px);
  }

  .timeline-marker {
    top: 16px;
    left: calc(-1 * (var(--marker-size) + 16px));
  }

  .experiencia-card {
    padding: 1.25rem;
  }

  .experiencia-card::before {
    top: 30px;
  }

  /* la fecha pasa debajo del puesto */
  .experiencia-card__header {
    flex-direction: column;
  }

  .experiencia-card__meta {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .experiencia-card__puesto {
    font-size: 1.3rem;
  }

  .experiencia-card__descripcion {
    font-size: 15px;
    line-height: 1.7;
  }
}

@media (max-width: 500px) {
  .seccion-titulos {
    font-size: 1.75rem !important;
  }

  .timeline {
    --marker-size: 36px;
    padding-left: calc(var(--marker-size) + 12px);
  }

  .timeline-marker {
    left: calc(-1 * (var(--marker-size) + 12px));
    padding: 2px;
  }

  .experiencia-card {
    padding: 1rem;
    border-radius: 12px;
  }

  .experiencia-card::before {
    display: none;
  }

  .experiencia-card__empresa {
    font-size: 1rem;
  }

  .experiencia-card__fecha {
    font-size: 0.8rem;
    padding: 4px 10px;
    white-space: normal;
  }

  .experiencia-card__descripcion {
    font-size: 14px;
  }

  .skill-tag {
    font-size: 0.75rem;
    padding: 3px 10px;
  }
}
</style>
