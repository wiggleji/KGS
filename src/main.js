import 'es6-promise/auto' // es6 promise

import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

import store from './store'

Vue.config.productionTip = false

// Axios
const axiosClient = axios.create()
Vue.prototype.$axios = axiosClient


new Vue({
  // Vuex
  store,
  render: h => h(App),
}).$mount('#app')
