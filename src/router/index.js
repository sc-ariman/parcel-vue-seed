import Vue from 'vue/dist/vue.esm.js';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
