<template>
  <div>
    <h1>Workout</h1>
    <img v-if="workout" :src="workout.getImage1URL()"/>
  </div>
</template>

<script>
  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    props: ['type', 'id'],
    data() {
      return {
        workout: undefined,
      }
    },
    methods: {},
    beforeMount: function () {
      for (let i = 0; i < window.$workouts.length; i++) {
        if (window.$workouts[i].getID() === this.id) {
          this.workout = window.$workouts[i];
          return;
        }
      }
    },
  }
</script>

<style scoped>
</style>