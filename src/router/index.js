import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component:()=>import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')

    },
    {
      path:'/homepage',
      name:'homepage',
      component:()=>import(/* webpackChunkName: "homepage" */ '@/components/homepage/HomePage.vue')


    }

  ]
})
