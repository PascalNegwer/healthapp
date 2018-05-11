<template>
  <span class="nav__link" v-on:click="logout">
    <div class="nav__icon u_icon--logout"></div>
    <p class="nav__text">Logout</p>
  </span>
</template>

<script>
  export default {
    name: "logout",
    methods: {
      logout() {
        EventBus.$emit('alert', {
          headline:'Ausloggen?',
          text:'Möchtest du dich wirklich ausloggen?',
          onOk: function () {
            EventBus.$emit('loggedOut');
          }
        });
      }
    }
  }
</script>

<style>
</style>