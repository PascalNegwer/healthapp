<template>
    <button v-on:click="logout">Logout</button>
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