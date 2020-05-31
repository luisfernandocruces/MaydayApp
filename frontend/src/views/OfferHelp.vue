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

                <button @click="offerHelp">Ofrecer franjas de ayuda</button>
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

  data() {
    return {
      timesOffered: []
    };
  },
  created() {},

  methods: {
    offerHelp() {
      axios.post("/users/normalUser", this.timesOffered).then(response => {
        if (response.status == 200) {
          alert("Usuario creado");
        } else {
        }
      });
    }
  }
};
</script>
<style>
</style>
