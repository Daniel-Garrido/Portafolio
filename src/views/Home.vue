<script>
import SobreMi from '../components/sobre-mi.vue'
import Habilidades from '../components/habilidades.vue'
import Servicios from '../components/servicios.vue'
import Formulario from '../components/formulario.vue'
import Proyectos from '../components/proyectos.vue'
import FooterComp from '../components/footer.vue'
import Inicio from '../components/inicio.vue'
import Experiencia from '../components/experiencia.vue'

export default {
  components: {
    Inicio,
    SobreMi,
    Habilidades,
    Formulario,
    Proyectos,
    FooterComp,
    Experiencia
  }
}
</script>

<template>
  <div>
    <inicio />
    <experiencia />
    <sobre-mi />
    <proyectos />
    <habilidades />
    <formulario />
    <footer-comp />
  </div>
</template>

