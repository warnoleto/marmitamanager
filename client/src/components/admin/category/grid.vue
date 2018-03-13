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
      <v-client-table name="categories" :data="categories" :columns="gridColumns" :options="gridOptions" >
        <div slot="actions" slot-scope="props" >
          <button class="btn btn-primary" >Edit</button>
          <button class="btn btn-danger" >Remove</button>
        </div>
      </v-client-table>
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
      categories: [],
      gridColumns: ['description', 'position', 'maxAllowed', 'actions'],
      gridOptions: {
        requestFunction: CategoryService.findAll,
        headings: {
          description: 'Descrição',
          position: 'Posição',
          maxAllowed: 'Seleção Máxima'
        }
      }
    }
  },
  async mounted () {
    let d = await CategoryService.findAll({})
    console.log(d)
    this.categories = d.data
  }
}
</script>

<style scoped>

</style>
