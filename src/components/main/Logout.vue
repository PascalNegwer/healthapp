<template>
  <span class="nav__link" v-on:click="logout">
    <img class="nav__icon" src="assets/img/logout.svg">
    <p class="nav__text">Logout</p>
  </span>
</template>

<script>
  export default {
    name: "logout",
    props: ['user'],
    methods: {
      logout() {
        EventBus.$emit('loggedOut');
      }
    }
  }
</script>

<style>
</style>