<script setup>

//importar los componentes al archivo principal 
import Header from './components/header.vue';
import SobreMi from './components/sobre-mi.vue';
import Proyectos from './components/proyectos.vue';
import Habilidades from './components/habilidades.vue';
import Footer from './components/footer.vue';
import Servicios from './components/servicios.vue';

//importar libreria de emailjs
import { ref } from "vue";
import emailjs from "@emailjs/browser";

// Variables reactivas
const form = ref({
  emailjs_name: "",
  emailjs_email: "",
  emailjs_message: "",
});

const buttonText = ref("Enviar Correo");
const loading = ref(false);

// Función para enviar el correo
const sendEmail = async () => {
  loading.value = true;
  buttonText.value = "Enviando...";

  try {
    const serviceID = "default_service";
    const templateID = "template_vy85fmg";
    const publicKey = "Ic_0byHMDqakp2g3h"; // ⚠️ Usa tu propia clave pública

    await emailjs.send(serviceID, templateID, form.value, publicKey);
    alert("Correo enviado con éxito 🎉");
    resetForm();
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    alert("Error al enviar el correo.");
  } finally {
    loading.value = false;
    buttonText.value = "Enviar Correo";
  }
};

// Función para limpiar el formulario
const resetForm = () => {
  form.value = {
    from_name: "",
    emailjs_email: "",
    emailjs_message: "",
  };
};

</script>

<template>

  <div id="app">

    <Header />

    <!-- seccion de inicio -->
    <section class="inicio d-flex justify-content-center align-items-center vh-100 bg-light ">

      <div class="contenedor-Inicio container p-1 d-flex align-items-center gap-4">
        <!--Contenedor de Imagen -->
        <div class="contenedor-img d-flex justify-content-center ">
          <img src="./assets/Imagenes/logo.png" alt="Daniel Garrido">
        </div>

        <!--Contenedor de  Información -->
        <div class="contenedor-info w-100 container ">
          <h1 class="mb-2">Daniel Arcángel Garrido Hoil</h1>
          <p class="text-muted mb-3">Diseñador Web!!</p>
          <!-- Iconos -->
          <div class="iconos d-flex mb-3 animacion-redes-sociales">
            <a href="#" class="text-decoration-none me-6 "><i class="fab fa-linkedin"></i></a>
            <a href="#" class="text-decoration-none me-6 "><i class="fab fa-github"></i></a>
            <a href="#" class="text-decoration-none "><i class="fab fa-instagram"></i></a>
          </div>
          <!-- Botón de contacto -->
          <a href="#" class=" btn text-white ">Contacto</a>
        </div>
      </div>

    </section>

    <SobreMi />

    <Proyectos />

    <Habilidades />

    <Servicios />


    <!-- formulario de registro -->
    <section>
      <div>
        <h2 class="mb-4 text-center">Contacto</h2>
        <form class="formulario_contacto" @submit.prevent="sendEmail">
          <div class="formulario_contacto_content">
            <div class="field">
              <label for="from_name">Nombre</label>
              <input type="text" v-model="form.from_name" />
            </div>

            <div class="field">
              <label for="emailjs_email">Correo Electrónico</label>
              <input type="email" v-model="form.emailjs_email" />
            </div>

            <div class="field">
              <label for="project_type">¿Qué servicio te interesa?</label>
              <select v-model="form.project_type">
                <option value="web">Páginas web</option>
                <option value="movil">Diseño</option>
                <option value="software">Programación</option>
              </select>
            </div>


            <div class="field">
              <label for="emailjs_message">Cuentános  más sobre tu proyecto</label>
              <textarea v-model="form.emailjs_message" required></textarea>
            </div>

            <div class="text-center">
              <input class=" btn btn-primary" type="submit" :value="buttonText" :disabled="loading" />
            </div>
          </div>

        </form>
      </div>
    </section>

    <Footer />

  </div>

</template>

<style>
/**** animacion a las redes sociales  *****/
.animacion-redes-sociales {
  perspective: 1000px;
}

/* Estilo base para los íconos */
.animacion-redes-sociales i {
  font-size: 30px;
  transition: transform 0.8s ease, color 0.8s ease;
  display: inline-block;
}

/* Efecto 3D al hacer hover */
.animacion-redes-sociales i:hover {
  transform: rotateY(360deg);
}

/*estilos para los iconos de las redes sociales  */

.iconos a:nth-child(1) i {
  color: #0077b5;
}

.iconos a:nth-child(2) i {
  color: #333333;
}

.iconos a:nth-child(3) i {
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


/* imagen de inicio */
.contenedor-img img {
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 50%;
}

.iconos a {
  font-size: 30px;
  padding-right: 10px;
}

.btn {
  padding: 5px 30px;
  background-color: #0F97F7;
  border: 1px solid #0F97F7;
  border-radius: 0px;
  transition: all 0.5s ease;

}

.btn:hover {
  background-color: white;
  transition: all 0.5s ease;
  color: #000 !important;
}

/******formulario de contacto********/
.formulario_contacto {
  width: 100%;
  display: flex;
  justify-content: center;
}

.formulario_contacto_content {
 
  width: 60%;
  padding: 15px;
  border: 2px solid #f8f9fa;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;

}

.field {
  margin-bottom: 10px;
}

.field label {
  display: block;
  font-size: 16px;
}

.field input,
.field textarea {
  display: block;
  width: 100%;
  line-height: 1.5;
  font-size: 16px;
}


/*************** media querys *****************/
@media (max-width: 500px) {
  .contenedor-Inicio {
    flex-direction: column;
  }
}
</style>