<template>
  <div class="l_wrapper l_wrapper--small">
    <h1 class="headline headline--main">Account</h1>
    <section class="l_section">
      <h2 class="headline">Accountdaten</h2>
      <form class="l_flex" v-on:submit.prevent="save">
        <p class="label">Name</p>
        <input class="inp" v-model="$user.data.lastName" placeholder="Name">
        <p class="label">Vorname</p>
        <input class="inp" v-model="$user.data.firstName" placeholder="Vorname">
        <p class="label">E-Mail</p>
        <input class="inp" v-model="$user.data.userName" type="email" placeholder="E-Mail-Adresse" readonly>
        <button class="btn" type="submit">Speichern</button>
      </form>
    </section>
    <span class="l_divider"></span>
    <section class="l_section">
      <h2 class="headline">Passwort ändern</h2>
      <form class="l_flex" v-on:submit.prevent="changePassword">
        <p class="label">Altes Passwort</p>
        <input class="inp" placeholder="Altes Passwort" v-model="$user.data.password" type="password" required>
        <p class="label">Neues Passwort</p>
        <input class="inp" placeholder="Neues Passwort" v-model="newPassword" type="password" required>
        <p class="label">Neues Passwort wiederholen</p>
        <input class="inp" placeholder="Passwort wiederholen" type="password" v-model="confirmPassword" required>
        <button class="btn" type="submit">Passwort ändern</button>
      </form>
    </section>
    <span class="l_divider"></span>
    <section class="l_section">
      <form class="l_flex" v-on:submit.prevent="deleteAllFromStorage">
        <button class="btn" type="submit">Account löschen</button>
      </form>
    </section>
  </div>
</template>

<script>
  import * as messageTypes from '../../classes/MessageTypes'
  import router from '../../utils/router.js'

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--mixed';
    },
    name: 'account',
    props: [],
    data() {
      return {
        confirmPassword: '',
        newPassword: '',
      }
    },
    methods: {
      save: function () {
        this.$user.save({
          onOk: result => {
            EventBus.$emit('newMessage', {message: 'Deine Accountdaten wurden erfolgreich geändert', type: messageTypes.SUCCESS});
          },
          onError: error => {
            switch (error.statusCode) {
              case 0:
              case 615:
                EventBus.$emit('newMessage', {message: 'Oops! Scheint als hättest du keine Internetverbindung.', type: messageTypes.WARNING});
                break;
              default:
                console.log(error);
                EventBus.$emit('newMessage', {message: 'Oops! Unbekannter Fehler.', type: messageTypes.ERROR});
            }
          },
        });
      },
      changePassword: function () {
        if (!navigator.onLine) {
          EventBus.$emit('newMessage', {message: 'Oops! Scheint als hättest du keine Internetverbindung.', type: messageTypes.ERROR});
          return;
        }
        if (this.confirmPassword !== this.newPassword) {
          EventBus.$emit('newMessage', {message: 'Die eingegebenen Passwörter stimmen nicht überein.', type: messageTypes.WARNING});
          return;
        }

        Apiomat.Datastore.configureWithCredentials(this.$user);

        this.$user.changePassword(this.newPassword, {

          onOk: result => {
            EventBus.$emit('newMessage', {message: 'Dein Passwort wurde geändert', type: messageTypes.SUCCESS});
          },
          onError: error => {
            switch (error.statusCode) {
              case 840:
                console.log(error);
                EventBus.$emit('newMessage', {message: 'Dein altes Passwort ist inkorrekt.', type: messageTypes.WARNING});
                break;
              default:
                console.log(error);
                EventBus.$emit('newMessage', {message: 'Oops! Unbekannter Fehler.', type: messageTypes.ERROR});
            }
          }
        });
      },

      deleteAllFromStorage: function () {

        if (!navigator.onLine) {
          EventBus.$emit('newMessage', {message: 'Oops! Scheint als hättest du keine Internetverbindung.', type: messageTypes.ERROR});
          return;
        }

        this.$user.deleteModel ({
          onOk: result => {
            console.log(result);
            console.log('gelöscht');
            router.push('/login');
          },
          onError: error => {
            switch (error.statusCode) {
              default:
                console.log(error);
                EventBus.$emit('newMessage', {message: 'Oops! Unbekannter Fehler.', type: messageTypes.ERROR});
            }
          }
        });

      },

    }
  }
</script>


<style scoped>
  .btn {
    margin-top: 2.4rem;
    margin-left: auto;
  }

  .inp {
    margin: 1rem 0 2rem 0;
  }

  .label {
    font-weight: 300;
    color: var(--lightgrey);
    font-size: 1.4rem;
  }
</style>