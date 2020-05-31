<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-info">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <form>
                 <p v-if="errors.length">
                    <base-alert v-for="error in errors" type="warning" :key="error">
                      <strong>Atención!</strong> {{error}}
                    </base-alert>
                 </p>
                <base-input
                  label="Nombre"
                  type="text"
                  placeholder="Nombre"
                  name="first_name"
                  required
                  v-model="user.first_name"
                ></base-input>

                <base-input
                  label="Apellido"
                  type="text"
                  placeholder="Apellido"
                  name="last_name"
                  required
                  v-model="user.last_name"
                ></base-input>

                <base-input required label="Tipo de Documento">
                  <el-select
                    label="Tipo de documento"
                    collapse-tags
                    class="select-primary"
                    size="large"
                    required
                    placeholder="Ingrese el tipo de Documento"
                    v-model="user.document_type"
                  >
                    <el-option
                      v-for="option in document_types"
                      class="select-primary"
                      :value="option.type"
                      :label="option.type"
                      :key="option.type"
                    ></el-option>
                  </el-select>
                </base-input>

                <base-input
                  label="Documento de identidad"
                  type="number"
                  placeholder="Documento"
                  name="document_number"
                  required
                  v-model="user.document_number"
                ></base-input>

                <base-input
                  label="Fecha de Nacimiento"
                  type="date"
                  name="birthdate"
                  required
                  v-model="user.birthdate"
                ></base-input>

                <div v-if="userType === 'health'">
                  <base-input
                    label="Numero Tarjeta profesional"
                    type="number"
                    placeholder="Numero Tarjeta profesional"
                    name="professionalCardNumber"
                    required
                    v-model="user.professional_card_number"
                  ></base-input>

                  <base-input
                    label="Area de la Salud"
                    type="text"
                    placeholder="Area de la Salud"
                    name="healtArea"
                    required
                    v-model="user.health_area"
                  ></base-input>
                </div>

                <base-input
                  label="Correo Electronico"
                  type="text"
                  placeholder="Correo"
                  name="email"
                  required
                  v-model="user.email"
                ></base-input>

                <base-input
                  label="Contraseña"
                  type="password"
                  name="password"
                  required
                  v-model="user.password"
                ></base-input>

                <base-input
                  label="Confirmar Contraseña"
                  type="password"
                  name="confirm_password"
                  required
                  v-model="confirmation_password"
                ></base-input>

                <base-input
                  label="Número telefónico"
                  type="number"
                  name="phone_number"
                  v-model="user.phone_number"
                ></base-input>

                <base-input required label="Breve Descripción">
                  <textarea 
                    class="form-control"
                    id="description" rows="3" 
                    label="Breve Descripción"
                    placeholder="Haz una breve descripción tuyadsadasd"
                    v-model="user.description"></textarea>
                </base-input>

                <!-- <div class="col-md-12">
                  <base-input label="Breve Description">
                    <textarea
                      placeholder="Breve descripción sobre tu persona"
                      name="description"
                      v-model="user.description"
                    ></textarea>
                  </base-input>
                </div> -->

                <base-button type="primary" @click="checkForm">Registrarme!</base-button>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Select, Option } from "element-ui";

import axios from "../plugins/axios";
export default {
components: {
    [Option.name]: Option,
    [Select.name]: Select
  },

  props: ["userType"],
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        document_type: "",
        document_number: "",
        professional_card_number: "",
        email: "",
        password: "",
        phone_number: "",
        description: "",
        health_area: "",
        birthdate: ""
      },
      document_types: [
        { type: "Cédula de Ciudadanía" },
        { type: "Cédula de Extranjería" },
        { type: "Pasaporte" }
      ],
      confirmation_password:"",
      errors: []
    };
  },
  created() {

  },

  methods: {
    register() {
      if (this.userType == "normal") {
        axios.post("/users/normalUser", this.user).then(response => {
          if (response.status == 200) {
            alert("Usuario creado");
          } else {

          }
        });
      } else if (this.userType == "health") {
        axios.post("/users/healthProfessional", this.user).then(response => {
          if (response.status == 200) {
            alert("Usuario creado");
          } else {

          }
        });
      }
    },

    //Taken From: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    checkForm: function (e) {
      
      this.errors = [];

      if (!this.user.first_name) {
        this.errors.push('Nombre requerido');
      }
      if (!this.user.last_name) {
        this.errors.push('Apellido requerido.');
      }
      if (!this.user.document_type) {
        this.errors.push('Tipo de Documento Requerido');
      }
      if (!this.user.document_number) {
        this.errors.push('Número de documento requerido');
      }
      if (!this.user.password) {
        this.errors.push('Contraseña requerida');
      }
      if (!this.user.birthdate) {
        this.errors.push('Fecha de nacimiento Requerida');
      }
      if (!this.user.email) {
        this.errors.push('Correo Requerido');
      } else if (!this.validEmail(this.user.email)){
        this.errors.push('El correo electrónico no es válido');
      }
      if (this.user.password != this.confirmation_password) {
        this.errors.push('Las contraseñas no coinciden');
      }

      if (this.userType == "health"){
        if (!this.user.professional_card_number) {
        this.errors.push('Número de tarjeta profesional Requerida');
        }

        if (!this.user.health_area) {
        this.errors.push('Área de salud requerida');
        }
      }

      if (!this.errors.length){
        this.register();
      }


      e.preventDefault();
    }
  }
};
</script>
<style>
</style>
