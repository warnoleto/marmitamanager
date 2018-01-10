<template>
  <div class="container">
    <br>
    <carousel>
      <slider v-for="slide in slides" :key="slide.title">
        <img :src="slide.src" :alt="slide.title">
        <div class="carousel-caption">
          <h3>{{slide.title}}</h3>
          <p>{{slide.description}}</p>
        </div>
      </slider>
    </carousel>
  </div>
</template>

<script>

export default {
  data () {
    return {
      slides: [
        {title: 'slide 1', description: 'description of slide 1', src: 'https://placehold.it/1200x800?text=First%20Slide'},
        {title: 'slide 2', description: 'description of slide 2', src: 'https://placehold.it/1200x800?text=Second%20Slide'},
        {title: 'slide 3', description: 'description of slide 3', src: 'https://placehold.it/1200x800?text=Third%20Slide'},
        {title: 'slide 4', description: 'description of slide 4', src: 'https://placehold.it/1200x800?text=Fourth%20Slide'}
      ]
    }
  }
}
</script>

<style scoped>
  body { padding-top: 150px; }
</style>

