<template>
    <div id="app">
        <navbar-head></navbar-head>
        <router-view></router-view>
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
