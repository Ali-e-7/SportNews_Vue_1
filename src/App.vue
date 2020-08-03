<template>
    <div id="app">
        <navbarHead></navbarHead>
        <transition enter-active-class="animated fadeIn">
        <router-view></router-view>
        </transition>
        <aboutWeb></aboutWeb>
    </div>
</template>

<script>
export default {

}
</script>
