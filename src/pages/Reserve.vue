<template>
    <div>
        <bookmark></bookmark>
        <areareserve></areareserve>
    </div>
</template>

<script>
import BookMark from '../component-reserve/BookMark.vue'
import Area from '../component-reserve/Area.vue'
export default {
    components : {
        bookmark : BookMark,
        areareserve : Area
    }
    
}
</script>