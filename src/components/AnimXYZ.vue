<template>
  <div class="xyz-animate">
    <!-- <h1>Composable CSS Hover over to see effect</h1> -->
    <!-- <div class="harmburger-menu" @click="toggleMenu()">
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
          <a class="xyz-nested nav-item">Home</a>
          <a class="xyz-nested nav-item">About</a>
          <a class="xyz-nested nav-item">Contact</a>
        </div>
      </div>
    </XyzTransitionGroup> -->

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

    <!-- <XyzTransition
      appear-visible
      xyz="fade up-100% flip-down flip-right-50% rotate-left-100% origin-bottom duration-10 stagger"
    >
      <div class="card" key="1" v-if="!isHover" @mouseenter="isHover = true">
        <img
          src="https://cdn.dribbble.com/users/2417352/screenshots/15197452/media/8e61474be3aef19d7f058bf42db34e18.png"
          alt="card image"
          class="card-img"
        />

        <h2 class="xyz-nested">Hover over to see effect</h2>
        <p class="xyz-nested">Animation with AnimXYZ</p>
        <p class="xyz-nested">
          AnimXYZ is a composable, performant and customizable CSS animation
          toolkit powered by CSS variables.
        </p>
      </div>
    </XyzTransition>

    <XyzTransition
      appear-visible
      v-xyz="{
        'fade down-5 rotate-right-50% stagger': !isHover1,
      }"
    >
      <div class="card" v-if="!isHover1" @mouseenter="isHover1 = true">
        <img
          src="https://cdn.dribbble.com/users/254977/screenshots/15210695/media/c152bccd293ad0ec84e831db21262422.png"
          alt="card image"
          class="card-img"
        />
        <h2 class="xyz-nested">Hover over to see effect</h2>
        <p>Animation with AnimXYZ</p>
        <p>
          AnimXYZ is a composable, performant and customizable CSS animation
          toolkit powered by CSS variables.
        </p>
      </div>
    </XyzTransition>

    <XyzTransition
      appear-visible
      v-xyz="{ 'fade flip-up flip-left origin-top-right': !isHover2 }"
    >
      <div class="card" v-if="!isHover2" @mouseenter="isHover2 = true">
        <img
          src="https://cdn.dribbble.com/users/821258/screenshots/15189951/media/bf2fe6f7008607862d9bdc271401d047.jpg"
          alt="card image"
          class="card-img"
        />

        <h2 class="xyz-nested">Hover over to see effect</h2>
        <p class="xyz-nested">Animation with AnimXYZ</p>
        <p class="xyz-nested">
          AnimXYZ is a composable, performant and customizable CSS animation
          toolkit powered by CSS variables.
        </p>
      </div>
    </XyzTransition>

    <XyzTransition
      appear-visible
      v-xyz="{ 'fade front-3 flip-left-50% duration-4': !isHover3 }"
    >
      <div class="card" v-if="!isHover3" @mouseenter="isHover3 = true">
        <img
          src="https://cdn.dribbble.com/users/3958105/screenshots/15209937/media/10b648afb141f3448c3b05e980fc1f57.png"
          alt="card image"
          class="card-img"
        />

        <h2 class="xyz-nested">Hover over to see effect</h2>
        <p class="xyz-nested">Animation with AnimXYZ</p>
        <p class="xyz-nested">
          AnimXYZ is a composable, performant and customizable CSS animation
          toolkit powered by CSS variables.
        </p>
      </div>
    </XyzTransition> -->
    <!-- <XyzTransition
      appear-visible
      v-xyz="{ 'small-100% origin-top-right': !isCondition }"
    >
      <div
        class="square"
        v-if="!isCondition"
        @mouseenter="isCondition = true"
      ></div>
    </XyzTransition> -->
    <!-- <div class="shape" ></div> -->

    <!-- <XyzTransitionGroup
        appear
        xyz="fade small stagger ease-out-back"
        duration="auto"
      >
        <div class="shape" key="1" v-if="toggled">
          <div class="nav">
            <a class="xyz-nested nav-item">Home</a>
            <a class="xyz-nested nav-item">About</a>
            <a class="xyz-nested nav-item">Contact</a>
          </div>
        </div>
      </XyzTransitionGroup> -->

    <button
      data-v-689fae14=""
      class="modal-toggle example-button"
      @click="isDialog = !isDialog"
      :aria-describedby="modalStatus"
    >
      {{ modalStatus }}
    </button>

    <XyzTransition duration="auto" xyz="fade out-delay-5" @keydown.esc="isDialog = false">
      <div
        class="dialog_overlay"
        v-if="isDialog"
        
      >
        <section
          role="dialog"
          id="dialog1"
          aria-labelledby="dialog1_label"
          aria-modal="true"
          class="hidden dialog xyz-nested"
          xyz="fade small stagger ease-out-back"
        >
          <div class="dialog_top flex xyz-nested" xyz="up-100% in-delay-3">
            <header
              id="dialog1_label"
              class="dialog_label xyz-nested"
              xyz="fade right in-delay-7"
            >
              Join our community on Slack
            </header>
            <button
              type="button"
              aria-label="Close"
              xyz="fade small in-delay-7"
              class="xyz-nested"
              @click="isDialog = false"
              title="Close"
            >
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                class="chakra-icon css-onkibi"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="dialog_body xyz-nested" xyz="up-100% in-delay-3">
            <div class="dialog_body--top flex justify_center align_center">
              <img
                src="../assets/slack.png"
                alt="slack logo"
                class="slack_logo"
              />
              <img src="../assets/plus.png" alt="plus" class="plus" />
              <img
                src="../assets/discord.png"
                alt="discord logo"
                class="discord_logo"
              />
            </div>
            <p><span class="bold">929</span> users are registered so far.</p>
          </div>
          <form class="dialog_form" autocomplete>
            <label for="email"
              ><span class="sr-only">Enter your email</span></label
            >
            <input
              id="email"
              type="email"
              placeholder="johndoe@email.com"
              autocomplete="email"
              aria-describedby="email"
              class="dialog_input"
              required
              ref="email"
            />
            <button type="submit" class="dialog_invite_btn">
              Get my invite
            </button>
            <p>Already joined?</p>
            <button
              type="button"
              aria-describedby="open_slack"
              class="dialog_slack_btn flex align_center justify_center xyz-nested"
              xyz="fade in-right in-delay-7"
              id="open_slack"
            >
              <span
                ><img src="../assets/slack.png" alt="slack logo" role="icon"
              /></span>
              Open Slack
            </button>
          </form>
        </section>
      </div>
    </XyzTransition>

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
      isHover: false,
      isHover1: false,
      isHover2: false,
      isHover3: false,
      isCondition: false,
      isDialog: false,
    };
  },
  computed: {
    modalStatus() {
      return !this.isDialog ? "Open Modal" : "Close Modal";
    },
  },
  watch: {
    isDialog(val) {
      setTimeout(() => {
        val && this.$refs.email.focus();
      }, 500);
    },
  },
  methods: {
    getAttr() {
      // this.$refs["anim"].$attrs["xyz"] = "fade rotate-right ease-out-back";
      console.log(this.$refs["anim"].$attrs["xyz"]);
    },
    toggleMenu() {
      this.toggled = !this.toggled;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.sr-only {
  position: absolute;
  left: -99999px;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
.flex {
  display: flex;
}
.align_center {
  align-items: center;
}
.justify_center {
  justify-content: center;
}
.dialog {
  text-align: center;
  background-color: #f7fafd;
  padding: 2.4rem;
  border-radius: 1rem;
  border: 1px solid #5fb2844b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.dialog_label {
  font-size: 1.2rem;
  font-weight: 600;
}
/* .dialog_overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  z-index: 99999999;
} */
.dialog_top {
  align-items: center;
  justify-content: space-between;
}
.dialog_top button {
  height: 2rem;
  width: 2rem;
}
.dialog_top button:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
}
.dialog_body {
  margin-bottom: 2.4rem;
}
.dialog_body--top {
  margin: 3rem 0 2rem;
}
.slack_logo,
.discord_logo {
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 2.2rem;
}
.plus {
  width: 1.2rem;
  height: 1.2rem;
}
.bold {
  font-weight: 600;
}
.dialog_input {
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  border-radius: 0.2rem;
  box-sizing: border-box;
}
.dialog_invite_btn {
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  width: 100%;
  height: 3rem;
  line-height: 1.2;
  background: #283341;
  color: #fff;
  margin: 0.6rem 0 2rem;
  border-radius: 0.2rem;
  border: none;
  font-size: 1.2rem;
}
.dialog_invite_btn:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  background: #1e2733;
}

.dialog_invite_btn:hover {
  background: #1e2733;
}
.dialog_invite_btn:active {
  background: #161c24;
}
.dialog_slack_btn {
  height: 3rem;
  width: 100%;
  background-color: #fff;
  color: #283341;
  font-size: 1.2rem;
  border: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 0.2rem;
}
.dialog_slack_btn:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  background: #f7f7f7;
}

.dialog_slack_btn:hover {
  background: #f7f7f7;
}
.dialog_slack_btn:active {
  background: #e9e9e9;
}
.dialog_slack_btn img {
  width: 1rem;
  margin-right: 1rem;
}
button {
  outline: none;
  cursor: pointer;
}

.example-button {
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  font-weight: 650;
  letter-spacing: 0.025em;
  padding: 0.5rem 1rem;
  transition: 0.2s ease-in-out;
  transition-property: background-color, box-shadow, color;
  margin-bottom: 3rem;
}
.example-button:focus {
  box-shadow: 0 0 0 2px #56ccf2;
}
.card {
  width: 18rem;
  padding: 1rem;
  margin: 2rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: #2f3065;
  cursor: pointer;
}
.card-img {
  width: 100%;
  border-radius: 20px;
}
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
  width: 20vw;
  height: 20vh;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-direction: column;
}
</style>
