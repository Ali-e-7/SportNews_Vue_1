<template>
   <div class="container-fluid bg-img">
      <navbar-items></navbar-items>     
      <sign-in @ShowForm="FromRej"></sign-in>
   </div>
</template>




<script>
import NavbarItems from "./navbarItems.vue"
import SignIn from "./signIn.vue"
export default {
   data () {
      return {
         show : true
      }
   },
    components : {
      "navbar-items" : NavbarItems ,
      "sign-in" : SignIn
    },
    methods : {
       FromRej : function (event) {
          this.show = !this.show,
          console.log(show)
       }
    }
}
</script>