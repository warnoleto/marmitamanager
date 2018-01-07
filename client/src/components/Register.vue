<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" id="email" v-model="email" placeholder="email">
    <br>
    <input type="password" name="password" id="password" v-model="password" placeholder="password">
    <br>
    <button @click="register" type="submit">Register</button> 
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


