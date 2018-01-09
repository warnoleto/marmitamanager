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
          {title: 'item1', description: 'description of item 1', src: './static/thumbnail_blank.png'},
          {title: 'item2', description: 'description of item 2', src: './static/thumbnail_blank.png'},
          {title: 'item3', description: 'description of item 3', src: './static/thumbnail_blank.png'},
          {title: 'item4', description: 'description of item 4', src: './static/thumbnail_blank.png'},
          {title: 'item5', description: 'description of item 5', src: './static/thumbnail_blank.png'},
          {title: 'item6', description: 'description of item 6', src: './static/thumbnail_blank.png'},
          {title: 'item7', description: 'description of item 7', src: './static/thumbnail_blank.png'}
      ]
    }
  }
}
</script>

<style scoped>

</style>

