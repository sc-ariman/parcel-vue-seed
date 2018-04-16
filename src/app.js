import "./assets/sass/style.scss";
import Vue from 'vue/dist/vue.esm.js';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
