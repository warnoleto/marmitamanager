<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="row">
          <div class="col col-xs-6">
            <h3 class="panel-title">Categorias</h3>
          </div>
          <div class="col col-xs-6 text-right">
            <router-link tag="button" to="/admin/category" class="btn btn-sm btn-primary btn-create">Cancelar</router-link>
          </div>
        </div>
      </div>
      <div class="panel-body">
        <form-validator v-model="valid.all">
          <bs-input label="Descrição" v-model="description" type="text" required :maxlength="30"></bs-input>
          <bs-input label="Posição" v-model="position" type="number" required ></bs-input>
          <bs-input label="Máximo Permitido" v-model="maxAllowed" type="number" required ></bs-input>
        </form-validator>
         <button type="button" class="btn btn-primary" :disabled="!valid.all" @click="salvar">Salvar</button>
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
      valid: {},
      description: '',
      position: '1',
      maxAllowed: '1'
    }
  },
  methods: {
    async salvar () {
      try {
        await CategoryService.create({
          description: this.description,
          position: this.position,
          maxAllowed: this.maxAllowed
        })
        this.$router.push('/categorias')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
