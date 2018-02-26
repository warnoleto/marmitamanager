<template>
  <div class="container">
    <h2>Categorias</h2>
    <v-server-table name="categories" url="/category" :columns="gridColumns" :options="gridOptions" ></v-server-table>
  </div>
</template>

<script>

import CategoryService from '@/services/CategoryService'

export default {
  name: 'category',
  data () {
    return {
      search: '',
      gridColumns: ['id', 'description', 'position', 'maxAllowed'],
      gridOptions: {
        requestFunction: CategoryService.findAll,
        headings: {
          description: 'Descrição',
          position: 'Posição',
          maxAllowed: 'Seleção Máxima'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
