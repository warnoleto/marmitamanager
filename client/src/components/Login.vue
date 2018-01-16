<template>
  <div class="container">
    <form @submit.prevent="login()" class="col-md-4 col-md-offset-4" autocomplete="off">
      <h1>Autenticar-se</h1>
      
      <bs-input name="email" label="Endereço de Email" v-model="email" type="email" placeholder="E-mail" required error="Informe o email" icon/>
      
      <bs-input name="password" label="Password" v-model="password" type="password" placeholder="Password" required error="Informe o password" icon/>

      <button type="submit" class="btn btn-primary">Enviar</button> 

      <p class="error">{{error}}</p>

    </form>
  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      const response = await AuthenticationService.login({email: this.email, password: this.password})
      console.log(response.data)
    }
  }
}
</script>
