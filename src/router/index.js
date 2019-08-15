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
      path:'/',
      name:'homepage',
      component:()=>import(/* webpackChunkName: "homepage" */ '@/components/homepage/HomePage.vue'),
      children:[
        {
          path: 'login',
          name: 'login',
          component:()=>import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
        },
        {
          path: 'department',
          name: 'department',
          component:()=>import(/* webpackChunkName: "department" */ '@/views/department/Department.vue')
        },
        {
          path: 'employees',
          name: 'employees',
          component:()=>import(/* webpackChunkName: "department" */ '@/views/employees/Employees.vue')
        },
      ]
    }

  ]
})
