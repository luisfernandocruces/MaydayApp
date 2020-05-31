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

            <card class="border-0" hover shadow body-classes="py-5" style="margin_bottom:20px" 
                v-for="user in usersWithChat" :key="user.email">
                <h6 class="text-info text-uppercase">{{user.first_name}} {{user.last_name}}</h6>
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
      usersWithChat: [],
    };
  },

  created(){
    console.log('Componente Creado!');
    this.loadChats();
  },

  methods: {
      goToPrivateChat(other_email) {
        this.$store.commit('updateToUserEmail', other_email);
        this.$router.push('/privateChat'); 
      },
      loadChats(){
        console.log('Holaaaaa');
        axios.get('/conversation/allChats/' + this.$store.state.user._id).then(response => {
            this.usersWithChat = response.data});
      },
  }
};
</script>
<style></style>
