import Vue from 'vue';

let toastTpl = Vue.extend(require('./toast.vue'));  //extend的扩展组件封装到了外部

let Toast = {};
Toast.install = function (Vue, options) {
    let opt = {
        defaultType: 'bottom', //默认显示位置
        duration: '2500' //持续时间
    };
    for (let property in options) {
        opt[property] = options[property]; //传入的参数对函数内部opt循环赋值
    }
    Vue.prototype.$toast = (tips, type) => {
        if (type) {
            opt.defaultType = type; //如果有传type， 位置则设为该type
        }
        //创建外部组件需要的data()对象
        let vueOption = {
            tips: tips,
            iconClass: opt.defaultType
        }
        let tpl = new toastTpl({  //创建构建器，传入vue文件所需的tips和iconClass变量
            data: vueOption
        })
            .$mount()
            .$el; //创建实例，挂在到文档以后的地方
        document
            .body
            .appendChild(tpl); //把创建的实例添加到body中
        setTimeout(function () {
            //2.5秒后删除该提示
            document
                .body
                .removeChild(tpl);
        }, opt.duration)
    };
    ['bottom', 'center', 'top'].forEach(type => {
        Vue.prototype.$toast[type] = (tips) => {
            return Vue
                .prototype
                .$toast(tips, type)
        }
    });
};
export default Toast;