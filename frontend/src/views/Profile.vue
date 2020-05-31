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
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="'img/profile/person.png'" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button type="info" size="sm" class="mr-4">
                    <router-link to="/editProfile" style="color:#FFFFFF">Editar Información</router-link>
                  </base-button>
                  <base-button type="default" size="sm" class="float-right">
                    <router-link to="/myChats">Mensajes</router-link>
                  </base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1"></div>
            </div>
            <div class="text-center mt-5">
              <br>
              <br>
              <h3>
                {{firstName}} {{lastName}}</h3>
                <div class="h6 mt-4">
                
                Género: {{gender}}
              </div>
                  <div class="h6 mt-4">
                
                 Fecha Nacimiento: {{formatDate(birthdate)}}
              </div>
             
              <div class="h6 mt-4">
                
                  Numero de Telefono: {{phone}}
              </div>
              <div class="h6 mt-4">
                
                Tipo documento: {{documentType}}
              </div>
              <div class="h6 mt-4">
                
                Número de documento: {{documentNumber}}
              </div>
              <div class="h6 mt-4"  v-if="this.health_area != undefined">
                
                Área de la salúd: {{health_area}}
              </div>
              <div>
                
              </div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <h6>Descripción del usuario:</h6>
                  <p>{{description}}</p>
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
      firstName: this.$store.state.user.first_name,
      lastName: this.$store.state.user.last_name,
      phone: this.$store.state.user.phone_number,
      birthdate: this.$store.state.user.birthdate,
      description: this.$store.state.user.description,
      documentType: this.$store.state.user.document_type,
      documentNumber: this.$store.state.user.document_number,
      gender: this.$store.state.user.gender,
      health_area: this.$store.state.user.health_area
    };
  },methods: {

     formatDate(time){
     console.log(this.$store.state.user)

        var t = new Date(time)
      var dateFormat = require('dateformat');

      var s= dateFormat(t, "dd/mm/yyyy");
       return s
      }
   }
};
</script>
<style></style>
