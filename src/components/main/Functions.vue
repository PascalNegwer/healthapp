<template>
    <div class="l_wrapper l_flex">
      <nav class="l_flex navtab-container">
        <router-link class="navtab u_icon--gym" to="/workout">
          <p class="navtab__label">Workout</p>
        </router-link>
        <router-link class="navtab u_icon--eye" to="/augenuebungen">
          <p class="navtab__label">Augenübungen</p>
        </router-link>
        <router-link class="navtab u_icon--chair" to="/ergonomie">
          <p class="navtab__label">Ergonomie</p>
        </router-link>
      </nav>
    </div>
</template>

<script>
  export default {
    beforeCreate: function() {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    name: 'functions',
    props: [],
    data() {
      return {
      }
    },
    methods: {
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
    font-size: 10vh;
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