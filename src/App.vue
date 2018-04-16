<template>
  <div id="app">
    <navigation></navigation>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
      Navigation
  }
}
</script>