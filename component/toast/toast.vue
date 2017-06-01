<template>
    <div class="Vue-toast" :class="icon">
        {{tips}}
    </div>
</template>

<style lang="scss" scoped>
body{
    height: 100%;
}
.Vue-toast {
    position: fixed;
    background-color: #333;
    color: #fff;
    font-size: 12px;
    border-radius: 8px;
    padding: 0 20px;
    width: 10%;
    z-index: 100;
    left: 50%;
    margin-left: -5%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.toast-bottom {
    bottom: 100px;
}
.toast-top {
    top: 100px;
}
.toast-center {
    top: 50%;
    margin-top: -20px;
}
</style>

<script>
module.exports = {
    data() {
        return {
            iconClass: "",
            tips: ""
        }
    },

    computed: {
        icon: function() {
            return "toast-" + this.iconClass
        }
    },

    methods: {
        
    }
}
</script>