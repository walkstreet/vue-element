<template>
    <div class="slot">
        <span>{{text}}</span>
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .slot {
        text-align: center;
    }
</style>
<script>
    module.exports = {
        props: ['text'],
        data() {
            return {

            }
        },
        mounted: function() {
            
        }
    }
</script>