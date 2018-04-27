<template>
  <nav class="nav l_flex l_flex--horizontal">
    <router-link class="nav__item" to="/">Home</router-link>
    <router-link class="nav__item" to="#">Link1</router-link>
    <router-link class="nav__item" to="#">Link2</router-link>
    <router-link class="nav__item" to="#">Link3</router-link>
  </nav>
</template>

<script>
    export default {
        name: "mainNav"
    }
</script>

<style scoped>
  .nav {
    width: 100%;
    color: var(--grey);
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: space-between;
  }
  .nav__item {
    display: block;
    text-align: center;
    padding: 2rem;
  }
</style>