<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" id="email" placeholder="email">
    <br>
    <input type="password" name="password" id="password" placeholder="password">
    <br>
    <button type="submit">Register</button> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>


