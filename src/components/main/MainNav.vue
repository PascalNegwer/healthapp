<template>
  <nav class="nav l_flex l_flex--horizontal">
    <span class="nav__item">
      <router-link class="nav__link" to="/" v-on:click.native="toggleDropdown(true)">
        <img class="nav__icon" src="assets/img/home.svg">
        <p class="nav__text">Home</p>
      </router-link>
    </span>
    <span class="nav__item">
      <router-link class="nav__link" to="#" v-on:click.native="toggleDropdown(true)">
        <img class="nav__icon" src="assets/img/dashboard.svg">
        <p class="nav__text">Dashboard</p>
      </router-link>
    </span>
    <span class="nav__item">
      <router-link class="nav__link" to="#" v-on:click.native="toggleDropdown(true)">
        <img class="nav__icon" src="assets/img/list.svg">
        <p class="nav__text">Funktionen</p>
      </router-link>
    </span>
    <span class="nav__item" v-bind:class="{'nav__item--active': open}">
      <div class="nav__link" v-on:click="toggleDropdown(open)">
        <img class="nav__icon" src="assets/img/settings.svg">
        <p class="nav__text">Settings</p>
      </div>
      <nav class="nav nav--dropdown l_flex" v-bind:class="{'nav--visible': open}">
        <span class="nav__item nav__item--dropdown">
          <router-link class="nav__link" to="/">
            <img class="nav__icon" src="assets/img/home.svg">
            <p class="nav__text">Home</p>
          </router-link>
        </span>
        <span class="nav__item nav__item--dropdown">
          <router-link class="nav__link" to="#">
            <img class="nav__icon" src="assets/img/dashboard.svg">
            <p class="nav__text">Dashboard</p>
          </router-link>
        </span>
        <span class="nav__item nav__item--dropdown">
          <router-link class="nav__link" to="#">
            <img class="nav__icon" src="assets/img/list.svg">
            <p class="nav__text">Funktionen</p>
          </router-link>
        </span>
      </nav>
    </span>
  </nav>
</template>

<script>
  export default {
    name: "mainNav",
    data() {
      return {
        open: false,
      }
    },
    methods: {
      toggleDropdown(state) {
        if(state) {
          this.open = false;
        } else {
          this.open = true;
        }
      }
    }
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
  .nav--dropdown {
    position: absolute;
    bottom: 100%;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s ease-in-out, visibility .15s .15s;
  }
  .nav--visible {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s ease-in-out, visibility;
  }
  .nav__item {
    width: 25%;
    display: block;
    text-align: center;
    transition: background .15s ease-in-out;
    position: relative;
  }
  .nav__item:active, .nav__item--active {
    background: var(--white-50);
  }
  .nav__item--dropdown {
    width: 100%;
    background: var(--white-50);
    margin-bottom: .2rem;
  }
  .nav__item--dropdown:active {
    background: var(--white);
  }
  .nav__icon {
    padding: 2rem 3rem 1rem 3rem;
    width: 100%;
    height: auto;
    flex-shrink: 0;
  }
  .nav__text {
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 2rem;
  }
</style>