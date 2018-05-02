<template>
    <transition name="no-mode-translate-fade">
      <router-view v-bind:user="user"></router-view>
    </transition>
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

  .no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
    transition: all .3s;
    position: absolute;
    left: 2rem;
    width: calc(100% - 4rem);
    backface-visibility: hidden;
  }
  .no-mode-translate-fade-enter {
    transform: translateX(120%);
  }
  .no-mode-translate-fade-leave-active {
    transform: translateX(-120%);
  }
</style>