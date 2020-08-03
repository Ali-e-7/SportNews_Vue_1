<template>
    <div class="container">
        <div class="row">
            <right-menu></right-menu>
            <left-menu></left-menu>
        </div>
    </div>
</template>


<script>
import LeftColMenu from './SelectAtmItem/lcMenu.vue'
import RightColMenu from './SelectAtmItem/rcMenu.vue'

export default {
    components : {
        "left-menu" : LeftColMenu,
        "right-menu" : RightColMenu
    }
}
</script>