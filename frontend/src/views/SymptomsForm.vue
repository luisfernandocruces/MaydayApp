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
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="img/sick.jpg" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button type="info" size="sm" class="mr-4">
                    <router-link to="/editProfile" style="color:#FFFFFF">Editar Información</router-link>
                  </base-button>
                  <base-button type="default" size="sm" class="float-right">Mensajes</base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1"></div>
            </div>

            <div class="text-center mt-5">
              <h3>Síntomas COVID-19</h3>
              <span class="font-weight-light">Por favor, responda todas las preguntas.</span>
            </div>
            <div class="mt-5" style="margin-left:60px; margin-right:60px;">
              <form>
                <span
                  style="margin-bottom:20px"
                  class="font-weight-bold"
                >Seleccione los síntomas que ha presentado:</span>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
              </form>

              <form style="margin-top:30px">
                <span
                  style="margin-bottom:20px"
                  class="font-weight-bold"
                >Seleccione la(s) condicion(es) que aplican a su perfil:</span>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Se ha realizado transplante(s) de órganos</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Se encuentra en tratamiento activo para cáncer</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Se encuentra en tratamiento de radioterapia para cáncer de pulmón</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Ha sido diagnosticado con leucemia, linfoma y/o mieloma</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Se encuentra en tratamiento de inmunoterapia o tratamiento con anticuerpos</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Se ha realizado transplante de médula ósea en los últimos 6 meses y/o se encuentra en tratamiento de inmunosupresores</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Ha sido diagnosticado con una enfermedad pulmonar severa como asma severa, EPOC
                    severo, enfermedad intersticial fibrosis quística
                  </label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Ha sido diagnosticada con una enfermedad cardíaca y está en embarazo</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">Ha sido diagnosticado con CID</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Se encuentra en tratamiento con altas dosis de esteroides o terapias inmunosupresores</label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Discapacidad en el aprendizaje
                  </label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Ha sido diagnosticado con una enfermedad pulmonar severa como asma severa, EPOC
                    severo, enfermedad intersticial fibrosis quística
                  </label>
                </div>

                <div style="margin-top:15px; margin-left:20px">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="exampleRadio"
                    value
                    style="margin-top:5px"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Ha sido diagnosticado con una enfermedad pulmonar severa como asma severa, EPOC
                    severo, enfermedad intersticial fibrosis quística
                  </label>
                </div>
              </form>
            </div>

            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>Información del usuario.</p>
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
export default {
  data() {
    return {
      checkedSymptoms: []
    };
  }
};
</script>

<style>
</style>