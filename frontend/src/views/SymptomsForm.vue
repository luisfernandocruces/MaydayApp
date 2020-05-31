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
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="col-md-4">
            <modal
              :show.sync="modal2"
              gradient="danger"
              modal-classes="modal-danger modal-dialog-centered"
            >
              <h6 slot="header" class="modal-title" id="modal-title-notification">Atención!!!</h6>

              <div class="py-3 text-center">
                <i class="ni ni-bell-55 ni-3x"></i>
                <h4 class="heading mt-4">Proximamente...</h4>
                <p>Esta sección esta en desarrollo.</p>
              </div>

              <template slot="footer">
                <base-button
                  type="link"
                  text-color="white"
                  class="ml-auto"
                  @click="modal2 = false"
                >Cerrar</base-button>
              </template>
            </modal>
          </div>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="img/sick.jpg" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"></div>

              <div class="col-lg-4 order-lg-1"></div>
            </div>

            <div class="text-center mt-5">
              <h3 style="margin-top: 150px;">Evalúa tus síntomas</h3>
              <span class="font-weight-light">Por favor, responda todas las preguntas.</span>
            </div>

            <div class="mt-5" style="margin-left:60px; margin-right:60px;">
              <div>
                <div>
                  <span
                    style="margin-bottom:20px"
                    class="font-weight-bold"
                  >Seleccione su rango de edad:</span>
                  <base-input type="text">
                    <el-select
                      v-model="age"
                      placeholder="Seleccionar"
                      style=" width: -webkit-fill-available;"
                    >
                      <el-option
                        v-for="item in ages"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </base-input>
                </div>

                <div>
                  <span
                    style="margin-bottom:20px"
                    class="font-weight-bold"
                  >¿Has realizado algún viaje en los últimas 15 días?</span>
                  <base-input type="text">
                    <el-select
                      v-model="option"
                      placeholder="Seleccionar"
                      style=" width: -webkit-fill-available;"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.type"
                        :label="item.type"
                        :value="item.type"
                      ></el-option>
                    </el-select>
                  </base-input>
                </div>
                <div>
                  <span
                    style="margin-bottom:20px"
                    class="font-weight-bold"
                  >¿Has estado en contacto con una persona que haya sido diagnosticada con COVID-19 en los últimos 15 días?</span>
                  <base-input type="text">
                    <el-select
                      v-model="option2"
                      placeholder="Seleccionar"
                      style=" width: -webkit-fill-available;"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.type"
                        :label="item.type"
                        :value="item.type"
                      ></el-option>
                    </el-select>
                  </base-input>
                </div>
              </div>
              <!-- <form>
                <span
                  style="margin-bottom:20px"
                  class="font-weight-bold"
                >Seleccione los síntomas que ha presentado:</span>

                <div style="margin-top:15px; margin-left:20px">
                  <label class="form-check-label" for="exampleCheck1">Fiebre</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label class="form-check-label" for="exampleCheck1">Cansancio</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Molestias y dolores en el cuerpo</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label class="form-check-label" for="exampleCheck1">Dolor de garganta</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label class="form-check-label" for="exampleCheck1">Diarrea</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label class="form-check-label" for="exampleCheck1">Conjuntivitis</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label class="form-check-label" for="exampleCheck1">Dolor de cabeza</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Pérdida del sentido del olfato o del gusto</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Erupciones cutáneas o pérdida del color en los dedos de las manos o de los pies</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Dificultad para respirar o sensación de falta de aire</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Dificultad para respirar o sensación de falta de aire</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Incapacidad para hablar o moverse</label>
                </div>
              </form>-->

              <form style="margin-top:30px">
                <div>
                  <span
                    style="margin-bottom:20px"
                    class="font-weight-bold"
                  >Sufre usted de alguna de las siguientes comorbilidades:</span>
                </div>
                <br />
                <ul>
                  <li>
                    <p>Se ha realizado transplante(s) de órganos</p>
                  </li>
                  <li>
                    <p>Se encuentra en tratamiento activo para cáncer</p>
                  </li>
                  <li>
                    <p>Se encuentra en tratamiento de radioterapia para cáncer de pulmón</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con leucemia, linfoma y/o mieloma</p>
                  </li>
                  <li>
                    <p>Se encuentra en tratamiento de inmunoterapia o tratamiento con anticuerpos</p>
                  </li>
                  <li>
                    <p>Se ha realizado transplante de médula ósea en los últimos 6 meses y/o se encuentra en tratamiento de inmunosupresores</p>
                  </li>
                  <li>
                    <p>
                      Ha sido diagnosticado con una enfermedad pulmonar severa como asma severa, EPOC
                      severo, enfermedad intersticial fibrosis quística
                    </p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticada con una enfermedad cardíaca y está en embarazo</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con CID</p>
                  </li>
                  <li>
                    <p>Se encuentra en tratamiento con altas dosis de esteroides o terapias inmunosupresores</p>
                  </li>
                  <li>
                    <p>Discapacidad en el aprendizaje</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con una enfermedad pulmonar leve o que afecte la respiración</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con una enfermedad cardiaca</p>
                  </li>
                  <li>
                    <p>Presenta hipertensión alta</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con diabetes</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con una enfermedad renal crónica</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con una enfermedad hepática</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con cáncer</p>
                  </li>
                  <li>
                    <p>Padece de inmunosupresión, VIH y/o escleroderma</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con una enfermedad cerebrovascular</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con una enfermedad del sistema nervioso</p>
                  </li>
                  <li>
                    <p>Presenta problemas en el bazo o asplenia</p>
                  </li>
                  <li>
                    <p>Ha sido diagnosticado con obesidad (ICM > 40)</p>
                  </li>
                </ul>
                <br />
              </form>
              <div>
                <base-input type="text">
                  <el-select
                    v-model="option3"
                    placeholder="Seleccionar"
                    style=" width: -webkit-fill-available;"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.type"
                      :label="item.type"
                      :value="item.type"
                    ></el-option>
                  </el-select>
                </base-input>
              </div>
            </div>

            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <base-button type="primary" class="mt-4" @click="modal2 = true">Obtener resultados</base-button>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      ages: [
        {
          value: "0-15",
          label: "0-15"
        },
        {
          value: "51-70",
          label: "51-70"
        },
        {
          value: "51-70",
          label: "51-70"
        },
        {
          value: "70+",
          label: "70+"
        }
      ],
      options: [{ type: "Si" }, { type: "No" }],
      option: "",
      option2: "",
      option3: "",
      modal2: false,
      checkedSymptoms: []
    };
  }
};
</script>

<style>
</style>