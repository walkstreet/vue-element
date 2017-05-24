const Validate = {
    install(Vue){
        Vue.prototype.$myName = {
            error(option) {
                console.log();
            }
        };
        Vue.directive("uname", {
            bind(){
                // stuff

            }
        })
    }
}

export default Validate;