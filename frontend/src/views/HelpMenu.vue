<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 bg-gradient-info shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew" style="margin-top: -350px;">
      <div class="row justify-content-center">
        <div class="col-lg-6 mt-5 mt-lg-0">
          <div class="mb-3"></div>
          <tabs fill class="flex-column flex-md-row">
            <card shadow>
              <tab-pane title="Médica" class="text-center">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                  cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                  keffiyeh dreamcatcher synth.
                </p>
                <img 
                  src="img/helps/ayudamedica.png"
                  alt="ayudamedica"
                  border="0"
                  style="height: 350px;"
                />
                <div >
                  <base-button type="primary" class="mt-4">
                  <router-link to="/medicalHelpFeed" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button type="info" class="mt-4">
                  <router-link v-if="this.logged_usu == true" to="/helpMenu" style="color:white">Ofrecer Ayuda</router-link>
                  <router-link v-if="this.logged_usu == false" to="/login" style="color:white">Ofrecer Ayuda</router-link>
                  </base-button>
                </div>
              </tab-pane>
              <tab-pane title="Humanitaria" class="text-center">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                  cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                  keffiyeh dreamcatcher synth.
                </p>
                <img
                  src="img/helps/ayudahumanitaria.jpg"
                  alt="ayudahumanitaria"
                  border="0"
                  style="height: 350px;"
                />
                <div >
                  <base-button type="primary" class="mt-4">
                  <router-link to="/helpMenu" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button type="info" class="mt-4">
                  <router-link v-if="this.logged_usu == true" to="/helpMenu" style="color:white">Ofrecer Ayuda</router-link>
                  <router-link v-if="this.logged_usu == false" to="/login" style="color:white">Ofrecer Ayuda</router-link>
                  </base-button>
                </div>
              </tab-pane>
              <tab-pane title="Psicológica" class="text-center">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                  cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                  keffiyeh dreamcatcher synth.
                </p>
                <img
                  src="img/helps/ayudapsicologica.jpg"
                  alt="ayudapsicologica"
                  border="0"
                  style="height: 350px;"
                />
                <div >
                  <base-button type="primary" class="mt-4">
                  <router-link to="/helpMenu" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button type="info" class="mt-4">
                  <router-link v-if="this.logged_usu == true" to="/helpMenu" style="color:white">Ofrecer Ayuda</router-link>
                  <router-link v-if="this.logged_usu == false" to="/login" style="color:white">Ofrecer Ayuda</router-link>
                  </base-button>
                </div>
              </tab-pane>

              <tab-pane title="Espiritual" class="text-center">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                  cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                  keffiyeh dreamcatcher synth.
                </p>
                <img
                  src="img/helps/ayudaespiritual.jpg"
                  alt="ayudaespiritual"
                  border="0"
                  style="height: 350px;"
                />
                <div >
                  <base-button type="primary" class="mt-4">
                  <router-link to="/helpMenu" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button type="info" class="mt-4">
                  <router-link v-if="this.logged_usu == true" to="/helpMenu" style="color:white">Ofrecer Ayuda</router-link>
                  <router-link v-if="this.logged_usu == false" to="/login" style="color:white">Ofrecer Ayuda</router-link>
                  </base-button>
                </div>
              </tab-pane>

              <tab-pane title="Trabajo" class="text-center">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                  cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                  keffiyeh dreamcatcher synth.
                </p>
                <img
                  src="img/helps/ayudatrabajo.png"
                  alt="ayudatrabajo"
                  border="0"
                  style="height: 350px;"
                />

                 <div >
                  <base-button type="primary" class="mt-4">
                  <router-link to="/helpMenu" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button type="info" class="mt-4">
                  <router-link v-if="this.logged_usu == true" to="/helpMenu" style="color:white">Ofrecer Ayuda</router-link>
                  <router-link v-if="this.logged_usu == false" to="/login" style="color:white">Ofrecer Ayuda</router-link>
                  </base-button>
                </div>
              </tab-pane>
            </card>
          </tabs>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  components: {
    Tabs,
    TabPane
  },
   computed: {
    logged_usu() {
      return this.$store.state.logged;
    }
  }
};
</script>
<style>
</style>
