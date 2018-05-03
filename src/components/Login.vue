<template>
  <transition name="no-mode-translate">
    <div class="l_flex l_wrapper">

      <div class="loader" v-bind:class="{'loader--active': loading}">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </div>

      <img src="assets/img/logo.svg" class="logo u_center">

      <div class="l_flex content" v-bind:class="{'content--hidden': loading}">
        <form class="l_flex" v-on:submit.prevent="login">
          <input class="inp inp--18" v-model="$user.data.userName" type="email" placeholder="E-Mail-Adresse" required>
          <input class="inp inp--18" v-model="$user.data.password" type="password" placeholder="Passwort" required>
          <button class="btn btn--18 u_center" type="submit">Login</button>
        </form>

        <router-link to="/signup" class="link u_center">Noch kein Account?</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
  import router from '../utils/router.js'
  import validate from '../utils/validate.js'
  import cookie from '../utils/cookie.js'
  import * as errorTypes from './../classes/ErrorTypes';

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--mixed';
    },
    name: 'login',
    data() {
      return {
        loading: false,
        error: new Error(),
      }
    },
    beforeMount: function () {
      this.loading = false;
    },
    methods: {
      login() {
        this.loading = true;
        EventBus.$emit('clearFlashMessages');

        if (!validate.email(this.$user.getUserName())) {
          this.error.message = 'Bitte gib eine gültige E-Mail-Adresse ein.';
          this.error.type = errorTypes.WARNING;
          EventBus.$emit('error', this.error);
          this.loading = false;
          return;
        }

        cookie.expireNow('sessionToken');
        Apiomat.Datastore.configureWithCredentials(this.$user);

        this.$user.loadMe({
          onOk: result => {
            router.push('/');
          },
          onError: error => {
            switch (error.statusCode) {
              case 615:
                this.error.message = 'Oops! Scheint als hättest du keine Internetverbindung.';
                this.error.type = errorTypes.WARNING;
                break;
              case 840:
                this.error.message = 'Die eingegebene E-Mail-Adresse oder das Kennwort ist inkorrekt.';
                this.error.type = errorTypes.WARNING;
                break;
              default:
                console.log(error);
            }
            EventBus.$emit('error', this.error);
            this.loading = false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .logo {
    width: 40%;
    margin-bottom: 8vh;
  }

  .btn {
    width: 65%;
    margin-top: 8vh;
    margin-bottom: 8vh;
  }

  .inp {
    margin: 1rem 0;
  }

  .l_wrapper {
    justify-content: flex-start;
  }

  .link {
    font-size: 1.8rem;
    line-height: 2;
    transition: color .15s ease-in-out;
  }

  .link:active {
    opacity: .5;
  }

  .content {
    opacity: 1;
    transition: opacity .15s ease-in-out, visibility .15s ease-in-out .15s;
  }

  .content--hidden {
    opacity: 0;
    visibility: hidden;
  }

  .loader {
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    transition: opacity .15s ease-in-out;
  }

  .loader--active {
    visibility: visible;
    opacity: 1;
  }
</style>