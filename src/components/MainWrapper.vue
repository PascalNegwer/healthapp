<template>
    <main class="l_main l_main--scroll">
      <router-view v-bind:user="user"></router-view>
      <main-nav></main-nav>
    </main>
</template>

<script>
  import MainNav from './main/MainNav.vue';
  import Home from './main/Home.vue';
  import Dashboard from './main/Dashboard.vue';
  import Functions from './main/Functions.vue';
  import Account from './main/Account.vue';
  import Help from './main/Help.vue';
  import Lawstuff from './main/Lawstuff.vue';

  export default {
    name: 'mainWrapper',
    components: {MainNav, Home, Dashboard, Functions, Account, Help, Lawstuff},
    props: ['user'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  
</style>