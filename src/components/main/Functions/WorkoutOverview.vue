<template>
  <div class="workout-container">
    <h1 class="headline headline--main">Workout</h1>
    <div class="workout-types">
      <h3 class="workout-types__description">Wähle einen Bereich aus</h3>

      <router-link class="workout-types__item" :to="{ name: 'workout-type', params: { type: 'legs' }}">
        <h1>Beine</h1>
      </router-link>

      <router-link class="workout-types__item" :to="{ name: 'workout-type', params: { type: 'arms' }}">
        <h1>Arme</h1>
      </router-link>

      <router-link class="workout-types__item" :to="{ name: 'workout-type', params: { type: 'neck' }}">
        <h1>Nacken</h1>
      </router-link>

      <router-link class="workout-types__item" :to="{ name: 'workout-type', params: { type: 'head' }}">
        <h1>Kopf</h1>
      </router-link>

      <router-link class="workout-types__item" :to="{ name: 'workout-type', params: { type: 'back' }}">
        <h1>Rücken</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    name: 'workouts',
    props: [],
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped>
  .workout-container {
    height: 100%;
  }

  .workout-types {
    height: 100%;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .workout-types__description {
    flex-basis: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Comfortaa', sans-serif;
  }

  .workout-types__item {
    flex-basis: 33%;
    text-align: center;
    padding: 1rem;
  }
</style>