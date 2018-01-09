<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Marmita Manager!</h1>
        <p>Monte e peça sua marmita que entregaremos em sua casa.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Saiba Mais »</a></p>
      </div>
    </div>
    <vbs-thumbnails></vbs-thumbnails>
  </div>
</template>

<script>
import VbsThumbnails from '@/components/VbsThumbnails'

export default {
  name: 'Startup',
  data () {
    return {
    }
  },
  components: {
    'vbs-thumbnails': VbsThumbnails
  }
}
</script>

<style scoped>

</style>
