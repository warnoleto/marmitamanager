<template>
  <navbar placement="top" type="inverse">
    <a slot="brand" href="/" title="Home" class="navbar-brand">{{brand}}</a>
    <router-link tag="li" v-for="itm in commonRoutes" :key="itm.path"  :to="itm.path" active-class="active" :exact="true" :slot="itm.slot">
      <a v-text="itm.label"></a>
    </router-link>

    <router-link tag="li" v-for="itm in userRoutes" :key="itm.path"  :to="itm.path" active-class="active" :exact="true" :slot="itm.slot">
      <a v-text="itm.label" v-if="isNotAuthenticated"></a>
    </router-link>
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
    }
  }
}
</script>

<style scoped>

</style>
