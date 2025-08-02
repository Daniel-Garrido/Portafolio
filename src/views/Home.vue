<script>
import SobreMi from '../components/sobre-mi.vue'
import Habilidades from '../components/habilidades.vue'
import Servicios from '../components/servicios.vue'
import Formulario from '../components/formulario.vue'
import Proyectos from '../components/proyectos.vue'
import FooterComp from '../components/footer.vue'
import Inicio from '../components/inicio.vue'

export default {
  components: {
    Inicio,
    SobreMi,
    Habilidades,
    Servicios,
    Formulario,
    Proyectos,
    FooterComp
  }
}
</script>

<template>
  <div>
    <inicio />
    <sobre-mi />
    <proyectos />
    <habilidades />
    <servicios />
    <formulario />
    <footer-comp />
  </div>
</template>

