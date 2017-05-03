const Validate = {
    install(Vue){
        Vue.prototype.$myName = "shanghai";
        Vue.directive("uname", {
            bind(){
                console.log("bind");
            },
            update(el, binding, vnode, oldVnode) {
                console.log();
            }
        })
    }
}

export default Validate;