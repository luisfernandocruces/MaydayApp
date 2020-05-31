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
                <p
                  class="description"
                >En estos momentos resulta prioritario humanizar aún más la medicina y también la labor social que cumplen los médicos, MAYDAYAPP hace posible esta humanización.</p>
                <img
                  src="img/helps/ayudamedica.png"
                  alt="ayudamedica"
                  border="0"
                  style="height: 350px;"
                />
                <div>
                  <base-button type="primary" class="mt-4">
                    <router-link to="/medicalHelpFeed" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button
                    v-if="this.logged_usu == true && this.type_user == 'health professional'"
                    type="info"
                    class="mt-4"
                  >
                    <router-link to="/publishHelp" style="color:white">Ofrecer Ayuda</router-link>
                    <router-link
                      v-if="this.logged_usu == false"
                      to="/login"
                      style="color:white"
                    >Ofrecer Ayuda</router-link>
                  </base-button>
                </div>
              </tab-pane>
              <tab-pane title="Humanitaria" class="text-center">
                <p
                  class="description"
                >Todos formamos parte de la sociedad y estos momentos de crisis las ayudas humanitarias son un deber social, MAYDAYAPP es una herramienta que facilita este vínculo entre los seres humanos</p>
                <img
                  src="img/helps/ayudahumanitaria.jpg"
                  alt="ayudahumanitaria"
                  border="0"
                  style="height: 350px;"
                />
                <div>
                  <base-button type="primary" class="mt-4">
                    <router-link to="/helpMenu" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button type="info" class="mt-4">
                    <router-link
                      v-if="this.logged_usu == true"
                      to="/helpMenu"
                      style="color:white"
                    >Ofrecer Ayuda</router-link>
                    <router-link
                      v-if="this.logged_usu == false"
                      to="/login"
                      style="color:white"
                    >Ofrecer Ayuda</router-link>
                  </base-button>
                </div>
              </tab-pane>
              <tab-pane title="Psicológica" class="text-center">
                <p
                  class="description"
                >Para muchas personas ha cambiado su vida con la llegada de la pandemia, y no todos saben como afrontarla. MAYDAYAPP busca brindar las herramientas sicológicas necesarias para que cada persona afectada aprenda a manejar los momentos de ansiedad o incertidumbre, o cualquier otra cosa que le afecte.</p>
                <img
                  src="img/helps/ayudapsicologica.jpg"
                  alt="ayudapsicologica"
                  border="0"
                  style="height: 350px;"
                />
                <div>
                  <base-button type="primary" class="mt-4">
                    <router-link to="/helpMenu" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button type="info" class="mt-4">
                    <router-link
                      v-if="this.logged_usu == true"
                      to="/helpMenu"
                      style="color:white"
                    >Ofrecer Ayuda</router-link>
                    <router-link
                      v-if="this.logged_usu == false"
                      to="/login"
                      style="color:white"
                    >Ofrecer Ayuda</router-link>
                  </base-button>
                </div>
              </tab-pane>

              <tab-pane title="Espiritual" class="text-center">
                <p
                  class="description"
                >A veces la solución a nuestros problemas no se encuentra en el exterior, sino que es necesario adentrarnos en nuestro interior para comprender de donde surgen nuestras emociones y sentimientos. Así, aprendemos cual es la forma de manejar lo que no resulte sano para nuestra mente – espíritu. MAYDAYAPP crea el ambiente propicio de bienestar espiritual.</p>
                <img
                  src="img/helps/ayudaespiritual.jpg"
                  alt="ayudaespiritual"
                  border="0"
                  style="height: 350px;"
                />
                <div>
                  <base-button type="primary" class="mt-4">
                    <router-link to="/helpMenu" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button type="info" class="mt-4">
                    <router-link
                      v-if="this.logged_usu == true"
                      to="/helpMenu"
                      style="color:white"
                    >Ofrecer Ayuda</router-link>
                    <router-link
                      v-if="this.logged_usu == false"
                      to="/login"
                      style="color:white"
                    >Ofrecer Ayuda</router-link>
                  </base-button>
                </div>
              </tab-pane>

              <tab-pane title="Trabajo" class="text-center">
                <p
                  class="description"
                >Muchos hogares se han visto afectados económicamente por esta crisis, y requieren ayuda en tal sentido. MAYDAYAPP es el puente entre una posible solución que puedan brindar las empresas que desean ayudar a los hogares afectados.</p>
                <img
                  src="img/helps/ayudatrabajo.png"
                  alt="ayudatrabajo"
                  border="0"
                  style="height: 350px;"
                />

                <div>
                  <base-button type="primary" class="mt-4">
                    <router-link to="/helpMenu" style="color:white">Ver Ayuda</router-link>
                  </base-button>

                  <base-button type="info" class="mt-4">
                    <router-link
                      v-if="this.logged_usu == true"
                      to="/helpMenu"
                      style="color:white"
                    >Ofrecer Ayuda</router-link>
                    <router-link
                      v-if="this.logged_usu == false"
                      to="/login"
                      style="color:white"
                    >Ofrecer Ayuda</router-link>
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
    },
    type_user() {
      return this.$store.state.user.rol;
    }
  }
};
</script>
<style>
</style>
