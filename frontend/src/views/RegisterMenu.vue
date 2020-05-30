<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container">
      <div class="row justify-content-center text-center mb-lg">
        <div class="col-lg-8">
          <h2 class="display-3" style="color:white">¿Quieres ofrecer ayuda?</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0"></div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-4">
            <img
              v-lazy="'img/helps/normal.jpg'"
              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
              style="width: 200px;"
            />
            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1" style="color:white">Usuario Normal</span>
                <small class="h6 text-muted">Como usuario normal podrás recibir y ofrecer diferentes tipos de ayudas.</small>
              </h5>
              <div class="mt-3">

                  <base-button
                  tag="a"
                  type="primary"
                  class="mt-4 justify-content-center"
                ><router-link to="/registerNormal" style="color:white">Registrarme</router-link></base-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-4">
            <img
              v-lazy="'img/helps/doctor.png'"
              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
              style="width: 200px;"
            />
            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1" style="color:white">Usuario Médico</span>
                <small class="h6 text-muted">Como usuario médico podrás ofrecer ayudas médicas a otros usuarios.</small>
              </h5>
              <div class="mt-3">
                <base-button
                  tag="a"
                  type="primary"
                  class="mt-4 justify-content-center"
                ><router-link to="/registerHealth" style="color:white">Registrarme</router-link></base-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
</style>
