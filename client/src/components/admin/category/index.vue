<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="row">
          <div class="col col-xs-6">
            <h3 class="panel-title">Categorias</h3>
          </div>
          <div class="col col-xs-6 text-right">
            <router-link tag="button" to="/admin/category/new" class="btn btn-sm btn-primary btn-create">Criar Novo</router-link>
          </div>
        </div>
      </div>
      <div class="panel-body">
      <v-server-table name="categories" url="/category" :columns="gridColumns" :options="gridOptions" ></v-server-table>
      </div>
    </div>
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
