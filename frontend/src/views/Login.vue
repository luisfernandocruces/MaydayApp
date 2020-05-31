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
                <div class="text-center text-muted mb-4">
                  <small>Sig in</small>
                </div>
                <form role="form">
                  <base-input
                    alternative
                    class="mb-3"
                    placeholder="Email"
                    addon-left-icon="ni ni-email-83"
                    v-model="email"
                  ></base-input>
                  <base-input
                    alternative
                    type="password"
                    placeholder="Password"
                    addon-left-icon="ni ni-lock-circle-open"
                    v-model="password"
                  ></base-input>

                  <div class="text-center">
                    <base-button type="primary" class="my-4" @click="signin"> Iniciar Sesión</base-button>
                  </div>
                </form>
              </template>
            </card>
            <div class="row mt-3">
              <div class="col-6"></div>
              <div class="col-6 text-right">
                <a href="#" class="text-white">
                  <small>Create new account</small>
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
  </section>
</template>
<script>
import axios from "../plugins/axios";

export default {
  name: "login",
  data() {
    return {
      modalShow: false,
      show: false,
      email: "",
      password: "",
      messageLogin: ""
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
        password: this.password
      };
      await axios
        .post("/users/signin", user)
        .then(response => {
          if (response.status == 200) {
            var user = response.data.currentUser;
            var token = response.data.accessToken;
            localStorage.setItem("jwt", token);
            console.log(user);
          }
          this.$router.push("/")
        })
        .catch(error => {
          console.log(error);
          console.log("error");
        });
      this.$store.commit("changeTheLogged", true);
      console.log(this.$store.state.logged);

    }
  }
};
</script>
<style></style>
