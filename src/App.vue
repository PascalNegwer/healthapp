<template>
  <body>
    <main class="l_main" v-bind:class="{'l_main--w-nav' :isMain()}">
      <div class="flash-messages-container">
        <transition name="t_slide-fade">
          <div v-for="(flashMessage, index) in flashMessages" class="flash-message"
               v-bind:class="['flash-message--' + flashMessage.type,  'u_icon--' + flashMessage.type]"
               v-on:click="unset(index)">
            <p class="flash-message__text">{{ flashMessage.message }}</p>
          </div>
        </transition>
      </div>
      <transition name="t_fade">
        <div v-if="alert" class="alert-container">
          <div class="alert">
            <h2 class="alert__headline">{{ alert.headline }}</h2>
            <p class="alert__text">{{ alert.text }}</p>
            <button v-on:click="alert.onOk(); resetState()" class="btn btn--18 u_center alert__btn alert__btn--ok">
              Ja
            </button>
            <button v-on:click="resetState()" class="btn btn--18 u_center alert__btn alert__btn--chancel">
              Abbrechen
            </button>
          </div>
        </div>
      </transition>
      <router-view></router-view>
    </main>
    <transition name="t_fade">
      <main-nav v-if="isMain() && !hideNav"></main-nav>
    </transition>
  </body>
</template>

<script>
  import MainNav from './components/main/MainNav.vue';
  import cookie from './utils/cookie.js'
  import router from './utils/router.js'

  export default {
    name: 'App',
    components: {MainNav},
    data() {
      return {
        flashMessages: [],
        alert: undefined,
        hideNav: false,
      }
    },
    methods: {
      unset(index) {
        this.flashMessages.splice(index, 1);
      },
      isMain() {
        return (this.$route.name !== 'signup' && this.$route.name !== 'login');
      },
      resetState() {
        this.alert = undefined;
        this.hideNav = false
      }
    },
    mounted: function () {

      let self = this;

      EventBus.$on('loggedOut', function () {
        cookie.expireNow('sessionToken');
        localStorage.clear();
        router.push('/login');
      });

      EventBus.$on('newMessage', function (message) {
        self.flashMessages.push(message);

        setTimeout(function () {
          let index = self.flashMessages.indexOf(message);
          self.unset(index);
        }.bind(self), 2000)
      });

      EventBus.$on('clearFlashMessages', function () {
        self.flashMessages = [];
      });

      EventBus.$on('alert', function (alert) {
        self.hideNav = true;
        self.alert = alert;
      });
    }
  }
</script>

<style scoped>
  .alert-container {
    background: var(--white-25);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1100;
    width: 100%;
    height: 98%;
    padding: 8rem 2rem;
    position: fixed;
  }

  .alert {
    background: var(--white-90);
    border: var(--white) 1px solid;
    #font-family: 'Comfortaa', sans-serif;
    color: var(--darkgrey);
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 100%;
  }

  .alert * {
    margin-bottom: 20px;
  }

  .alert__headline {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .alert__text {
    text-align: center;
    font-size: 2rem;
  }

  .alert__btn {
    width: 90%;
  }

  .alert__btn--ok {
    background-color: var(--success-50);
  }

  .alert__btn--chancel {
    background-color: var(--error-50);
  }

  .flash-messages-container {
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    width: 100%;
    padding: 0 3rem;
    position: fixed;
    display: flex;
    flex-direction: column;
  }

  .flash-message {
    align-items: center;
    display: flex;
    font-family: 'Comfortaa', sans-serif;
    background: var(--white);
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    border: var(--white) 1px solid;
    padding: 2rem 1.5rem;
  }

  .flash-message__text {
    padding-left: 1.5rem;
    flex-shrink: 1;
  }

  .flash-message:before {
    font-size: 4rem;
  }

  .flash-message--warning {
    border-color: var(--warning);
    color: var(--warning);
  }

  .flash-message--success {
    border-color: var(--success);
    color: var(--success);
  }

  .flash-message--error {
    border-color: var(--error);
    color: var(--error);
  }
</style>