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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
