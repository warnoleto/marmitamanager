<template>

  <div id="app">

    <vbs-navbar></vbs-navbar>

    <main role="main">
      <p></p>
      <router-view/>
    </main>

  </div>
</template>

<script>

import VbsNavbar from '@/components/VbsNavbar'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'vbs-navbar': VbsNavbar
  }
}
</script>

<style>
  body { padding-top: 50px; }
</style>
