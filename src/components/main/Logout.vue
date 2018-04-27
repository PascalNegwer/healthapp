<template>
    <button v-on:click="logout">Logout</button>
</template>

<script>
  import { EventBus } from '../../utils/eventBus.js';

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