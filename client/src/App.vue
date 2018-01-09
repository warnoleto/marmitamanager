<template>

  <div id="app">

    <my-navbar></my-navbar>

    <main role="main">
      <router-view/>
    </main>

  </div>
</template>

<script>

import Mynavbar from '@/components/Mynavbar'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'my-navbar': Mynavbar
  }
}
</script>

<style>
  body { padding-top: 50px; }
</style>
