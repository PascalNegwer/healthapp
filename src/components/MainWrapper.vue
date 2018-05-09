<template>
  <transition name="t_no-mode-translate">
    <router-view></router-view>
  </transition>
</template>

<script>
  import Home from './main/Home.vue';
  import Dashboard from './main/Dashboard.vue';
  import Functions from './main/Functions.vue';
  import Account from './main/Account.vue';
  import Help from './main/Help.vue';
  import Lawstuff from './main/Lawstuff.vue';
  import Workout from './main/Workout.vue';
  import Augenuebungen from './main/Augenuebungen.vue';
  import Ergonomie from './main/Ergonomie.vue';

  export default {
    name: 'mainWrapper',
    components: {Home, Dashboard, Functions, Account, Help, Lawstuff, Workout, Augenuebungen, Ergonomie},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>