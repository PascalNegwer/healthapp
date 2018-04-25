<template>
    <router-view :user="user"></router-view>
</template>

<script>
  import Login from './components/Login.vue';
  import Signup from './components/Signup.vue';

  export default {
    components: {Login, Signup},
    name: 'App',
    data() {
      return {
        user: new Apiomat.FrontendUser()
      }
    }
  }
</script>

<style>
</style>