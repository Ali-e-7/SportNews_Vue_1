<template>
    <div id="app">
        <navbar-head></navbar-head>
        <transition enter-active-class="animated fadeIn">
        <router-view></router-view>
        </transition>
        <about-web></about-web>
    </div>
</template>

<script>
import Navbar from './shared/Navbar.vue'
import AboutWeb from './shared/AboutWeb.vue'
export default {
    components : {
        navbarHead : Navbar,
        aboutWeb : AboutWeb
    }
}
</script>
