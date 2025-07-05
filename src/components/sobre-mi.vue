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

    <h2 class="fw-bold mb-4 text-center  scroll-animate  " data-animacion ="animate__backInDown">
      Sobre mí
    </h2>

    <hr class="hr">

    <div class="d-flex justify-content-center align-items-center">

      <div class="seccion-sobre-mi-content-info container">

        <p class="text scroll-animate" data-animacion="animate__backInUp">
          
          Soy estudiante de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Mérida, actualmente
          cursando el último semestre. Mi pasión por el desarrollo web y la programación me ha llevado a especializarme
          en Desarrollo Web, con un enfoque en mejorar constantemente mis habilidades en
          tecnologías de frontend, backend y diseño.

          Me motiva crear experiencias digitales atractivas, funcionales y optimizadas, siempre con un enfoque en la
          innovación y el aprendizaje continuo. Algunos de mis principales intereses incluyen:
        </p>

        <p class="text scroll-animate" data-animacion="animate__backInUp">
          Diseño de experiencias de usuario (UX) y interfaces intuitivas (UI).
          Desarrollo de aplicaciones web responsivas y optimizadas para diversos dispositivos.
          Exploración de nuevas tecnologías para impulsar soluciones creativas y eficientes.
          Siempre busco nuevos retos que me permitan crecer profesional y personalmente en el ámbito tecnológico.
        </p>

        <div class="botones-sobre-mi d-flex scroll-animate" data-animacion="animate__backInUp">
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

.botones-sobre-mi a {
  margin-right: 10px;
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

@media(max-width: 500px){
  .seccion-sobre-mi-content{
    padding: 15px;
  }
  .seccion-sobre-mi-content-info{
    padding: 0px;
   
  }
  .text {
  font-size: 16px;
  }
}
</style>