<template>
  <router-view v-bind:user="user"></router-view>
</template>

<script>
  import Home from './main/Home.vue';
  import Dashboard from './main/Dashboard.vue';
  import Functions from './main/Functions.vue';
  import Account from './main/Account.vue';
  import Help from './main/Help.vue';
  import Lawstuff from './main/Lawstuff.vue';

  export default {
    name: 'mainWrapper',
    components: {Home, Dashboard, Functions, Account, Help, Lawstuff},
    props: ['user'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

  
</style>