import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//importar libreria AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

//inicir la libreria de AOS
AOS.init({
  duration: 800, // duración de animación (en ms)
  once: true     // si quieres que se anime solo una vez
})

