import Vue from 'vue';

//载入数据流管理
import Vuex from 'vuex';

//载入vue-cookie
import VueCookie from 'vue-cookie';

//载入初始样式
import "../node_modules/normalize.css";

//载入全局样式
import "!style!css!sass!./index.scss";

//载入animation动画库css3
import "../node_modules/animate.css";

//路由配置文件
import "./router.js";

//自定义插件，表单验证
import validate from "../component/validate/validate";

//toast提示框
import toast from "../component/toast/toast";

//使用数据流
Vue.use(Vuex);

//使用vue-cookie
Vue.use(VueCookie);

//使用表单验证插件
Vue.use(validate);

//使用toast提示框
Vue.use(toast);

//config的配置作为全局参数
import "./config.js";