<template>
    <form @submit.prevent="login()" v-if="unauthenticated">
        <bs-input v-model="email" type="email" placeholder="Email" required icon/>
        <bs-input v-model="password" type="password" placeholder="Password" required icon />
        <button type="submit" class="btn btn-success">Sign in</button>
    </form>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: '',
      authenticated: false
    }
  },
  computed: {
    unauthenticated () {
      return !this.authenticated
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

