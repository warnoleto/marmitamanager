import Vue from 'vue'
import Router from 'vue-router'
import Startup from '@/components/Startup'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ThePlace from '@/components/ThePlace'
import Services from '@/components/Services'

import CategoryList from '@/components/admin/category/Grid'
import CategoryNew from '@/components/admin/category/New'

Vue.use(Router, Register)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'startup',
      component: Startup
    },
    {
      path: '/theplace',
      name: 'theplace',
      component: ThePlace
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin/category',
      name: 'caterogylist',
      component: CategoryList
    },
    {
      path: '/admin/category/new',
      name: 'caterogyCreateForm',
      component: CategoryNew
    }

  ]
})
