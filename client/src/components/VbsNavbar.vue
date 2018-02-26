<template>
  <navbar placement="top" type="inverse">
    <a slot="brand" href="/" title="Home" class="navbar-brand">{{brand}}</a>
    
    <router-link tag="li" to="/theplace" active-class="active" :exact="true">
      <a>Instalações</a>
    </router-link>

    <router-link tag="li" to="/services" active-class="active" :exact="true">
      <a>Serviços</a>
    </router-link>

    <dropdown text="Administração" slot="right" v-if="isAdmin">
      <router-link tag="li" to="/admin/category" active-class="active" :exact="true">
        <a>Categorias</a>
      </router-link>
      <router-link tag="li" to="/admin/option" active-class="active" :exact="true">
        <a>Opções</a>
      </router-link>
    </dropdown>

    <router-link tag="li" to="/login" active-class="active" :exact="true" slot="right" v-if="isNotAuthenticated">
      <a>Entrar</a>
    </router-link>

    <router-link tag="li" to="/register" active-class="active" :exact="true" slot="right" v-if="isNotAuthenticated">
      <a>Registrar-se</a>
    </router-link>

    <li @click="logoff" slot="right" v-if="isAuthenticated">
      <a>Sair</a>
    </li>

  </navbar>
</template>

<script>

import myRouter from '@/router'

export default {
  name: 'VbsNavbar',
  data () {
    return {
      brand: 'M.M'
    }
  },
  computed: {
    commonRoutes () {
      return myRouter.options.routes.filter(i => !i.hideIfAuthenticated)
    },
    userRoutes () {
      return myRouter.options.routes.filter(i => i.hideIfAuthenticated)
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    isNotAuthenticated () {
      return !this.$store.getters.isAuthenticated
    },
    isAdmin () {
      return this.$store.getters.isAdmin
    }
  },
  methods: {
    logoff () {
      this.$store.dispatch('setAuthenticationInfo', {})
    }
  }
}
</script>

<style scoped>

</style>
