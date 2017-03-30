# Vue-element 项目

> 基于Vue2.0的Element框架

## 项目说明

该项目是通过vue-cli构架整体结构
同时融入了vue-router开发SPA，支持懒加载
vuex管理数据流
axios作为核心请求库
ele.me的Element框架为项目UI框架。
Webpack则加入了图片转dataurl处理及sass/scss
支持ES6及ES6+

## 结构说明

> 所用插件说明

+ vue2.0
+ vue-router2.0
+ vuex
+ axios
+ element-ui
+ webpack

## 组件说明

> 开发中遇到select2功能的组件需求，element框架中不存在，故自行制作了select2组件

具体用法在src/page/adminCtrl.vue中有提现

## 构建命令

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
