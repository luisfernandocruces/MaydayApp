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
    <section class="section section-skew" style="margin-top:-100px">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 v-if="userRole == 'health professional'">PACIENTES:</h1>
            <h1 v-if="userRole == 'normal person'">PROFESIONALES DE LA SALUD:</h1>
            <br>
            <card class="border-0" hover shadow body-classes="py-5" style="margin_bottom:20px" 
                v-for="(user, index) in usersWithChat" :key="index">
                <h6 class="text-info text-uppercase">{{index + 1}}</h6>
                <p class="description mt-3">{{user.email}}</p>
                <base-button type="info" class="mt-4" @click="goToPrivateChat(user.email)">
                    Ver Chat
                    <!-- <router-link :to="{ name: 'privateChat',
                                        params: { other_user: user.email }}" style="color:white">Ver Chat</router-link> -->
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
      userRole : this.$store.state.user.rol,
      usersWithChat: [],
    };
  },

  created(){
    this.loadChats();
  },

  methods: {
      goToPrivateChat(other_email) {
        this.$store.commit('updateToUserEmail', other_email);
        this.$router.push('/privateChat'); 
      },
      loadChats(){
        axios.get('/conversation/allChats/' + this.$store.state.user._id).then(response => {
            this.usersWithChat = response.data});
      },
  }
};
</script>
<style></style>
