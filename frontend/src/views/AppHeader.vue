<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img
          src="img/brand/white.png"
          alt="white"
          border="0"
          style="
    height: 120px;"
        />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="">
            <img
              src="img/brand/black.png"
              style="
    height: 100px;"
            />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg">
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Menú</span>
          </a>


          <router-link v-if="this.logged_usu == true" to="/profile" class="dropdown-item">Perfil</router-link>
          <router-link v-if="this.type_user == 'health professional'" to="/publishHelp" class="dropdown-item">Publicar Ayuda</router-link>
          <router-link v-if="this.logged_usu == false" to="/login" class="dropdown-item">Iniciar Sesión</router-link>
          <router-link v-if="this.logged_usu == false" to="/registerMenu" class="dropdown-item">Registro</router-link>
          

        </base-dropdown>
      </ul>

      <div class="col" style="text-align-last: right;">	
          <a class="text-white" @click="signout()" v-if="this.logged_usu == true" >Cerrar Sesión</a>	     
        </div>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  computed: {
    logged_usu() {
      return this.$store.state.logged;
    },
    type_user(){
      return this.$store.state.user.rol
    }
  },
  created() {
    console.log(this.logged_usu);
  },
  methods: {
    signout() {
      this.$store.commit("changeTheLogged", false);
      alert("Ha cerrado sesión");
      this.$router.push("/login");
    },
  },
};
</script>
<style></style>
