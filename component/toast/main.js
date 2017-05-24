let toastTpl = Vue.extend({ //创建构造器，定义好提示信息的模板
    template: '<div class="Vue-toast toast-' + opt.defaultType + '">' + tips + '</div>'
});