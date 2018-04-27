<template>
    <div class="l_flex l_flex--vertical l_container l_wrapper">
        <img src="assets/img/logo.svg" class="logo u_center">
        <div v-if="loading">
            <h1>Loading</h1>
        </div>
        <div v-else>
            <div v-if="error.message">
                {{ error.statusCode }}: {{ error.message }}
            </div>
            <form class="l_flex l_flex--vertical" v-on:submit.prevent="login">
                <input class="inp inp--18" v-model="user.data.userName" type="email" placeholder="E-Mail-Adresse" required>
                <input class="inp inp--18" v-model="user.data.password" type="password" placeholder="Passwort" required>
                <button class="btn btn--18 u_center" type="submit">Login</button>
            </form>
            Noch kein Account? <router-link to="/signup">Hier registrieren!</router-link>
        </div>
    </div>
</template>

<script>
  import router from '../utils/router.js'
  import validate from '../utils/validate.js'
  import cookie from '../utils/cookie.js'

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

            cookie.expireNow('sessionToken');
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
  .logo {
    width: 40%;
  }
  .btn {
    width: 65%;
  }
  .inp {
    margin: 2rem 0;
  }
</style>