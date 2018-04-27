<template>
    <router-view v-bind:user="user"></router-view>
</template>

<script>
  import cookie from './utils/cookie.js'
  import router from './utils/router.js'
  import { EventBus } from './utils/eventBus.js';

  export default {
    name: 'App',
    data() {
      return {
        user: new Apiomat.FrontendUser()
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
    }
  }
</script>

<style>
</style>