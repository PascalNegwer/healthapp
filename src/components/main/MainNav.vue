<template>
  <nav class="nav l_flex l_flex--horizontal">

    <span class="nav__item">
      <router-link class="nav__link" to="/" v-on:click.native="toggleDropdown(true)">
        <div class="nav__icon u_icon--home"></div>
        <p class="nav__text">Home</p>
      </router-link>
    </span>

    <span class="nav__item">
      <router-link class="nav__link" to="/dashboard" v-on:click.native="toggleDropdown(true)">
        <div class="nav__icon u_icon--dashboard"></div>
        <p class="nav__text">Dashboard</p>
      </router-link>
    </span>

    <span class="nav__item">
      <router-link class="nav__link" to="/functions" v-on:click.native="toggleDropdown(true)">
        <div class="nav__icon u_icon--list"></div>
        <p class="nav__text">Funktionen</p>
      </router-link>
    </span>

    <span class="nav__item" v-bind:class="{'nav__item--active': open}">
      <div class="nav__link" v-on:click="toggleDropdown(open)">
        <div class="nav__icon" v-bind:class="[open ? 'u_icon--close' : 'u_icon--menu']"></div>
        <p class="nav__text">Settings</p>
      </div>

      <nav class="nav nav--dropdown l_flex" v-bind:class="[{'nav--visible': open}, bg]">

        <span class="nav__item nav__item--dropdown">
          <router-link class="nav__link" to="/lawstuff" v-on:click.native="toggleDropdown(open)">
            <div class="nav__icon u_icon--text"></div>
            <p class="nav__text">Rechtliches</p>
          </router-link>
        </span>

        <span class="nav__item nav__item--dropdown">
          <router-link class="nav__link" to="/help" v-on:click.native="toggleDropdown(open)">
            <div class="nav__icon u_icon--info"></div>
            <p class="nav__text">Hilfe</p>
          </router-link>
        </span>

        <span class="nav__item nav__item--dropdown">
          <router-link class="nav__link" to="/account" v-on:click.native="toggleDropdown(open)">
            <div class="nav__icon u_icon--user"></div>
            <p class="nav__text">Account</p>
          </router-link>
        </span>

        <span class="nav__item nav__item--dropdown">
          <logout></logout>
        </span>

      </nav>
    </span>
  </nav>
</template>

<script>
  import Logout from './Logout.vue';

  export default {
    updated: function() {
      this.bg = document.documentElement.className;
      console.log(this.bg);
    },
    name: "mainNav",
    components: {
      Logout,
    },
    data() {
      return {
        open: false,
        bg: '',
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

<style>
  .nav {
    width: 100%;
    color: var(--grey);
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    flex-wrap: nowrap;
    z-index: 1000;
  }
  .nav--dropdown {
    position: absolute;
    bottom: 100%;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s ease-in-out, visibility .15s .15s;
    clip: rect(0, auto, auto, 0);
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
    display: block;
    width: 100%;
    background: var(--white-50);
    margin-bottom: .2rem;
    position: relative;
  }
  .nav__item--dropdown:active {
    background: var(--white);
  }
  .nav__link {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .nav__icon {
    padding: 2rem 0 1rem 0;
    font-size: 3.2rem;
    color: #5f5f5f;
  }
  .nav__icon:before {
    transition: color .3s ease-in-out;
  }
  .nav__text {
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 2rem;
    transition: color .3s ease-in-out;
  }

  .u_gradient-background--default .nav__icon, .u_gradient-background--mixed .nav__icon {
    color: var(--lightgrey);
  }
  .u_gradient-background--default .nav__text, .u_gradient-background--mixed .nav__text {
    color: var(--lightgrey);
  }
</style>