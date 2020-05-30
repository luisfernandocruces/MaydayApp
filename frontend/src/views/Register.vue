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

                <select
                  :multiple="multiple === 'true'"
                  v-bind:class="{ 'fix-height': multiple === 'true' }"
                  v-model="multipleSelections"
                >

                <el-select
                  multiple
                  label="Tipo de Documento"
                  size="large"
                  placeholder="Selecciona el tipo de documento"
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
                ></base-input>

                <base-input
                  label="Número telefónico"
                  type="number"
                  name="phone_number"
                  v-model="user.phone_number"
                ></base-input>

                <div class="col-md-12">
                  <base-input label="Breve Description">
                    <textarea
                      placeholder="Breve descripción sobre tu persona"
                      name="description"
                      v-model="user.description"
                    ></textarea>
                  </base-input>
                </div>

                <button @click="register">Registrarme!</button>
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
        document_type: "C.C",
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
      ]
    };
  },
  created() {},
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
    }
  }
};
</script>
<style>
</style>
