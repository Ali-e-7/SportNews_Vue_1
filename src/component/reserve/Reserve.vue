<template>
    <div>
        <bookmark></bookmark>
        <areareserve></areareserve>
    </div>
</template>

<script>
import BookMark from './reserveItems/BookMark.vue'
import Area from './reserveItems/Area.vue'
export default {
    components : {
        bookmark : BookMark,
        areareserve : Area
    }
    
}
</script>