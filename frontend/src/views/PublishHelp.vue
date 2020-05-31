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
      <div class="container px-lg-lg" style="
    place-content: center;
">
        <h4>sadf</h4>
        <!-- Modal -->
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
          <div class="col-md-4">
            <modal :show.sync="modals.modal1">
              <h6 slot="header" class="modal-title" id="modal-title-default">Editar Horario</h6>

              <base-input
                
                type="text"
                placeholder="Día de la Semana"
                name="first_name2"
                required
              ><el-select v-model="dayOfWeek2" placeholder="Seleccionar" style="
    width: -webkit-fill-available;
">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select></base-input>
              <base-input
                placeholder="Hora Inicio"
                type="number"
                name="startTime2"
                
              ><el-time-select style="
    width: -webkit-fill-available;
"
                    v-model="startTime2"
                    :picker-options="{
                    start: '00:00',
                    step: '00:15',
                    end: '23:59'
                  }"
                    placeholder="Seleccionar hora inicial"
                  ></el-time-select></base-input>
              <base-input placeholder="Hora Fin" type="number" name="endTime" ><el-time-select
                    v-model="endTime2"
                    style="
    width: -webkit-fill-available;
"
                    :picker-options="{
                    start: '00:00',
                    step: '00:15',
                    end: '23:59'
                  }"
                    placeholder="Seleccionar hora final"
                  ></el-time-select></base-input>

              <template slot="footer">
                <base-button type="primary" @click="register()">Guardar</base-button>
                <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Cerrar</base-button>
              </template>
            </modal>
          </div>

          <!-- End Modal -->
          <div class="container">
            
            <br />
            <h4 style="text-align-last: center;">Horarios de Ayuda Médica</h4>
            <br />
            <div class="row" style="
    place-content: center;
">
              <div class="col-lg-4">
                <base-input type="text" placeholder="Día de la Semana" name="first_name" required>
                  <el-select v-model="dayOfWeek" placeholder="Seleccionar">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </base-input>
              </div>
            </div>
            <div class="row" style="
    place-content: center;
">
              <div class="col-lg-4">
                <base-input placeholder="Hora Inicio"  name="startTime">
                  <el-time-select
                    v-model="startTime"
                    :picker-options="{
                    start: '00:00',
                    step: '00:15',
                    end: '23:59'
                  }"
                    placeholder="Seleccionar hora inicial"
                  ></el-time-select>
                </base-input>
              </div>
              <div class="col-lg-4">
                <base-input placeholder="Hora Fin"  name="endTime">
                  <el-time-select
                    v-model="endTime"
                    :picker-options="{
                    start: '00:00',
                    step: '00:15',
                    end: '23:59'
                  }"
                    placeholder="Seleccionar hora final"
                  ></el-time-select>
                </base-input>
              </div>
             
            </div>
            <div class="row" style="
    place-content: center;
">
              <div class="mt-2">
                <base-button @click="register">Guardar</base-button>
              </div>
            </div>
            <br />
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
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "../plugins/axios";
import Modal from "@/components/Modal";
import { DatePicker, TimeSelect } from "element-ui";
export default {
  components: {
    Modal,
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect
  },
  data() {
    return {
      options: [
        {
          value: "Lunes",
          label: "Lunes"
        },
        {
          value: "Martes",
          label: "Martes"
        },
        {
          value: "Miércoles",
          label: "Miércoles"
        },
        {
          value: "Jueves",
          label: "Jueves"
        },
        {
          value: "Viernes",
          label: "Viernes"
        },
        {
          value: "Sabado",
          label: "Sabado"
        },
        {
          value: "Domingo",
          label: "Domingo"
        }
      ],
      value: "",
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
          console.log(element);
          console.log(element.idProfessional + "   " + this.idUser);
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
        axios
          .put("/healthsupport/" + this.healthSupport._id, this.healthSupport)
          .then(response => {
            if (response.status == 200) {
              alert("Horario Agregado Satisfactoriamente");
            }
          });
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