<template>
  <nav class="nav l_flex l_flex--horizontal">
    <span class="nav__item">
      <router-link class="nav__link" to="/">
        <img class="nav__icon" src="assets/img/home.svg">
        <p class="nav__text">Home</p>
      </router-link>
    </span>
    <span class="nav__item">
      <router-link class="nav__link" to="#">
        <img class="nav__icon" src="assets/img/dashboard.svg">
        <p class="nav__text">Dashboard</p>
      </router-link>
    </span>
    <span class="nav__item">
      <router-link class="nav__link" to="#">
        <img class="nav__icon" src="assets/img/list.svg">
        <p class="nav__text">Funktionen</p>
      </router-link>
    </span>
    <span class="nav__item nav__item--dropdown">
      <div class="nav__link">
        <img class="nav__icon" src="assets/img/settings.svg">
        <p class="nav__text">Settings</p>
      </div>
    </span>
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
    flex-wrap: nowrap;
  }
  .nav__item {
    width: 25%;
    display: block;
    text-align: center;
    padding-bottom: 2rem;
    transition: background .15s ease-in-out;
  }
  .nav__item:active {
    background: var(--white-50);
  }
  .nav__icon {
    padding: 2rem 3rem 1rem 3rem;
    width: 100%;
    height: auto;
  }
  .nav__text {
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
  }
</style>