import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import regist from '@/components/regist'
import login from '@/components/login'
import index from '@/pages/index'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {path:'/me',name:'me',component:()=>import('../pages/me.vue')},
    {path:'/find',name:'find',component:()=>import('../pages/find.vue')},
    {path:'/market',name:'market',component:()=>import('../pages/market.vue')}
  ]
})
