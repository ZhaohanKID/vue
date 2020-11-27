import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Main from '../components/Main'
import Content from "../components/Content";
import Weima from "../components/Weima"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      // 路由路径，这个路径并不是说文件在哪里的路径，而是通过App.vue访问到这里使用到的
      path: '/content',
      // 路由名称
      name: 'Content',
      // 跳转到哪个组件
      component: Content
    },{
      path: '/main',
      name: 'Main',
      component: Main
    },{
      path: '/weima',
      name: 'Weima',
      component: Weima
    }
  ]
})
