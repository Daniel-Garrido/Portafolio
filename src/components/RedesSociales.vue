<script setup>
import redesSociales from '../data/redesSocialesData.js'

//Datos del perfil
const perfil = {
  avatar: '/logos/FOTOPRINCIPAL.webp',
  bio: 'Soy Ingeniero en Sistemas Computacionales con un enfoque en Ingeniería de Software, especializado en el diseño, desarrollo e implementación de soluciones tecnológicas escalables y de alta calidad. Me apasiona transformar problemas complejos en sistemas eficientes mediante la aplicación de buenas prácticas de arquitectura, desarrollo y mantenimiento de software.'
}

</script>

<template>

  <section class="d-flex justify-content-center align-items-center" id="redes">
  
    <!-- contenedor principal de redes sociales -->
    <div class="redes-sociales container p-4">
      
      <!-- contenedor de imagen de perfil -->
      <div class="redes-sociales__avatar-wrapper d-flex justify-content-center mb-3">
        <img :src="perfil.avatar" alt="" class="redes-sociales__avatar object-fit-cover" />
      </div>

      <!-- contenedor descripcion -->
      <p class="redes-sociales__bio text-center fs-5 fw-light mb-4">
        {{ perfil.bio }}
      </p>

      <!-- contenedor links redes sociales -->
      <div class="redes-sociales__lista">
        <a v-for="red in redesSociales" :key="red.id" :href="red.url" target="_blank" rel="noopener noreferrer"
          class="redes-sociales__link" :style="{ '--hover-color': red.color }" :aria-label="red.nombre">
          <i :class="red.icono"></i>
          <span class="redes-sociales__nombre text-left fs-5 fw-bolder">
            {{ red.nombre }}
          </span>
        </a>
      </div>
    </div>

  </section>
</template>

<style scoped>

.redes-sociales__avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
}

/* Lista de links en filas */
.redes-sociales__lista {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.redes-sociales__link {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);

  /* Sombra */
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

  /* Animaciones */
  transition: all 0.3s ease;
}

.redes-sociales__link:hover {
  background-color: var(--hover-color);
  color: #fff;
  transform: translateY(-2px);
}

.redes-sociales__icono {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  font-size: 1.5rem;
}

.redes-sociales__nombre {
  flex: 1;
  font-size: 1.3rem;
}

@media (max-width: 768px) {

  .redes-sociales__bio {
    font-size: 17px !important;
  }
}

</style>