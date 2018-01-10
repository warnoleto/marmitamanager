<template>
  <div class="container container-fluid">
      <div class="col-xs-6 col-md-3" v-for="item in items" v-bind:key="item.title">
          <div class="thumbnail">
              <img :src="item.src" :alt="item.title" >
              <div class="caption">
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
                <p><a href="#" class="btn btn-primary" role="button">Saiba mais.</a></p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      items: [
          {title: 'item1', description: 'description of item 1', src: 'https://placehold.it/244x200?text=244x200'},
          {title: 'item2', description: 'description of item 2', src: 'https://placehold.it/244x200?text=244x200'},
          {title: 'item3', description: 'description of item 3', src: 'https://placehold.it/244x200?text=244x200'},
          {title: 'item4', description: 'description of item 4', src: 'https://placehold.it/244x200?text=244x200'}
      ]
    }
  }
}
</script>

<style scoped>

</style>

