import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./views/AppHeader";


import Home from "./views/Home.vue";
import UserRegistration from "./views/Register.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";


Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        header: AppHeader,
        default: Home
      
      }
    
    },
    {
      path: "/registerHealth",
      name: "registerHealth",
      components: {
        header: AppHeader,
        default: UserRegistration,
      },
      props:{
        default: {userType: 'health'}
      }
    },
    {
      path: "/register",
      name: "registerNormal",
      components: {
        header: AppHeader,
        default: UserRegistration,
      },
      props:{
        default: {userType: 'normal'}
      }
    },
    {
      path: "/login",
      name: "Login",
      components: {
        header: AppHeader,
        default: Login
      
      }
    },
    {
      path: "/profile",
      name: "Profile",
      components: {
        header: AppHeader,
        default: Profile
      
      }
    },    
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
