<template>
  <section class="section section-shaped section-lg my-0">
    <div>
      <div class="shape shape-style-1 bg-gradient-info">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg-lg">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <card
              type="secondary"
              shadow
              header-classes="bg-white pb-5"
              body-classes="px-lg-5 py-lg-5"
              class="border-0"
            >
              <!-- <template>
              <div class="text-muted text-center mb-3">
                <small>Sign in with</small>
              </div>
              <div class="btn-wrapper text-center">
                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/github.svg" />
                  Github
                </base-button>

                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/google.svg" />
                  Google
                </base-button>
              </div>
              </template>-->
              <template>
                <div class="text-center text-muted mb-4">Iniciar Sesión</div>
                <form role="form">
                  <base-input
                    alternative
                    class="mb-3"
                    placeholder="Correo Electronico"
                    addon-left-icon="ni ni-email-83"
                    v-model="email"
                  ></base-input>
                  <base-input
                    alternative
                    type="password"
                    placeholder="Contraseña"
                    addon-left-icon="ni ni-lock-circle-open"
                    v-model="password"
                  ></base-input>

                  <div class="text-center">

                    <base-button type="primary" class="my-4" @click="signin">Iniciar Sesión</base-button>

                  </div>
                </form>
              </template>
            </card>
            <div class="row mt-3">
              <div class="col-6"></div>
              <div class="col-6 text-right">
                <a href="#" class="text-white">
                  <router-link to="/registerMenu" class="text-white">Crear una cuenta</router-link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>

    <modal :show.sync="modalShow">
      <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">Error</h5>
      </template>
      <div>{{ messageLogin }}</div>
      <template slot="footer">
        <base-button type="secondary" @click="modalShow = false"
          >Aceptar</base-button
        >
      </template>
    </modal>
  </section>
</template>
<script>
import axios from "../plugins/axios";
import Modal from "@/components/Modal";

export default {
  name: "login",
  components: {
    Modal,
  },
  data() {
    return {
      modalShow: false,
      show: false,
      email: "",
      password: "",
      messageLogin: "",
    };
  },
  methods: {
    async signin() {
      this.show = true;
      console.log("this is login!");
      console.log(this.email);
      console.log(this.password);
      let user = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post("/users/signin", user)
        .then((response) => {
          if (response.status == 200) {
            var user = response.data.currentUser;
            var token = response.data.accessToken;
            localStorage.setItem("jwt", token);

            this.$store.commit("updateUser", user);
            console.log(this.$store.state.user);
            this.$store.commit("changeTheLogged", true);
            this.$router.push("/");
          }

          this.$router.push("/");

        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 401) {
            this.messageLogin = "Contraseña incorrecta";
            this.modalShow = true;
          } else if (error.response.status == 404) {
            this.messageLogin = "Usuario no registrado";
            this.modalShow = true;
          } else {
            this.messageLogin = "Problemas interno del servido. " + error;
            this.modalShow = true;
          }
        });

      this.$store.commit("changeTheLogged", true);
      console.log(this.$store.state.logged);
    }
  }

};
</script>
<style></style>
