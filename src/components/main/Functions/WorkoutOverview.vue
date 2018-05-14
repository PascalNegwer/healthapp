<template>
  <div class="l_wrapper l_wrapper--small l_flex">
    <h1 class="headline headline--main">Workout</h1>
    <div class="workout-types l_grow">
      <h3 class="workout-types__description">Wähle einen Bereich aus</h3>

      <router-link class="workout-types__item u_icon--leg" :to="{ name: 'workout-type', params: { type: 'legs' }}">
        <h1 class="workout-types__label">Beine</h1>
      </router-link>

      <router-link class="workout-types__item u_icon--arm" :to="{ name: 'workout-type', params: { type: 'arms' }}">
        <h1 class="workout-types__label">Arme</h1>
      </router-link>

      <router-link class="workout-types__item u_icon--spine" :to="{ name: 'workout-type', params: { type: 'neck' }}">
        <h1 class="workout-types__label">Nacken</h1>
      </router-link>

      <router-link class="workout-types__item u_icon--head" :to="{ name: 'workout-type', params: { type: 'head' }}">
        <h1 class="workout-types__label">Kopf</h1>
      </router-link>

      <router-link class="workout-types__item u_icon--human" :to="{ name: 'workout-type', params: { type: 'back' }}">
        <h1 class="workout-types__label">Rücken</h1>
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
  .workout-types {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .workout-types__description {
    flex-basis: 100%;
    text-align: center;
    font-size: 1.6rem;
    font-family: 'Comfortaa', sans-serif;
  }

  .workout-types__item {
    flex-basis: 33%;
    text-align: center;
    padding: 1rem;
    transition: opacity .15s ease-in-out;
  }
  .workout-types__item:active{
    opacity: .5;
  }
  .workout-types__item:before {
    font-size: 5.4rem;
  }
  .workout-types__label {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    padding-top: 1.2rem;
  }
</style>