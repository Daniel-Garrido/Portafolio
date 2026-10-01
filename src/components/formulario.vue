<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Variables reactivas para el formulario
const form = ref({
  emailjs_name: "",
  emailjs_email: "",
  emailjs_message: "",
  project_type: "",
})

const buttonText = ref("Enviar Correo")
const loading = ref(false)

// Función para enviar correo
const sendEmail = async () => {
  loading.value = true
  buttonText.value = "Enviando..."

  try {
    const serviceID = "default_service"
    const templateID = "template_vy85fmg"
    const publicKey = "Ic_0byHMDqakp2g3h" // Usa tu propia clave pública

    await emailjs.send(serviceID, templateID, form.value, publicKey)
    alert("Correo enviado con éxito 🎉")
    resetForm()
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    alert("Error al enviar el correo.")
  } finally {
    loading.value = false
    buttonText.value = "Enviar Correo"
  }
}

// Resetear formulario
const resetForm = () => {
  form.value = {
    emailjs_name: "",
    emailjs_email: "",
    emailjs_message: "",
    project_type: "",
  }
}
</script>

<template>

  <section id="contacto">
    <div class="p-5 formulario_contacto_contenedor">
      
      <div class="text-center mb-2">
        <h2 data-aos="fade-down">Contacto</h2>
      </div>

      <form class="formulario_contacto" @submit.prevent="sendEmail">
        <div class="formulario_contacto_content">
          <div class="formulario_contacto_content-text">
            <p data-aos="fade-down" class="text text-center">
              ¿Quieres impulsar tu presencia en línea o empezar un nuevo proyecto? <br/>
              Contactame y juntos haremos realidad tus ideas. Estoy aquí para ayudarte a llevar tu proyecto al siguiente nivel.
            </p>
          </div>

          <div class="field">
            <label for="emailjs_name">Nombre*</label>
            <input id="emailjs_name" name="emailjs_name" class="input" type="text" placeholder="Ingresa tu nombre"
              v-model="form.emailjs_name" required autocomplete="name" />
          </div>

          <div class="field">
            <label for="emailjs_email">Correo electrónico*</label>
            <input id="emailjs_email" name="emailjs_email" class="input" type="email" placeholder="Correo electrónico"
              v-model="form.emailjs_email" required autocomplete="email" />
          </div>

          <div class="field">
            <label for="project_type">Selecciona tu servicio*</label>
            <select id="project_type" name="project_type" v-model="form.project_type" required>
              <option disabled value="">¿Qué servicio te interesa?</option>
              <option value="web">Páginas web</option>
              <option value="movil">Diseño</option>
              <option value="software">Programación</option>
            </select>
          </div>

          <div class="field">
            <label for="emailjs_message">Cuéntanos más sobre tu proyecto*</label>
            <textarea id="emailjs_message" name="emailjs_message" rows="5" v-model="form.emailjs_message"
              required></textarea>
          </div>

          <div class="text-center">
            <input class="btn btn-primary" type="submit" :value="buttonText" :disabled="loading" />
          </div>
        </div>
      </form>
    </div>
  </section>

</template>

<style>
/******formulario de contacto********/

.formulario_contacto {
  width: 100%;
  display: flex;
  justify-content: center;
}

.formulario_contacto_content {
  width: 50%;
  padding: 15px 30px 15px 30px;

}

.field {
  margin-bottom: 15px;
  ;
}


.field label {
  font-weight: 600;
  display: block;
  font-size: 16px;
}

.field input {
  width: 50%;
  border: 1px solid #038be6;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.field input:focus,
.field input:hover {
  outline: none;
  box-shadow: none;
}

.field select {

  width: 100%;
  border: none;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #038be6;
  border-radius: 5px;

}

.field select:focus,
.field select:hover {
  outline: none;
  box-shadow: none;
}

/* Fondo y texto de los campos según el tema de Bootstrap */
.field input,
.field select,
.field textarea {
  background-color: var(--bs-body-bg);
  color: var(--bs-body-color);
}

.field input,
.field textarea {
  display: block;
  width: 100%;
  line-height: 1.5;
  font-size: 16px;
}

.field textarea {
  border: 1px solid #038be6;
  border-radius: 5px;
  padding: 10px;

}

.field textarea:focus,
.field textarea:hover {
  outline: none;
  box-shadow: none;
}

@media (max-width: 700px) {

  /* responsive design al formulario */
  .formulario_contacto_contenedor {
    padding: 10px !important;
    padding-top: 50px !important;

  }

  .formulario_contacto_content {
    width: 100%;
  }

  .field label {
    font-size: 14px;
  }

}
</style>
