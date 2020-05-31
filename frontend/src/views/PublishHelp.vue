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
          <div class="col-md-4">
            <modal :show.sync="modals.modal1">
              <h6 slot="header" class="modal-title" id="modal-title-default">Editar Horario</h6>

              <base-input
                v-model="dayOfWeek2"
                type="text"
                placeholder="Día de la Semana"
                name="first_name2"
                required
              ></base-input>
              <base-input
                placeholder="Hora Inicio"
                type="number"
                name="startTime2"
                v-model="startTime2"
              ></base-input>
              <base-input placeholder="Hora Fin" type="number" name="endTime" v-model="endTime2"></base-input>

              <template slot="footer">
                <base-button type="primary" @click="register()">Guardar</base-button>
                <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Cerrar</base-button>
              </template>
            </modal>
          </div>
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
            <base-button @click="register">Guardar</base-button>
          </div>
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
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "../plugins/axios";
import Modal from "@/components/Modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      condition: true,
      modals: {
        modal1: false
      },
      Id: undefined,
      editing: false,
      healthSupport: undefined,
      supports: [],
      dayOfWeek2: undefined,
      startTime2: undefined,
      endTime2: undefined,
      dayOfWeek: undefined,
      startTime: undefined,
      endTime: undefined
    };
  },
  computed: {
    idUser() {
      return this.$store.state.user._id;
    },
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    axios.get("/healthsupport").then(response => {
      if (response.status == 200) {
        response.data.forEach(element => {
          if (element.idProfessional == this.idUser) {
            this.healthSupport = element;
            this.supports = element.schedules;
            this.condition = false;
          }
        });
        if (this.condition == true) {
          this.healthSupport = {
            idProfessional: this.idUser,
            schedules: [{}]
          };
        }
      }
    });
  },
  methods: {
    register() {
      if (this.editing == false) {
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

        if (this.condition == true) {
          axios.post("/healthsupport", this.healthSupport).then(response => {
            if (response.status == 200) {
              alert("Horario Agregado Satisfactoriamente");
              
            }
          });

          this.condition = false;
        } else {
          axios
            .put("/healthsupport/" + this.healthSupport._id, this.healthSupport)
            .then(response => {
              if (response.status == 200) {
                alert("Horario Agregado Satisfactoriamente");
                (this.dayOfWeek = undefined),
                  (this.startTime = undefined),
                  (this.endTime = undefined);
              }
            });
        }
      } else {
        this.supports[this.Id].dayOfWeek = this.dayOfWeek2;
        this.supports[this.Id].startTime = this.startTime2;
        this.supports[this.Id].endTime = this.endTime2;
        this.healthSupport.schedules = this.supports;

        axios
          .put("/healthsupport/" + this.healthSupport._id, this.healthSupport)
          .then(response => {
            if (response.status == 200) {
              alert("Horario Editado Satisfactoriamente");
            }
          });

        this.modals.modal1 = false;
        this.editing = false;
      }
    },
    updateSchedule(index) {
      this.modals.modal1 = true;
      this.editing = true;
      this.Id = index;
      this.dayOfWeek2 = this.supports[this.Id].dayOfWeek;
      this.startTime2 = this.supports[this.Id].startTime;
      this.endTime2 = this.supports[this.Id].endTime;
    },
    deleteSchedule(index) {
      this.supports.splice(index, 1);
      this.healthSupport.schedules = this.supports;
      axios
        .put("/healthsupport/" + this.healthSupport._id, this.healthSupport)
        .then(response => {
          if (response.status == 200) {
            alert("Horario Borrado Satisfactoriamente");
          }
        });
    }
  }
};
</script>
<style></style>