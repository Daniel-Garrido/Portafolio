<script setup>
import RedesSociales from '../components/RedesSociales.vue'
</script>

<template>
  
  <main class="links-view d-flex align-items-center justify-content-center">
    <RedesSociales />
  </main>

</template>

<style scoped>

.links-view {
  width: 100%;
  height: 100vh;
}

@media(max-width: 500px) {
  .links-view {
    height: auto;
    padding-top: 20px;
  }
}

</style>