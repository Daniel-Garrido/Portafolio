<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import emailjs from "@emailjs/browser";

// Código que ya tenías para scroll y emailjs
const showScrollButton = ref(false);

const handleScroll = () => {
  if (window.scrollY > 300) {
    showScrollButton.value = true;
  } else {
    showScrollButton.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Variables y funciones para emailjs (sin cambios)
const form = ref({
  emailjs_name: "",
  emailjs_email: "",
  emailjs_message: "",
});

const buttonText = ref("Enviar Correo");
const loading = ref(false);

const sendEmail = async () => {
  loading.value = true;
  buttonText.value = "Enviando...";

  try {
    const serviceID = "default_service";
    const templateID = "template_vy85fmg";
    const publicKey = "Ic_0byHMDqakp2g3h";

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

const resetForm = () => {
  form.value = {
    from_name: "",
    emailjs_email: "",
    emailjs_message: "",
  };
};
</script>


<template>

  <section id="sobre-mi" class="seccion-sobre-mi-content container my-5">

    <h2 data-aos="fade-down" class="fw-bold mb-4 text-center  "> Sobre mí</h2>
   

    <div class="d-flex justify-content-center align-items-center">

      <div class="seccion-sobre-mi-content-info container">

        <p data-aos="fade-right" class="text">
          Soy egresado de la carrera de Ingeniería en Sistemas Computacionales por el Instituto Tecnológico de Mérida,
          con enfoque en desarrollo web y soluciones digitales. A lo largo de mi formación y experiencia profesional he
          fortalecido habilidades en tecnologías de frontend y backend, así como en diseño de interfaces y experiencia
          de usuario (UI/UX), aplicando buenas prácticas de desarrollo, optimización y mantenimiento de plataformas web.
        </p>

        <p data-aos="fade-right" class="text ">
          Me especializo en la creación de sitios y aplicaciones web funcionales, responsivas y optimizadas, cuidando
          tanto la parte visual como el rendimiento y la estructura del sistema. Tengo experiencia trabajando con
          WordPress, Elementor y estrategias de SEO on-page, así como en la generación de contenido digital y soporte
          técnico continuo. Me caracteriza el aprendizaje constante, la capacidad de adaptación a nuevas tecnologías y
          la búsqueda de soluciones eficientes que aporten valor real a los proyectos. Siempre estoy en busca de nuevos
          retos que impulsen mi crecimiento profesional y me permitan contribuir de manera efectiva en equipos
          tecnológicos.
        </p>

        <div data-aos="fade-up" class="botones-sobre-mi d-flex ">
          <a href="CVDANIEL.pdf" class="btn btn-primary" download="CVDANIEL.pdf">Descargar CV</a>
        </div>
      </div>

    </div>
  </section>

</template>

<style>

section {
  scroll-margin-top: 80px;
}


.hr {
  width: 100px;
  background-color: #0F97f7;
  padding: 1px;
}

.text {
  color: #686a6f;
  font-size: 18px;
  line-height: 30px;
  font-family: 'Open Sans', sans-serif;
}

@media(max-width: 500px) {
  .seccion-sobre-mi-content {
    padding: 15px;
  }

  .seccion-sobre-mi-content-info {
    padding: 0px;
  }

  .text {
    font-size: 14px;
    line-height: 25px;
  }
}
</style>