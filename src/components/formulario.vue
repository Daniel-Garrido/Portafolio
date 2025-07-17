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
        <h2 class="text-dark ">Contacto</h2>
        <hr class="hr">
      </div>

      <!-- Inicio del formulario -->
      <form class="formulario_contacto" @submit.prevent="sendEmail">
        <div class="formulario_contacto_content">
          
          <div class="field">
            <label for="from_name"></label>
            <input class="input" type="text" placeholder="Ingresa tu nombre" v-model="form.from_name" />
          </div>

          <div class="field">
            <label for="emailjs_email" ></label>
            <input class="input" type="email" placeholder="Correo electrónico" v-model="form.emailjs_email" />
          </div>

          <div class="field">
            <select v-model="form.project_type">
              <option disabled selected value="">¿Qué servicio te interesa?</option>
              <option value="web">Páginas web</option>
              <option value="movil">Diseño</option>
              <option value="software">Programación</option>
            </select>
          </div>

          <div class="field">
            <label for="emailjs_message">Cuéntanos más sobre tu proyecto</label>
            <textarea rows="5" v-model="form.emailjs_message" required></textarea>
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
  border: 1px solid #c2c2c2;
}

.field {
  margin-bottom: 15px;
}


.field label {
  display: block;
  font-size: 16px;
  padding: 10px 10px 0px 0px;
}


.field input{
  width: 50%;
  border: none;
  border-bottom: 1px solid #c2c2c2;
  padding: 10px 10px 0px 0px;
  margin-top: 20px;
  margin-bottom:20px;
}

.field input:focus,
.field input:hover {
  outline: none;
  box-shadow: none;
}

.field select{
  
  width: 100%;
  border: none;
  border-bottom: 1px solid #c2c2c2;
 
}
.field select:focus,
.field select:hover{
  outline: none;
  box-shadow: none;
}

.field input,
.field textarea {
  display: block;
  width: 100%;
  line-height: 1.5;
  font-size: 16px;
}

.field textarea{
   border: 1px solid #c2c2c2;
}

.field textarea:focus,
.field textarea:hover{
  outline: none;
  box-shadow: none;
}

@media (max-width: 700px){
  
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


