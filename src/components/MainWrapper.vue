<template>
    <main class="l_main l_main--scroll">
      <router-view v-bind:user="user"></router-view>
      <main-nav></main-nav>
    </main>
</template>

<script>
  import MainNav from './main/MainNav.vue';
  import Home from './main/Home.vue';

  export default {
    name: 'mainWrapper',
    components: {MainNav, Home},
    props: ['user'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  
</style>