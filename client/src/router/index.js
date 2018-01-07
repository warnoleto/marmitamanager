import Vue from 'vue'
import Router from 'vue-router'
import Startup from '@/components/Startup'
import Register from '@/components/Register'

Vue.use(Router, Register)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Startup',
      component: Startup
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
