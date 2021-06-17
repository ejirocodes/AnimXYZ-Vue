<template>
  <!-- <div class="xyz-animate">
    <h1>Modal Animation with AnimXYZ and Vue</h1>

    <button
      data-v-689fae14=""
      class="modal-toggle modal-btn-main"
      @click="isModal = !isModal"
      autofocus
      ref="modalBtn"
      :aria-describedby="modalStatus"
    >
      {{ modalStatus }}
    </button>
    <XyzTransition
      duration="auto"
      xyz="fade out-delay-5"
      @keydown.esc="isModal = false"
    >
      <div class="modal_overlay" v-if="isModal" @click.stop="close">
        <section
          role="modal"
          id="modal1"
          aria-labelledby="modal1_label"
          aria-modal="true"
          class="hidden modal xyz-nested"
          xyz="fade small stagger ease-out-back"
        >
          <div class="modal_top flex xyz-nested" xyz="up-100% in-delay-3">
            <header
              id="modal1_label"
              class="modal_label xyz-nested"
              xyz="fade right in-delay-7"
            >
              Join our community on Slack
            </header>
            <button
              type="button"
              aria-label="Close"
              xyz="fade small in-delay-7"
              class="xyz-nested"
              @click.stop="isModal = false"
              title="Close"
            >
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="modal_body xyz-nested" xyz="up-100% in-delay-3">
            <div class="modal_body--top flex justify_center align_center">
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
          <form class="modal_form" autocomplete>
            <label for="email"
              ><span class="sr-only">Enter your email</span></label
            >
            <input
              id="email"
              type="email"
              placeholder="johndoe@email.com"
              autocomplete="email"
              aria-describedby="email"
              class="modal_input"
              required
              ref="email"
            />
            <button type="submit" class="modal_invite_btn">
              Get my invite
            </button>
            <p>Already joined?</p>
            <button
              type="button"
              aria-describedby="open_slack"
              class="
                modal_slack_btn
                flex
                align_center
                justify_center
                xyz-nested
              "
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
  </div> -->
  <section class="xyz-animate">
    <h1>Modal Animation with AnimXYZ and Vue</h1>
    <button
      class="modal-toggle modal-btn-main"
      data-modal-text="Open Modal"
      data-modal-title="Title"
      data-modal-close-text="Close"
      id="label_modal_kdf8e87cga"
      aria-haspopup="dialog"
      ref="openButton"
      @click="open"
      autofocus
    >
      Open Modal
    </button>
    <span
      id="js-modal-overlay"
      class="simple-modal-overlay"
      data-background-click="enabled"
      title="Close this window"
      v-if="isModal"
      @click="close"
    >
      <span class="invisible">Close this window</span>
    </span>
    <div
      role="dialog"
      class="simple-modal__wrapper"
      aria-labelledby="modal-title"
    >
      <XyzTransition duration="auto" xyz="fade out-delay-5">
        <section
          id="modal1"
          aria-labelledby="modal1_label"
          aria-modal="true"
          class="modal xyz-nested"
          xyz="fade small stagger ease-out-back"
          v-if="isModal"
          tabindex="-1"
          ref="modal"
          @keydown.esc="close"
        >
          <div class="modal_top flex xyz-nested" xyz="up-100% in-delay-3">
            <header
              id="modal1_label modal-title"
              class="modal_label xyz-nested"
              xyz="fade right in-delay-7"
            >
              Join our community on Slack
            </header>
            <button
              type="button"
              aria-label="Close"
              xyz="fade small in-delay-7"
              class="xyz-nested"
              @click="close"
              title="Close"
            >
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="modal_body xyz-nested" xyz="up-100% in-delay-3">
            <div class="modal_body--top flex justify_center align_center">
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
          <form class="modal_form" autocomplete>
            <label for="email"
              ><span class="sr-only">Enter your email</span></label
            >
            <input
              id="email"
              type="email"
              placeholder="johndoe@email.com"
              autocomplete="email"
              aria-describedby="email"
              class="modal_input"
              required
            />
            <button type="submit" class="modal_invite_btn">
              Get my invite
            </button>
            <p>Already joined?</p>
            <button
              type="button"
              aria-describedby="open_slack"
              class="
                modal_slack_btn
                flex
                align_center
                justify_center
                xyz-nested
              "
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
      </XyzTransition>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    open() {
      if (!this.isModal) {
        this.isModal = true;
        this.$nextTick(() => {
          const emailRef = this.$refs.modal;
          console.log(emailRef);
          emailRef.focus();
        });
      }
    },
    close() {
      if (this.isModal) {
        this.isModal = false;
        this.$nextTick(() => {
          const openButtonRef = this.$refs.openButton;
          openButtonRef.focus();
        });
      }
    },
  },
};
</script>

<style scoped>
.simple-modal-overlay,
.simple-animated-modal-overlay,
.simple-animatedtransform-modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #999999;
  opacity: 0.8;
  z-index: 200;
  cursor: pointer;
}
.invisible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.simple-modal,
.simple-animated-modal,
.simple-animatedtransform-modal {
  position: fixed;
  left: 15%;
  width: 70%;
  top: 5vh;
  max-height: 90vh;
  border: 2px solid #000;
  background: #fff;
  z-index: 667;
  padding: 2em;
  right: auto;
  overflow: auto;
}
.simple-modal__wrapper {
  z-index: 300;
}

.modal-btn-main {
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
*:focus {
  outline: 0 !important;
  border: 1px solid #eb5757 !important;
  box-shadow: 0 0 0 2px #eb5757 !important;
}

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
.modal {
  text-align: center;
  background-color: #f7fafd;
  padding: 2.4rem;
  border-radius: 1rem;
  border: 1px solid #5fb2844b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.modal_label {
  font-size: 1.2rem;
  font-weight: 600;
}
.modal_overlay {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.48);
  z-index: 1400;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal_top {
  align-items: center;
  justify-content: space-between;
}
.modal_top button {
  height: 2rem;
  width: 2rem;
}
.modal_body {
  margin-bottom: 2.4rem;
}
.modal_body--top {
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
.modal_input {
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  border-radius: 0.2rem;
  box-sizing: border-box;
}
.modal_invite_btn {
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

.modal_invite_btn:hover {
  background: #1e2733;
}
.modal_invite_btn:active {
  background: #161c24;
}
.modal_slack_btn {
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

.modal_slack_btn:hover {
  background: #f7f7f7;
}
.modal_slack_btn:active {
  background: #e9e9e9;
}
.modal_slack_btn img {
  width: 1rem;
  margin-right: 1rem;
}
button {
  outline: none;
  cursor: pointer;
}

.xyz-animate {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-direction: column;
}
@media (prefers-reduced-motion) {
  .xyz-appear,
  .xyz-appear .xyz-nested,
  .xyz-appear .xyz-appear-nested,
  .xyz-out,
  .xyz-out .xyz-nested,
  .xyz-out .xyz-out-nested,
  .xyz-in,
  .xyz-in .xyz-nested,
  .xyz-in .xyz-in-nested {
    animation: none !important;
  }
}
</style>
