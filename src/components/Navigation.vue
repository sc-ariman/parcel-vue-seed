<template>
  <nav id="navigation">
    <ul>
        <li><router-link to="/">Top</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
        <li><router-link to="/helloworld">HelloWorld</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>