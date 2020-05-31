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
                <base-button type="info" class="mt-4">
                    <router-link :to="{ name: 'PrivateChat',
                                        params: { toUser: user.email }}" style="color:white">Ver Chat</router-link>
                </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usersWithChat: [{first_name: 'Daniel', last_name: 'Galvis', email: "a@a.com"},
        {first_name: 'Sara', last_name: 'Ortiz', email: "a@b.com"},
        {first_name: 'Daniela', last_name: 'Llano', email: "a@c.com"},
        {first_name: 'Oswaldo', last_name: 'Ortiz', email: "a@d.com"},
        {first_name: 'Jose', last_name: 'Galvis', email: "a@e.com"},
        {first_name: 'Luis Fernando', last_name: 'Cruces', email: "a@f.com"},
        ],

    };
  }
};
</script>
<style></style>
