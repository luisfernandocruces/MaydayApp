import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./views/AppHeader";


import Home from "./views/Home.vue";
import UserRegistration from "./views/UserRegistration.vue";
import Login from "./views/Login.vue";


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
        //header: AppHeader,
        default: UserRegistration,
        //footer: AppFooter
      },
      props:{
        default: {userType: 'health'}
      }
    },
    {
      path: "/registerNormal",
      name: "registerNormal",
      components: {
        //header: AppHeader,
        default: UserRegistration,
        //footer: AppFooter
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
    
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
