<template>
   <div class="container-fluid bg-img">
      <navbar-items></navbar-items>     
   </div>
</template>




<script>
import NavbarItems from "./navbarItems.vue"
import SignIn from "./signIn.vue"
export default {
   data () {

   },
    components : {
      "navbar-items" : NavbarItems ,
      "sign-in" : SignIn
    }
}
</script>