<template>
  <div class="lets-animate">
    <h1>Composable CSS Animation with AnimXYZ</h1>
    <div class="harmburger-menu" @click="toggleMenu()">
      <div class="line"></div>
      <XyzTransitionGroup appear :xyz="{animate}">
        <div
          class="line"
          key="index"
          ref="toggler"
        ></div>
      </XyzTransitionGroup>
      <div class="line"></div>
    </div>
    <XyzTransitionGroup appear xyz="small-100% origin-top-right">
      <div class="circle" key="index" v-if="toggled"></div>
    </XyzTransitionGroup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggled: false,
      isActive: false,
      animate: ""
    };
  },
  methods: {
    toggleMenu() {
      this.animate = 'fade rotate-right-50%'
      //toggler this.$refs.toggler.remove();
      this.toggled = !this.toggled;
      // this.isActive = !this.isActive;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lets-animate {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.harmburger-menu {
  cursor: pointer;
}
.line {
  background-color: #000;
  width: 50px;
  height: 2.2px;
  margin-bottom: 5px;
}
.line:nth-of-type(2) {
  margin-left: 5px;
}
.active {
  visibility: hidden;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.circle {
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  background-color: #42b983;
}
</style>
