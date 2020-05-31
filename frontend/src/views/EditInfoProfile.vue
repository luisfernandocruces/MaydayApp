<template>
  <div>
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 bg-gradient-default shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <h1>Editar pérfil</h1>
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

                <h6 required class="card-title">Tipo de Documento</h6>

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

                <base-input
                  label="Documento de identidad"
                  type="number"
                  placeholder="Documento"
                  name="document_number"
                  required
                  disabled
                  v-model="user.document_number"
                ></base-input>

                <base-input
                  label="Fecha de Nacimiento"
                  type="date"
                  name="birthdate"
                  required
                  v-model="user.birthdate"
                ></base-input>

                <div v-if="user.rol === 'health professional'">
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
                  label="Número telefónico"
                  type="number"
                  name="phone_number"
                  v-model="user.phone_number"
                ></base-input>

                <base-input
                  label="Breve descripción"
                  type="text"
                  placeholder="descripción"
                  name="description"
                  v-model="user.description"
                ></base-input>

                <base-button type="primary" @click="updateUser">Actualizar</base-button>
                <br />
                <br />
              </form>
            </template>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script>
import { Select, Option } from "element-ui";

export default {
  name: "EditInfoProfile",
  components: {
    [Option.name]: Option,
    [Select.name]: Select
  },
  data() {
    return {
      user: {
        rol: this.$store.state.user.rol,
        first_name: this.$store.state.user.first_name,
        last_name: this.$store.state.user.last_name,
        document_type: this.$store.state.user.document_type,
        document_number: this.$store.state.user.document_number,
        professional_card_number: this.$store.state.user
          .professional_card_number,
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        phone_number: this.$store.state.user.phone_number,
        description: this.$store.state.user.description,
        health_area: this.$store.state.user.health_area,
        birthdate: this.$store.state.user.phone_number
      },
      document_types: [
        { type: "Cédula de Ciudadanía" },
        { type: "Cédula de Extranjería" },
        { type: "Pasaporte" }
      ]
    };
  },
  methods: {
    updateUser() {
      console.log("done");
    }
  }
};
</script>

<style>
</style>