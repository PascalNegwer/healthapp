<template>
  <div class="l_wrapper l_flex">
    <nav class="l_flex navtab-container">
      <router-link class="navtab u_icon--gym" :to="{ name: 'workouts'}">
        <p class="navtab__label">Workout</p>
      </router-link>
      <router-link class="navtab u_icon--eye" :to="{ name: 'eye-exercises'}">
        <p class="navtab__label">Augenübungen</p>
      </router-link>
      <router-link class="navtab u_icon--chair" :to="{ name: 'ergonomics'}">
        <p class="navtab__label">Ergonomie</p>
      </router-link>
    </nav>
  </div>
</template>

<script>
  import * as messageTypes from '../../../classes/MessageTypes';

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    name: 'functions',
    props: [],
    data() {
      return {
      }
    },
    methods: {
      setIconHeight: function() {
        let tab = document.getElementsByClassName('navtab');

        let height = tab[0].offsetHeight;
        let maxHeight = 75;
        let iconHeight = height - 62;
        iconHeight = (iconHeight > maxHeight) ? maxHeight : iconHeight;

        for (let i = 0; i < tab.length; i++) {
          tab[i].style.fontSize = iconHeight + 'px'; 
        }
      }
    },
    mounted: function() {
      this.setIconHeight();
    }
  }
</script>

<style scoped>

  .navtab-container {
    justify-content: space-between;
    height: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .navtab {
    background: var(--white-25);
    flex-grow: 1;
    border-radius: .8rem;
    max-height: 28%;
    transition: background .15s ease-in-out;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
  }
  .navtab:active {
    background: var(--white);
  }

  .navtab:before {
    font-size: inherit;
    text-align: center;
  }

  .navtab__label {
    color: var(--white);
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 300;
    font-family: 'Comfortaa', sans-serif;
    text-align: center;
    margin-top: .8rem;
  }
</style>