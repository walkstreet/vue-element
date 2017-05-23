const Validate = {
    install(Vue){
        Vue.prototype.$myName = "shanghai";
        Vue.directive("uname", {
            bind(){
                console.log("bind");
            },
            update(el, binding, vnode, oldVnode) {
                
            }
        })
    }
}

export default Validate;