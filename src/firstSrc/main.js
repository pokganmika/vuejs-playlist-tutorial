import Vue from 'vue'
import App from './App.vue'
// import Test from './Test.vue'
// // App.vue의 script에서 대체할 수 있다.
// Vue.component('characters', Test);

new Vue({
  el: '#app',
  render: h => h(App)
})
