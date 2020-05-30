<template>
  <div class="profile-page">
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
          <table class="table">
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th>Día de la semana</th>
                <th>Hora Inicio</th>
                <th>Hora Fin</th>
                <th class="text-right">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(support, index) in supports" :key="index">
                <td>{{index}}</td>
                <td>{{support.dayOfWeek}}</td>
                <td>{{support.startTime}}</td>
                <td>{{support.endTime}}</td>
                <td class="td-actions text-right">
                  <button
                    @click="updateSchedule(index)"
                    type="button"
                    rel="tooltip"
                    class="btn btn-success btn-icon btn-sm"
                    data-original-title
                    title
                  >
                    <i class="ni ni-settings-gear-65 pt-1"></i>
                  </button>
                  <button
                    @click="deleteSchedule(index)"
                    type="button"
                    rel="tooltip"
                    class="btn btn-danger btn-icon btn-sm"
                    data-original-title
                    title
                  >
                    <i class="ni ni-fat-remove pt-1"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div class="container pt-lg-md">
            <base-input
              v-model="dayOfWeek"
              type="text"
              placeholder="Día de la Semana"
              name="first_name"
              required
            ></base-input>
            <base-input
              placeholder="Hora Inicio"
              type="number"
              name="startTime"
              v-model="startTime"
            ></base-input>
            <base-input placeholder="Hora Fin" type="number" name="endTime" v-model="endTime"></base-input>
            <base-button @click="register">Registrar Horario de Ayuda</base-button>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "../plugins/axios";
export default {
  data() {
    return {
      healthSupport: undefined,
      supports: [],
      dayOfWeek: undefined,
      startTime: undefined,
      endTime: undefined,
      idUser: "123456789"
    };
  },
  created() {
    axios.get("/healthsupport").then(response => {
      if (response.status == 200) {
        response.data.forEach(element => {
          if (element.idProfessional == this.idUser) {
            this.healthSupport = element;
            this.supports = element.schedules;
          }
        });
      }
    });
  },
  methods: {
    register() {
      let sc = {
        dayOfWeek: this.dayOfWeek,
        startTime: this.startTime,
        endTime: this.endTime
      };
      if (this.supports == undefined) {
        this.supports = [];
      }
      this.supports.push(sc);
      this.healthSupport.schedules = this.supports;
      axios
        .put("/healthsupport/" + this.healthSupport._id, this.healthSupport)
        .then(response => {
          if (response.status == 200) {
            alert("Horario Agregado Satisfactoriamente");
          }
        });
    },
    updateSchedule(index) {
      console.log(index);
    },
    deleteSchedule(index) {
      console.log(index);
    }
  }
};
</script>
<style></style>