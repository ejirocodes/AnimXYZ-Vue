<template>
  <div id="app">
    <AnimXYZ />
  </div>
</template>

<script>
import AnimXYZ from './components/AnimXYZ.vue'

export default {
  name: 'App',
  components: {
    AnimXYZ
  }
}
</script>

<style>
@font-face {
    font-family: sharpe;
    src: url('./assets/Sharpe.ttf')
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
