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
            <br>
            <h1>Editar perfil</h1>
            <template>
              <form>
                  <div class="row">
            <div class="col">
              <base-input
                label="Nombre"
                type="text"
                placeholder="Nombre"
                name="first_name"
                required
                v-model="user.first_name"
              ></base-input>
            </div>

            <div class="col">
              <base-input
                label="Apellido"
                type="text"
                placeholder="Apellido"
                name="last_name"
                required
                v-model="user.last_name"
              ></base-input>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6" >
              <base-input required label="Tipo de Documento"  >
              
                <el-select
                style="width: -webkit-fill-available;"
                  label="Tipo de documento"
                  collapse-tags
                 
                  size="large"
                  required
                  placeholder="Ingrese el tipo de Documento"
                  v-model="user.document_type"
                  disabled
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
            </div>
            <div class="col">
              <base-input
               disabled
                label="Documento de identidad"
                type="number"
                placeholder="Documento"
                name="document_number"
                required
                v-model="user.document_number"
              ></base-input>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <base-input
                label="Fecha de Nacimiento"
                type="date"
                name="birthdate"
                required
               
              ><el-date-picker  style="width: -webkit-fill-available;"
                  v-model="user.birthdate"
                  type="date"
                  format="dd/MM/yyyy"
                  placeholder="Selecciona una fecha de nacimiento">
                </el-date-picker></base-input>
            </div>
          </div>

          <div class="row" v-if="user.rol === 'health professional'">
            <div class="col">
              <base-input
                label="Numero Tarjeta profesional"
                type="number"
                placeholder="Numero Tarjeta profesional"
                name="professionalCardNumber"
                required
                v-model="user.professional_card_number"
              ></base-input>
            </div>

            <div class="col">
              <base-input
                label="Area de la Salud"
                type="text"
                placeholder="Area de la Salud"
                name="healtArea"
                required
                
              > <el-select v-model="user.health_area" size="large" placeholder="Seleccionar"   style="width: -webkit-fill-available;">
                    <el-option
                     
                      v-for="item in areas"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value"
                    ></el-option>
                  </el-select></base-input>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <base-input
                label="Correo Electronico"
                type="text"
                placeholder="Correo"
                name="email"
                required
                v-model="user.email"
              ></base-input>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <base-input
                label="Contraseña"
                type="password"
                name="password"
                required
                v-model="user.password"
              ></base-input>
            </div>

        
          </div>

          <div class="row">
            <div class="col">
               <base-input
                label="Género"
                required
                name="gender"
                
              > <el-select
                style="width: -webkit-fill-available;"
    
                  size="large"
                  required
                  placeholder="Género"
                  v-model="user.gender"
                >
                  <el-option
                  
                    v-for="option in genders"
                   
                    :value="option.type"
                    :label="option.type"
                    :key="option.type"
                  ></el-option>
                </el-select></base-input>
            </div>
            <div class="col">
              <base-input
              
                label="Número telefónico"
                type="number"
                name="phone_number"
                v-model="user.phone_number"
              ></base-input>
            </div>

            
          </div>

          <base-input required label="Breve Descripción">
            <textarea
              class="form-control"
              id="description"
              rows="3"
              label="Breve Descripción"
              placeholder="Haz una breve descripción tuya"
              v-model="user.description"
            ></textarea>
          </base-input>
          <div class="row">
            <div class="col"></div>
          </div>

                <base-button type="primary" @click="updateUser">Actualizar</base-button>
                <br />
                <br />
              </form>
            </template>
          </div>
        </card>
      </div>

      <modal :show.sync="modalShow">
        <template slot="header">
          <h5 class="modal-title" id="exampleModalLabel">Información</h5>
        </template>
        <div>{{ messageLogin }}</div>
        <template slot="footer">
          <base-button type="secondary" @click="gotEditInfo">Aceptar</base-button>
        </template>
      </modal>
    </section>
  </div>
</template>

<script>
import { Select, Option } from "element-ui";
import axios from "../plugins/axios";
import Modal from "@/components/Modal";

export default {
  name: "EditInfoProfile",
  components: {
    Modal,
    [Option.name]: Option,
    [Select.name]: Select
  },
  data() {
    return {
      modalShow: false,
      messageLogin: "", 
      areas: [
        { value: "General" },
        { value: "Enfermería" },
        { value: "Urología" },
        { value: "Cardiología" },
        { value: "Pediatría" },
        { value: "Neurología" },
        { value: "Ginecología" },
        { value: "Ortopedia" },
        { value: "Nefrología" },
        { value: "Gastroenterología" },
        { value: "Neumología" },
        { value: "Oncología" }

      ],
      genders: [
        { type: "Hombre" },
        { type: "Mujer" },
        { type: "Otro" }
      ],
      user: {
        rol: this.$store.state.user.rol,
        first_name: this.$store.state.user.first_name,
        last_name: this.$store.state.user.last_name,
        document_type: this.$store.state.user.document_type,
        document_number: this.$store.state.user.document_number,
        professional_card_number: this.$store.state.user
          .professional_card_number,
        email: this.$store.state.user._id,
        password: this.$store.state.user.password,
        phone_number: this.$store.state.user.phone_number,
        description: this.$store.state.user.description,
        health_area: this.$store.state.user.health_area,
        birthdate: this.$store.state.user.birthdate,
        gender: this.$store.state.user.gender
        
      },
      document_types: [
        { type: "Cédula de Ciudadanía" },
        { type: "Cédula de Extranjería" },
        { type: "Pasaporte" }
      ]
    };
  },
  methods: {
    gotEditInfo() {
      this.modalShow = false;
      this.$router.push("/profile");
    },
    updateUser() {
      console.log("done");
      axios
        .put("/users/" + this._id, this.user)
        .then(response => {
          
          if (response.status == 200) {
            this.$store.commit("updateUser", this.user);
            this.messageLogin = "Se han actualizado los datos correctamente.";
            this.modalShow = true;
          }
        })
        .catch(error => {
          console.log(error);
          this.messageLogin = error;
          this.modalShow = true;
        });
    }
  }
};
</script>

<style></style>
