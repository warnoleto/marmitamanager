<template>
  <navbar placement="top" type="inverse">
    <a slot="brand" href="/" title="Home" class="navbar-brand">{{brand}}</a>
    <router-link tag="li" v-for="itm in routes" :key="itm.path"  :to="itm.path" active-class="active" :exact="true">
      <a v-text="itm.label"></a>
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
    routes () {
      return myRouter.options.routes
    }
  }
}
</script>

<style scoped>

</style>
