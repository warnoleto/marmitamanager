<template>
  <div class="container">
    <form class="col-md-4 col-md-offset-4" autocomplete="off">
      <h1>Registrar-se</h1>
      
      <bs-input name="email" label="Endereço de Email" v-model="email" type="email" placeholder="E-mail" required error="Informe o email" icon/>
      
      <bs-input name="password" label="Password" v-model="password" type="password" placeholder="Password" required error="Informe o password" icon aria-autocomplete="off"/>

      <button @click.prevent="register" type="submit" class="btn btn-primary">Enviar</button> 

      <p class="error">{{error}}</p>

    </form>
  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register (event) {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setAuthenticationInfo', response.data)
        this.error = null
        this.$router.push('/')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error{
    color: red
  }
</style>


