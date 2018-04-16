import "./src/assets/sass/style.scss";
import Vue from 'vue/dist/vue.esm.js';
import App from './src/App.vue';
import router from './src/router';

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App),
});