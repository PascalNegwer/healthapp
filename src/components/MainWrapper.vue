<template>
    <div>
        <router-view></router-view>
        <main-nav></main-nav>
    </div>
</template>

<script>
  import MainNav from './main/MainNav.vue'
  import Home from './main/Home.vue'

  export default {
    name: 'mainWrapper',
    components: {MainNav, Home},
    props: [],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>

</style>