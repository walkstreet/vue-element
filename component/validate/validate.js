const Validate = {
    install(Vue){
        let data = {
            user: false
        }
        Vue.prototype.$validate = data;
        Vue.directive("uname", {
            bind(el, binding, vnode, oldVnode) {
                console.log(binding.value)
            },
            update(el, binding, vnode, oldVnode) {
                console.log("binding.name:", binding.name);
                console.log("binding.expression:", binding.expression);
                console.log("binding.value:", binding.value);
                let reg = /[\D]/;
                if(!reg.test(binding.value.value)) {
                    data.user = true;
                }
            }
        })
    }
}

export default Validate;