<template>
    <div class="Vue-toast" :class="icon">
        {{tips}}
    </div>
</template>

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