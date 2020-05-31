<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 bg-gradient-info shape-skew">
          <span></span>
          <span></span>
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
                <h1 class="display-3 text-white">Una aplicación especial para la oferta de ayudas</h1>
                <p
                  class="lead text-white"
                >Esta pagina web te dara la capacidad de ofrecer y recibir ayudas a personas y empresas afectadas por el COVID-19, tanto para personas como para empresas se han definido diferentes ayudas.</p>
                <div class="btn-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0 text-center" hover shadow body-classes="py-5">
                  <img src="img/helps/people.jpg" alt="people" border="0" style="height: 180px;" />
                  <h6 class="text-primary text-uppercase">Personas</h6>
                  <p class="description mt-3">
                    Aquí podrás encontrar información sobre diferentes tipos de
                    ayudas para personas.
                  </p>
                  <div>
                    <badge type="primary" rounded>MÉDICA</badge>
                    <badge type="primary" rounded>TRABAJO</badge>
                    <badge type="primary" rounded>HUMANITARIA</badge>
                    <badge type="primary" rounded>PSICOLÓGICA</badge>
                  </div>

                  <base-button type="primary" class="mt-4">
                    <router-link to="/helpMenu" style="color:white">Entrar</router-link>
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0 text-center" hover shadow body-classes="py-5">
                  <img src="img/helps/work2.jpg" alt="work" border="0" style="height: 180px;" />

                  <h6 class="text-info text-uppercase">Empresas</h6>
                  <p class="description mt-3">
                    Aquí podrás encontrar información sobre diferentes tipos de
                    ayudas para empresas.
                  </p>
                  <div>
                    <badge type="info" rounded>BIOSEGURIDAD</badge>
                    <badge type="info" rounded>EMPRENDIMIENTO</badge>
                    <badge type="info" rounded>AYUDA DEL ESTADO</badge>
                    <badge type="info" rounded></badge>
                  </div>
                  <base-button tag="a" href="#" type="info" class="mt-4">Entrar</base-button>
                </card>
              </div>

              <div class="col-lg-4">
                <card class="border-0 text-center" hover shadow body-classes="py-5">
                  <img
                    src="img/helps/other.png"
                    class="text-center"
                    alt="work"
                    border="0"
                    style="height: 180px;"
                  />
                  <h6 class="text-success text-uppercase" align>Otras Ayudas</h6>
                  <p class="description mt-3">
                    Aquí podrás encontrar información sobre cualquier otro tipo
                    ayuda.
                  </p>
                  <div>
                    <badge type="success" rounded>LEGALES</badge>
                    <badge type="success" rounded>CONTÁCTANOS</badge>
                    <badge type="success" rounded>PERSONAS ESPECIALES</badge>
                    <badge type="success" rounded></badge>
                  </div>
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    class="mt-4 justify-content-center"
                  >Entrar</base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <img src="img/consult.png" class="img-center img-fluid" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="ni ni-sound-wave"
                  size="lg"
                  class="bg-gradient-white"
                  color="warning"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h4 class="display-3 text-white">Prevención COVID-19</h4>
                <p class="text-white">Revisa tus síntomas y descubre qué hacer después.</p>
              </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="ni ni-bullet-list-67" gradient="success" color="white" shadow rounded></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">Realizar Cuestionario</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                    every summer, and that process will continue whatever happens.
                  </p>

                  <router-link class="text-success" to="/symptomsForm">Click Aquí</router-link>
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="ni ni-bulb-61" gradient="warning" color="white" shadow rounded></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">Más información sobre COVID-19</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                    every summer, and that process will continue whatever happens.
                  </p>
                  <router-link class="text-warning" to="/medicalHelpInformation">Click Aquí</router-link>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
