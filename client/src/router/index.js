import Vue from 'vue'
import Router from 'vue-router'
import Startup from '@/components/Startup'
import Register from '@/components/Register'
import ThePlace from '@/components/ThePlace'
import Services from '@/components/Services'

Vue.use(Router, Register)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'startup',
      component: Startup,
      label: 'Início'
    },
    {
      path: '/theplace',
      name: 'theplace',
      component: ThePlace,
      label: 'Instalações'
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      label: 'Serviços'
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      label: 'Registrar-se'
    }
  ]
})
