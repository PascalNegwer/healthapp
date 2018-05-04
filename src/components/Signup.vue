<template>
  <transition name="no-mode-translate">
    <div class="l_flex l_wrapper">

      <div class="loader" v-bind:class="{'loader--active': loading}">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </div>

      <img src="assets/img/logo.svg" class="logo u_center l_grow">

      <div class="l_flex content l_grow" v-bind:class="{'content--hidden': loading}">
        <form class="l_flex l_grow" v-on:submit.prevent="save">
          <input class="inp inp--18" v-model="$user.data.userName" type="email" placeholder="E-Mail-Adresse" required>
          <input class="inp inp--18" v-model="$user.data.password" type="password" placeholder="Passwort" required>
          <input class="inp inp--18" v-model="confirmPassword" type="password" placeholder="Passwort wiederholen"
                 required>
          <button class="btn btn--18 u_center" type="submit">Registrieren</button>
        </form>

        <div class="link-container l_flex l_grow">
          <router-link to="/login" class="link u_center">Schon registriert?</router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import router from '../utils/router.js'
  import validate from '../utils/validate.js'
  import * as messageTypes from './../classes/MessageTypes'

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--mixed';
    },
    name: 'signup',
    data() {
      return {
        confirmPassword: '',
        loading: false
      }
    },
    beforeMount: function () {
      this.loading = false;
    },
    methods: {
      save() {
        this.loading = true;
        EventBus.$emit('clearFlashMessages');

        if (!validate.email(this.$user.getUserName())) {
          EventBus.$emit('newMessage', {message: 'Bitte gib eine gültige E-Mail-Adresse ein.', type: messageTypes.WARNING});
          this.loading = false;
          return;
        }

        if (this.confirmPassword !== this.$user.getPassword()) {
          EventBus.$emit('newMessage', {message: 'Die eingegebenen Passwörter stimmen nicht überein.', type: messageTypes.WARNING});
          this.loading = false;
          return;
        }

        Apiomat.Datastore.configureWithCredentials(this.$user);

        this.$user.save({
          onOk: result => {
            router.push('/');

            setTimeout(function () {
              EventBus.$emit('newMessage', {message: 'Dein Account wurde erfolgreich registriert', type: messageTypes.WARNING});
            }, 1000);
          },
          onError: error => {
            switch (error.statusCode) {
              case 0:
              case 615:
                EventBus.$emit('newMessage', {message: 'Oops! Scheint als hättest du keine Internetverbindung.', type: messageTypes.WARNING});
                break;
              case 830:
                EventBus.$emit('newMessage', {message: 'Es existiert schon ein Account mit dieser E-Mail-Adresse.', type: messageTypes.WARNING});
                break;
              default:
                console.log(error);
            }
            EventBus.$emit('newMessage', this.error);
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
  }

  .btn {
    min-width: 65%;
    margin-top: auto;
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
    transition: opacity .15s ease-in-out;
  }

  .link-container {
    justify-content: flex-end;
  }

  .link:active {
    opacity: .5;
  }

  .content {
    justify-content: center;
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