// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProyectoDetalle from '../views/proyectoDetalle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/proyecto/:id',
    name: 'proyectoDetalle',
    component: ProyectoDetalle,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory('/Portafolio/'), // 👈 importante
  routes
})


export default router
