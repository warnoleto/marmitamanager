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
Vue.component('modal', VueStrap.modal)
Vue.component('v-select', VueStrap.select)
Vue.component('tabs', VueStrap.tabs)
Vue.component('tab', VueStrap.tab)
Vue.component('datepicker', VueStrap.datepicker)
Vue.component('carousel', VueStrap.carousel)
Vue.component('slider', VueStrap.slider)
Vue.component('alert', VueStrap.alert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
