<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
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
                <h1 class="display-4 text-white">
                  Información importante sobre
                  <span>COVID-19</span>
                </h1>
                <p
                  class="lead text-white"
                >En este sitio web se puede encontrar información y orientaciones acerca del actual brote de enfermedad por coronavirus (COVID-19) que fue notificado por primera vez en Wuhan (China) el 31 de diciembre de 2019.</p>
                <div class="btn-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="section section-lg pt-lg-0 mt--300">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">
            <div class="row row-grid">
              <div class="col text-center">
                <div id="carousel-1" style="margin-top:-100px">
                  <b-carousel
                    id="carousel-fade"
                    :interval="2000"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width="1024"
                    img-height="480"
                  >
                    <b-carousel-slide img-blank img-alt="Blank image">
                      <div class="embed-responsive embed-responsive-21by9">
                        <iframe
                          width="900"
                          height="315"
                          src="https://www.youtube.com/embed/G8tbMMGc0so"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </b-carousel-slide>

                    <b-carousel-slide img-blank img-alt="Blank image">
                      <div class="embed-responsive embed-responsive-21by9">
                        <iframe
                          width="900"
                          height="315"
                          src="https://www.youtube.com/embed/vlzxSleRnmg"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </b-carousel-slide>

                    <b-carousel-slide img-blank img-alt="Blank image">
                      <div class="embed-responsive embed-responsive-21by9">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/NMmAj1EKdVo"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </b-carousel-slide>
                  </b-carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 text-center">
            <div class="card bg-default shadow border-0">
              <img v-lazy="'img/communication.png'" class="card-img-top" style="margin-top:20px" />
              <blockquote class="card-blockquote">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="svg-bg"
                >
                  <polygon points="0,52 583,95 0,95" class="fill-default" />
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default" />
                </svg>
                <h4 class="display-3 font-weight-bold text-white">Canales de información confiables</h4>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon name="ni ni" class="mb-5" size="lg" type="warning" shadow rounded></icon>
              <icon
                name="ni ni"
                class="mb-5"
                size="lg"
                type="warning"
                shadow
                rounded
                style="margin-left:5px"
              ></icon>
              <icon
                name="ni ni"
                class="mb-5"
                size="lg"
                type="warning"
                shadow
                rounded
                style="margin-left:5px"
              ></icon>

              <h3>Organización Mundial de la Salud</h3>
              <p>La función principal de la OMS es dirigir la salud internacional dentro del sistema de las Naciones Unidas y liderar a los socios en las respuestas sanitarias mundiales.</p>
              <a
                href="https://www.who.int/es"
                class="font-weight-bold text-warning mt-5"
              >Website Oficial</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg pt-lg-0" style="margin-top:50px">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-3 text-center">
                <card class="border-0" hover shadow body-classes="py-5">
                  <img src="img/myths/medicines.png" class="img-fluid floating" style="width:100px" />
                  <h6
                    class="text-warning text-uppercase"
                    style="margin-top: 20px"
                  >DEMOSTRADO: Actualmente no existe ningún medicamento autorizado para tratar o prevenir la COVID-19</h6>
                  <p
                    class="description mt-3"
                  >Aunque están en marcha varios ensayos de medicamentos, hasta el momento no se ha demostrado que la hidroxicloroquina ni ningún otro fármaco puedan curar o prevenir la COVID-19.</p>
                  <div></div>
                </card>
              </div>
              <div class="col-lg-3 text-center">
                <card class="border-0" hover shadow body-classes="py-5">
                  <img src="img/myths/beer.png" class="img-fluid floating" style="width:100px" />
                  <h6
                    class="text-warning text-uppercase"
                    style="margin-top: 20px"
                  >DEMOSTRADO: Beber alcohol no lo protegerá de la COVID19 y podría ser peligroso</h6>
                  <p
                    class="description mt-3"
                  >El consumo frecuente o excesivo de alcohol puede aumentar el riesgo de sufrir problemas de salud.</p>
                  <div></div>
                </card>
              </div>
              <div class="col-lg-3 text-center">
                <card class="border-0" hover shadow body-classes="py-5">
                  <img src="img/myths/uv.png" class="img-fluid floating" style="width:100px" />
                  <h6
                    class="text-warning text-uppercase"
                    style="margin-top: 20px"
                  >DEMOSTRADO: No deben utilizarse lámparas de luz ultravioleta (UV) para desinfectar las manos u otras zonas de la piel.</h6>
                  <p
                    class="description mt-3"
                  >La radiación UV puede irritar la piel y dañar los ojos. El modo más eficaz de eliminar los virus es limpiarse las manos con un gel desinfectante hidroalcohólico o lavárselas con agua y jabón.</p>
                  <div></div>
                </card>
              </div>
              <div class="col-lg-3 text-center">
                <card class="border-0" hover shadow body-classes="py-5">
                  <img
                    src="img/myths/temperature.png"
                    class="img-fluid floating"
                    style="width:100px"
                  />
                  <h6
                    class="text-warning text-uppercase"
                    style="margin-top: 20px"
                  >REALIDAD: los termómetros sin contacto NO detectan la COVID-19</h6>
                  <p
                    class="description mt-3"
                  >Los termómetros sin contacto resultan eficaces para detectar a personas con fiebre (es decir, con una temperatura corporal superior a la normal). Sin embargo, no permiten detectar a personas infectadas por el virus de la COVID-19.</p>
                  <div></div>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-12">
            <h4>Hospitales más cercanos</h4>
            <closebuy></closebuy>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { BCarousel } from "bootstrap-vue";
import { BCarouselSlide } from "bootstrap-vue";
import Closebuy from "./CloseBuy.vue";

export default {
  name: "medialInfo",
  components: {
    BCarousel,
    BCarouselSlide,
    Closebuy
  }
};
</script>
<style >
</style>
