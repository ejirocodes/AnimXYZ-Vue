<template>
  <div id="app">
    <AnimXYZ />
  </div>
</template>

<script>
import AnimXYZ from "./components/AnimXYZ.vue";

export default {
  name: "App",
  components: {
    AnimXYZ,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");
@font-face {
  font-family: sharpe;
  src: url("./assets/Sharpe.ttf");
}
body {
  margin: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
