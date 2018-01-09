<template>
  <div class="container">
    <form class="col-md-4 col-md-offset-4">
      <h1>Registrar-se</h1>
      <div class="form-group">
        <label for="email">Endereço de Email</label>
        <input id="email" type="email" name="email" class="form-control" v-model="email" placeholder="email">
      </div>
      
      <div class="form-group">
        <label for="email">Password</label>
        <input type="password" name="password" class="form-control" v-model="password" placeholder="password">
      </div>
      <br>
      <button @click="register" type="submit" class="btn btn-primary">Enviar</button> 
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
      event.preventDefault()
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


