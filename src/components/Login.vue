<template>
    <div>
        <h1>login</h1>
        <div v-if="loading">
            <h1>Loading</h1>
        </div>
        <div v-else>
            <div v-if="error.message">
                {{ error.statusCode }}: {{ error.message }}
            </div>
            <form v-on:submit.prevent="login">
                <input v-model="user.data.userName" placeholder="E-Mail-Adresse">
                <input v-model="user.data.password" placeholder="Passwort">
                <button type="submit">Einloggen</button>
            </form>
            Noch kein Account? <router-link to="/signup">Hier registrieren!</router-link>
        </div>
    </div>
</template>

<script>
  import router from '../utils/router.js'
  import validate from '../utils/validate.js'

  export default {
        name: 'login',
        props: ['user'],
        data() {
            return {
              loading: false,
              error: new Error(),
            }
        },
        methods: {
          login() {
            this.loading = true;

            if (!validate.email(this.user.getUserName())) {
              this.error.code = 0;
              this.error.message = 'Keine Valide Email-Adresse';
              this.loading = false;
              return;
            }

            Apiomat.Datastore.configureWithCredentials(this.user);

            this.user.loadMe({
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