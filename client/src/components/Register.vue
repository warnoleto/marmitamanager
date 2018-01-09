<template>
  <div class="container">
    <form>
    <h1>Register</h1>
    <input type="email" name="email" class="form-control" v-model="email" placeholder="email">
    <br>
    <input type="password" name="password" class="form-control" v-model="password" placeholder="password">
    <br>
    <button @click="register" type="submit" class="btn btn-primary">Register</button> 
    </form>
  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register (event) {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }

}
</script>

<style scoped>

</style>


