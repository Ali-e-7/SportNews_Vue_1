<template>
    <div class="container d-flex flex-column align-items-center justify-content-center flex-lg-row justify-content-lg-center p-0">
         <div class="col-12 col-lg-6">
                <nav class="navbar navbar-expand-sm">
                    <form class="form-inline d-flex flex-column align-items-center justify-content-center flex-md-row justify-content-md-center" action="/action_page.php">
                        <img src="../../assets/Img/images/Logo.png" alt="">
                        <input class="form-control mr-2 mr-lg-4 mt-3 mt-md-0 search-head" type="text" placeholder="سریع جستجو کن!">
                    </form>
                </nav>
            </div>
             <div class="col-12 col-lg-6 p-0">
                <nav class="navbar navbar-expand-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                        <i class="fa fa-chevron-circle-down" style="font-size:36px"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul
                            class="navbar-nav font-list d-flex flex-column align-items-center flex-md-row justify-content-md-center">
                            <li class="nav-item  mt-2 mr-1">
                                <router-link to='/'>خانه</router-link>
                            </li>
                            <li class="nav-item mt-2 mr-1">
                                <a class="nav-link" href="#"> باشگاه ها </a>
                            </li>
                            <li class="nav-item mt-2 mr-1">
                                <router-link to='/Weblog'>وبلاگ</router-link>
                            </li>
                            <li class="nav-item mt-2 mr-1">
                                <a class="nav-link" href="#">ارتباط با ما</a>
                            </li>
                        </ul>
                    </div>
                    <div class="profile mr-5 mt-1 pt-1 d-flex flex-md-row justify-content-md-center"  data-toggle="modal" data-target="#myModal"  v-on:click="ShowFromSingIn">
                        <div class="img-pf ">
                            <i class='fas fa-user-circle' style='font-size:24px'></i>
                        </div>
                        <div class="name-pf mr-2 mt-1 ">
                           <span> ثبت نام | ورود </span>
                        </div>
                    </div>
                </nav>
        </div>
    </div>
</template>

<script>
import SignIn from "./signIn.vue"
export default {
    data () {
       return {
           show : true
       }
    },
    components : {
        "sign-in" : SignIn
    },
    methods : { 
        ShowFromSingIn : function () {
            this.show = !this.show
            this.$emit('ShowForm',this.show);
            
        }

    },
    props:{
        form : {type: Boolean}
    }
}
</script>



<style>
    .profile {
        cursor: pointer;
    }
</style>