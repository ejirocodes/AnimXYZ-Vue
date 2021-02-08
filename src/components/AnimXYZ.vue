<template>
  <div class="xyz-animate">
    <!-- <h1>Composable CSS Animation with AnimXYZ</h1> -->
    <div class="harmburger-menu" @click="toggleMenu()">
      <XyzTransitionGroup appear xyz="fade stagger-1 delay-5">
        <div
          class="line"
          key="1"
          :class="{ top: toggled, deactivated: !toggled }"
        ></div>
        <div
          class="line middle"
          key="2"
          :class="{ active: toggled, deactivated: !toggled }"
        ></div>
        <div
          class="line"
          key="3"
          :class="{ bottom: toggled, deactivated: !toggled }"
        ></div>
      </XyzTransitionGroup>
    </div>

    <XyzTransitionGroup
      appear
      xyz="fade small stagger ease-out-back"
      duration="auto"
    >
      <div class="shape" key="1" v-if="toggled">
        <div class="nav">
          <p class="xyz-nested nav-item">Home</p>
          <p class="xyz-nested nav-item">About</p>
          <p class="xyz-nested nav-item">Contact</p>
        </div>
      </div>
    </XyzTransitionGroup>

    <!-- <XyzTransition appear duration="auto">
      <div class="page-wrap">
        <div class="page-hero" xyz="fade small stagger ease-out-back">
          <div class="hero-logo xyz-nested"></div>
          <p class="hero-text xyz-nested">
            Curabitur blandit tempus porttitor. Morbi leo risus.
          </p>
        </div>
        <div
          class="page-features"
          xyz="fade flip-down stagger duration-10 delay-2 ease-out-back"
        >
          <div class="feature-item xyz-nested"></div>
          <div class="feature-item xyz-nested"></div>
          <div class="feature-item xyz-nested"></div>
        </div>
        <div class="page-section" xyz="fade small stagger delay-4 ease-in-out">
          <div class="section-left" xyz="fade left stagger">
            <div class="section-item xyz-nested"></div>
            <div class="section-item xyz-nested"></div>
            <div class="section-item xyz-nested"></div>
          </div>
          <div class="section-right xyz-nested" xyz="fade big delay-10"></div>
        </div>
        <div class="page-footer" xyz="fade bottom ease-in-out delay-10">
          <div
            class="footer-logo xyz-nested"
            xyz="fade left ease-in-out delay-10"
          ></div>
          <div class="footer-right" xyz="fade up stagger ease-in-out delay-10">
            <div class="footer-item xyz-nested"></div>
            <div class="footer-item xyz-nested"></div>
            <div class="footer-item xyz-nested"></div>
          </div>
        </div>
      </div>
    </XyzTransition> -->

    <!-- <button @click="isAnimate = !isAnimate">Animate</button>
    <XyzTransition
      xyz="fade up in-left in-rotate-left out-right out-rotate-right"
    >
      <div class="square" v-if="isAnimate"></div>
    </XyzTransition> -->

    <!-- <XyzTransition xyz="fade" v-xyz="[`left-${utilityLevel}`]">
      <div class="square" v-if="isAnimate"></div>
    </XyzTransition> -->

    <!-- <XyzTransition xyz="fade small" duration="auto">
      <div class="item-flex"  v-if="isAnimate">
        <div class="square"></div>
        <div class="square xyz-nested"></div>
        <div class="square xyz-nested"></div>
        <div class="square xyz-nested"></div>
      </div>
    </XyzTransition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggled: false,
      isAnimate: true,
      animate: "",
      utilityLevel: "5",
    };
  },
  methods: {
    toggleMenu() {
      this.toggled = !this.toggled;
    },
  },
};
</script>

<style scoped>
.item-flex {
  display: flex;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 0 0 3rem;
}
.nav-item {
  color: #fff;
  margin: 0;
  padding: 1rem 0;
  font-size: 7rem !important;
  font-family: sharpe, sans-serif;
}
.deactivated {
  transform: rotate(0deg);
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.top {
  background-color: #fff !important;
  transition: all 0.2s ease-in-out;
  transform: rotate(45deg);
}
.bottom {
  background-color: #fff !important;
  transition: all 0.2s ease-in-out;
  transform: rotate(-45deg);
}

.harmburger-menu {
  cursor: pointer;
  z-index: 22;
  position: absolute;
  padding: 2rem;
}
.line {
  background-color: #000;
  width: 50px;
  height: 2px;
}
.line:nth-of-type(2) {
  margin: 5px 0;
}
.active {
  transition: all 0.2s ease-in-out;
  opacity: 0;
  display: none;
}
.shape {
  width: 100vw;
  height: 100vh;
  /* padding: 4rem; */
  /* background: linear-gradient(180deg, #31A9C1 60%, #DC571F 40%); */
  background: #31a9c1;
  box-shadow: 0 10px 53px 0 rgb(72 49 212 / 5%);
}
.square {
  width: 12rem;
  height: 12rem;
  background-color: #af0069;
  margin: 1rem;
  border-radius: 20px;
}
.xyz-animate {
  text-align: center;
  display: flex;
  justify-content: flex-end;
}
</style>
