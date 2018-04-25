<template>
    <div>
        <h1>signup</h1>
        <div v-if="loading">
            <h1>Loading</h1>
        </div>
        <div v-else>
            <div v-if="error">
                {{ error.statusCode }}: {{ error.message }}
            </div>
            <form v-on:submit.prevent="save">
                <input v-model="user.data.userName" placeholder="E-Mail-Adresse">
                <input v-model="user.data.password" placeholder="Passwort">
                <input v-model="confirmPassword" placeholder="Passwort wiederholen">
                <button type="submit">Registrieren</button>
            </form>
            Schon registriert? <router-link to="/login">Hier einloggen!</router-link>
        </div>
    </div>
</template>

<script>
  import router from '../router'

  export default {
    name: 'signup',
    props: ['user'],
    data() {
      return {
        confirmPassword: '',
        error: undefined,
        loading: false
      }
    },
    methods: {
      save() {
        this.loading = true;

        Apiomat.Datastore.configureWithCredentials(this.user);

        this.user.save({
          onOk: result => {
            router.push('/');
            this.loading = false;
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