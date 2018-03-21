// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line
import VueStrap from 'vue-strap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import {ServerTable, ClientTable} from 'vue-tables-2'
import draggable from 'vuedraggable'

sync(store, router)

Vue.config.productionTip = false
Vue.component('navbar', VueStrap.navbar)
Vue.component('dropdown', VueStrap.dropdown)
Vue.component('bs-input', VueStrap.input)
Vue.component('form-validator', VueStrap.formValidator)
Vue.component('modal', VueStrap.modal)
Vue.component('v-select', VueStrap.select)
Vue.component('tabs', VueStrap.tabs)
Vue.component('tab', VueStrap.tab)
Vue.component('datepicker', VueStrap.datepicker)
Vue.component('carousel', VueStrap.carousel)
Vue.component('slider', VueStrap.slider)
Vue.component('alert', VueStrap.alert)
Vue.component('draggable', draggable)

const tableDefaultOptions = {
  clientMultiSorting: false
}

Vue.use(ClientTable, tableDefaultOptions, false, 'bootstrap3', 'default')
Vue.use(ServerTable, tableDefaultOptions, false, 'bootstrap3', 'footerPagination')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
