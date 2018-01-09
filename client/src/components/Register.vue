<template>
  <div class="container">
    <form class="col-md-4 col-md-offset-4">
      <h1>Registrar-se</h1>
      
      <bs-input label="Endereço de Email" v-model="email" placeholder="E-mail" required error="Informe o email" icon/></bs-input>
      
      <bs-input label="Password" v-model="password" type="password" placeholder="Password" required error="Informe o password" icon/></bs-input>

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


