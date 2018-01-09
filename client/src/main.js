// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line
import VueStrap from 'vue-strap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

Vue.config.productionTip = false
Vue.component('navbar', VueStrap.navbar)
Vue.component('dropdown', VueStrap.dropdown)
Vue.component('bs-input', VueStrap.input)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
