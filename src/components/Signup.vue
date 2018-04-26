<template>
    <div>
        <h1>signup</h1>
        <div v-if="loading">
            <h1>Loading</h1>
        </div>
        <div v-else>
            <div v-if="error.message">
                {{ error.statusCode }}: {{ error.message }}
            </div>
            <form v-on:submit.prevent="save">
                <input v-model="user.data.userName" placeholder="E-Mail-Adresse">
                <input v-model="user.data.password" type="password" placeholder="Passwort">
                <input v-model="confirmPassword" type="password" placeholder="Passwort wiederholen">
                <button type="submit">Registrieren</button>
            </form>
            Schon registriert? <router-link to="/login">Hier einloggen!</router-link>
        </div>
    </div>
</template>

<script>
  import router from '../utils/router.js'
  import validate from '../utils/validate.js'

  export default {
    name: 'signup',
    props: ['user'],
    data() {
      return {
        confirmPassword: '',
        error: new Error(),
        loading: false
      }
    },
    methods: {
      save() {
        this.loading = true;
        let errorMessage = '';

        if (!validate.email(this.user.getUserName())) {
          errorMessage = 'Keine Valide Email-Adresse';
        }

        if (this.confirmPassword !== this.user.getPassword()) {
          errorMessage = 'Passwörter stimmen nicht überein';
        }

        if (errorMessage) {
          this.error.message = errorMessage;
          this.loading = false;
          return;
        }

        Apiomat.Datastore.configureWithCredentials(this.user);

        this.user.save({
          onOk: result => {
            this.error = new Error();
            router.push('/');
          },
          onError: error => {
            this.error = error;
            this.loading = false;
          }
        });
      }
    }
  }
</script>

<style>
</style>