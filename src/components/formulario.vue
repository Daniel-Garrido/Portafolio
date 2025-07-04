<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Variables reactivas para el formulario
const form = ref({
  from_name: "",
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
    from_name: "",
    emailjs_email: "",
    emailjs_message: "",
    project_type: "",
  }
}
</script>

<template>

  <section id="contacto">
    <div class="p-5 formulario_contacto_contenedor">
      <div class="text-center mb-5">
        <h2 class="text-dark scroll-animate" data-animacion="animate__backInDown">Contacto</h2>
        <hr class="hr">
      </div>

      <form class="formulario_contacto" @submit.prevent="sendEmail">
        <div class="formulario_contacto_content">
          <div class="field">
            <label for="from_name">Nombre</label>
            <input class="input" type="text" v-model="form.from_name" />
          </div>

          <div class="field">
            <label for="emailjs_email">Correo Electrónico</label>
            <input class="input" type="email" v-model="form.emailjs_email" />
          </div>

          <div class="field">
            <label class="select" for="project_type">¿Qué servicio te interesa?</label>
            <select v-model="form.project_type">
              <option value="web">Páginas web</option>
              <option value="movil">Diseño</option>
              <option value="software">Programación</option>
            </select>
          </div>

          <div class="field">
            <label for="emailjs_message">Cuéntanos más sobre tu proyecto</label>
            <textarea rows="10" v-model="form.emailjs_message" required></textarea>
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

  width: 60%;
  padding: 15px;
  border: 1px solid #c2c2c2;
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

@media (max-width: 500px){
  
  /* responsive design al formulario */
  .formulario_contacto_contenedor{
    padding: 10px !important;
    padding-top: 50px !important;
   
  }
  .formulario_contacto_content {
    width: 100%;
  }
}
</style>


