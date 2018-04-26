<template>
  <div class="l_flex l_container l_wrapper">
    <img src="assets/img/logo.svg" class="logo u_center">
    <div v-if="loading">
      <h1>Loading</h1>
    </div>
    <div class="l_flex" v-else>
      <div v-if="error.message">
        {{ error.statusCode }}: {{ error.message }}
      </div>
      <form class="l_flex" v-on:submit.prevent="login">
        <input class="inp inp--18" v-model="user.data.userName" type="email" placeholder="E-Mail-Adresse" required>
        <input class="inp inp--18" v-model="user.data.password" type="password" placeholder="Passwort" required>
        <button class="btn btn--18 u_center" type="submit">Login</button>
      </form>
      <router-link to="/signup" class="link u_center">Noch kein Account?</router-link>
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
  .logo {
    width: 40%;
    margin-bottom: 20vw;
  }
  .btn {
    width: 65%;
    margin-top: 20vw;
    margin-bottom: 20vw;
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
</style>