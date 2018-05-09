<template>
  <transition name="t_no-mode-translate">
    <router-view></router-view>
  </transition>
</template>

<script>
  import Home from './main/Home.vue';
  import Dashboard from './main/Dashboard.vue';
  import FunctionsWrapper from './main/Functions/FunctionsWrapper.vue';
  import Account from './main/Account.vue';
  import Help from './main/Help.vue';
  import Lawstuff from './main/Lawstuff.vue';

  export default {
    name: 'mainWrapper',
    components: {Home, Dashboard, FunctionsWrapper, Account, Help, Lawstuff},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>