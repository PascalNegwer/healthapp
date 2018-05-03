<template>
  <main class="l_main" v-bind:class="{'l_main--scroll' :isMain()}">
    <div class="flash-messages-container">
      <transition name="slide-fade">
        <div v-for="(flashMessage, index) in flashMessages" class="flash-message"
             v-bind:class="['flash-message--' + flashMessage.type,  'u_icon--' + flashMessage.type]"
             v-on:click="unset(index)">
          <p class="flash-message__text">{{ flashMessage.message }}</p>
        </div>
      </transition>
    </div>
    <router-view></router-view>
    <main-nav v-if="isMain()"></main-nav>
  </main>
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
        self.$user = new Apiomat.FrontendUser();
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

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-leave-active {
    transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-40px);
    opacity: 0;
  }
</style>