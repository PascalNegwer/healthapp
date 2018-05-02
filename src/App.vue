<template>
  <main class="l_main" v-bind:class="{'l_main--scroll' :isMain()}">
    <div class="flash-messages-container">
      <transition name="slide-fade">
        <div v-for="(flashMessage, index) in flashMessages" class="flash-message"
             v-bind:class="['flash-message--' + flashMessage.type,  'u_icon--' + flashMessage.type]"
             v-on:click="unset(index)">
          <b class="flash-message__text">{{ flashMessage.message }}</b>
        </div>
      </transition>
    </div>
    <router-view v-bind:user="user"></router-view>
  </main>
</template>

<script>
  import cookie from './utils/cookie.js'
  import router from './utils/router.js'

  export default {
    name: 'App',
    data() {
      return {
        user: new Apiomat.FrontendUser(),
        flashMessages: []
      }
    },
    methods: {
      unset(index) {
        this.flashMessages.splice(index, 1);
      },
      isMain() {
        return (this.$route.name !== 'signup' && this.$route.name !== 'login');
      }
    },
    mounted: function () {

      let self = this;

      EventBus.$on('loggedOut', function () {
        cookie.expireNow('sessionToken');
        localStorage.clear();
        router.push('/login');
        self.user = new Apiomat.FrontendUser();
      });

      EventBus.$on('error', function (error) {
        self.flashMessages.push(error);

        setTimeout(function () {
          let index = self.flashMessages.indexOf(error);
          self.unset(index);
        }.bind(self), 2000)
      });

      EventBus.$on('clearFlashMessages', function () {
        self.flashMessages = [];
      });
    }
  }
</script>

<style scoped>
  .flash-messages-container {
    z-index: 100;
    padding: 2rem 6rem;
    position: fixed;
    display: flex;
    flex-direction: column;
  }

  .flash-message {
    align-items: center;
    display: flex;
    font-family: 'Comfortaa', sans-serif;
    background: var(--white);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    border: var(--white) 1px solid;
    padding: 2rem 1.5rem;
  }

  .flash-message__text {
    padding-left: 10px;
    flex-shrink: 1;
  }

  .flash-message:before {
    font-weight: 800;
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

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-leave-active {
    transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(40px);
    opacity: 0;
  }
</style>