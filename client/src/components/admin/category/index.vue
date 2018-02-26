<template>
  <div class="container">
    <h2>Categorias</h2>
    <datagrid></datagrid>
  </div>
</template>

<script>

import Datagrid from '@/components/globals/Datagrid'

export default {
  name: 'category',
  data () {
    return {
      search: '',
      data: []
    }
  },
  components: {
    Datagrid
  }
}
</script>

<style scoped>

</style>
