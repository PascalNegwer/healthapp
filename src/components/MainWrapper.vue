<template>
    <main class="l_main">
        <router-view v-bind:user="user"></router-view>
        <main-nav></main-nav>
        <logout v-bind:user="user"></logout>
    </main>
</template>

<script>
  import MainNav from './main/MainNav.vue'
  import Home from './main/Home.vue'
  import Logout from './main/Logout.vue';

  export default {
    name: 'mainWrapper',
    components: {Logout, MainNav, Home},
    props: ['user'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>

</style>