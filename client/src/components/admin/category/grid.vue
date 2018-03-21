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
        <draggable element="ul"  v-model="categories" :options="draggableOptions" @end="onDragEnd" :move="onMove">
          <li class="list-group-item" v-for="element in categories" :key="element.id">
              <i class="glyphicon glyphicon-pushpin" aria-hidden="true"></i>
              {{element.description}}
              <span class="badge">{{element.position}}</span>
          </li>
          <div class="col text-right" slot="footer" >
            <br>
            <button class="btn btn-sm btn-primary" @click="addCategory">Criar Novo</button>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>

import CategoryService from '@/services/CategoryService'
import draggable from 'vuedraggable'

export default {
  name: 'category',
  components: {
    draggable
  },
  data () {
    return {
      categories: [],
      draggableOptions: {
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    addCategory () {
      console.log('addCategory')
    },
    onDragEnd ({newIndex, oldIndex}) {
      console.log('dragEnded')
    },
    onMove (event) {
      console.log('onMove')
      return true
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
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: .5;
  background: #C8EBFB;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i{
  cursor: pointer;
}
</style>
