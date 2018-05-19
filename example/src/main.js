import Vue from 'vue'
import VWebp from '../../index.js'
import App from './App.vue'

Vue.directive('Webp', VWebp)

new Vue({
  el: '#app',
  render: h => h(App)
})