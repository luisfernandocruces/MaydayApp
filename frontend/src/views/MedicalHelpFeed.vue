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
      <div class="container shape-container d-flex">
        <div class="col px-0">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="display-3 text-white">Ayuda Médica</h1>
              <p class="lead text-white">
                En estos momentos resulta prioritario humanizar aún más la
                medicina y también la labor social que cumplen los médicos,
                MAYDAYAPP hace posible esta humanización.
              </p>
              <div class="btn-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-skew" style="margin-top:-100px">
      <div class="container">
        <!-- Modal -->

        <modal :show.sync="modals.modal1">
          <h6 slot="header" class="modal-title" id="modal-title-default">
            {{ currentHelp.first_name }} {{ currentHelp.last_name }}
          </h6>

          <div class="py-3 text-center">
            <h4 class="heading mt-4">
              Especialidad: {{ currentHelp.health_area }}
            </h4>
            <h4 class="heading mt-4">Género: {{ currentHelp.gender }}</h4>
            <p>{{ currentHelp.description }}</p>
          </div>

          <template slot="footer">
            <base-button
              type="link"
              class="ml-auto"
              @click="modals.modal1 = false"
              >Cerrar</base-button
            >
          </template>
        </modal>

        <!-- End Modal -->
        <div class="row">
          <div class="col col-lg-3">
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="text-info text-uppercase">Filtrar</h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="General"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">General</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Enfermería"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Enfermería</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Urología"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Urología</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Cardiología"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Cardiología</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Pediatría"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Pediatría</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Neurología"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Neurología</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Ginecología"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Ginecología</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Ortopedia"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Ortopedia</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Nefrología"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Nefrología</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Gastroentereología"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Gastroentereología</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Neumología"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Neumología</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="exampleRadio"
                      value="Oncología"
                      v-model="checkedFilters"
                    />
                    <span class="form-check-label">Oncología</span>
                  </label>
                </div>
              </div>
              <div class="text-center">
                <base-button @click="filter()" type="info" class="mt-4"
                  >Filtrar</base-button
                >
              </div>
            </article>
          </div>
          <div col col-lg-9 style="padding-left: 3%;">
            <div
              v-for="(help, index) in filteredHelps"
              :key="index"
              class="row"
            >
              <div class="card" style="margin-bottom:5%; width: 40rem;">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ help.first_name }} {{ help.last_name }}
                  </h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Especialidad: {{ help.health_area }}
                  </h6>

                  <div class="row">
                    <div class="col">
                      <button
                        style="margin-top:4%;margin-bottom:4%"
                        type="button"
                        class="btn btn-outline-secondary"
                        @click="changeCurrentHelp(help)"
                      >
                        Detalles
                      </button>
                    </div>
                    <div class="col">
                      <base-button
                        v-if="userRol == 'normal person'"
                        @click="openChat(help.idProfessional)"
                        type="info"
                        >Solicitar</base-button
                      >
                    </div>
                  </div>

                  <div v-for="(sce, index) in help.schedules" :key="index">
                    <badge type="info" rounded
                      >{{ sce.dayOfWeek }}: {{ sce.startTime }}-{{
                        sce.endTime
                      }}</badge
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            v-for="(help, index) in filteredHelps"
            :key="index"
            class="row"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "../plugins/axios";

import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      currentHelp: {
        idProfessional: "",
        first_name: "",
        last_name: "",
        gender: "",
        description: "",
        health_area: "",
        schedules: "",
        professionalAge: "",
      },
      userRol: this.$store.state.user.rol,
      checkedFilters: [],
      helps: [],
      filteredHelps: [],
      modals: {
        modal1: false,
      },
    };
  },
  methods: {
    openChat(idPro) {
      this.$store.commit("updateToUserEmail", idPro);
      this.$router.push("/privateChat");
    },
    formatDate(time) {
      console.log(this.$store.state.user);

      var t = new Date(time);
      var dateFormat = require("dateformat");

      var s = dateFormat(t, "dd/mm/yyyy");
      return s;
    },
    filter() {
      this.filteredHelps = [];
      if (this.checkedFilters.length > 0) {
        this.helps.forEach((element) => {
          var condition = false;
          this.checkedFilters.forEach((filter) => {
            if (element.health_area == filter) {
              condition = true;
            }
          });
          if (condition == true) {
            this.filteredHelps.push(element);
          }
        });
      } else {
        this.filteredHelps = this.helps;
      }
    },
    changeCurrentHelp(newHelp) {
      this.modals.modal1 = true;
      this.currentHelp = newHelp;
    },
  },
  created() {
    axios.get("/healthsupport").then((response) => {
      if (response.status == 200) {
        response.data.forEach((element) => {
          axios.get("/users/" + element.idProfessional).then((response) => {
            let singleHelp = {
              idProfessional: element.idProfessional,
              first_name: response.data.first_name,
              last_name: response.data.last_name,
              gender: response.data.gender,
              description: response.data.description,
              health_area: response.data.health_area,
              schedules: element.schedules,
              professionalAge: response.data.birthdate,
            };
            this.helps.push(singleHelp);
          });
        });
        this.filteredHelps = this.helps;
      }
    });
  },
};
</script>
<style></style>
