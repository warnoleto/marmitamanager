<template>
  <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" aria-expanded="false">
            <span class="sr-only">Exibir Navegação</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">M.M</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" v-for="itm in routes" :key="itm.path"  :to="itm.path" active-class="active" :exact="true">
              <a v-text="itm.label"></a>
            </router-link>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
</template>

<script>

import myRouter from '@/router'

export default {
  name: 'Mynavbar',
  data () {
    return {
      routes: myRouter.options.routes
    }
  }

}
</script>

<style scoped>

</style>
