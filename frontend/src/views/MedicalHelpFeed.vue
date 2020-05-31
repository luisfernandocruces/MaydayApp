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
              <p class="lead text-white">Descripción.</p>
              <div class="btn-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-skew" style="margin-top:-100px">
      <div class="container">
        <div class="row">
          <div class="col col-lg-3">
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="text-info text-uppercase">Filtrar</h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <label class="form-check">
                    <input class="form-check-input" type="checkbox" name="exampleRadio" value />
                    <span class="form-check-label">Opción 1</span>
                  </label>
                  <label class="form-check">
                    <input class="form-check-input" type="checkbox" name="exampleRadio" value />
                    <span class="form-check-label">Opción 2</span>
                  </label>
                  <label class="form-check">
                    <input class="form-check-input" type="checkbox" name="exampleRadio" value />
                    <span class="form-check-label">Opción 3</span>
                  </label>
                </div>
              </div>
              <div class="text-center">
                <base-button type="info" class="mt-4">
                  <router-link to="/symptomsForm" style="color:white">Solicitar</router-link>
                </base-button>
              </div>
            </article>
          </div>
          <div  v-for="(help, index) in helps" :key="index" class="col">
            <card class="border-0" hover shadow body-classes="py-5" style="margin-bottom:20px">
              <h6 class="text-info text-uppercase">{{help.first_name}} {{help.last_name}}</h6>
              <p class="description mt-3">{{help.description}}</p>
              <div>
                <badge type="info" rounded>{{help.health_area}}</badge>
              
              </div>
              <base-button type="info" class="mt-4">
                <router-link to="/helpMenu" style="color:white">Solicitar</router-link>
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "../plugins/axios";
export default {
  data() {
    return {
      checkedFilters: [],
      helps: []
    };
  },
  created() {
      axios.get("/healthsupport").then(response => {
      if (response.status == 200) {
        response.data.forEach(element => {
          axios.get("/users/" + element.idProfessional).then(response =>{
            let singleHelp = {
              idProfessional : element.idProfessional,
              first_name : response.data.first_name,
              last_name : response.data.last_name,
              description : response.data.description,
              health_area : response.data.health_area
            }
            this.helps.push(singleHelp)
          });
        });
        
        console.log(this.helps)
      }
    });
  }
};
</script>
<style></style>
