<template>
  <div>
    <h1>WorkoutType</h1>
    <ul>
      <li class="list-item" v-for="workout in workouts">
        workout
        <router-link :to="{ name: 'workout', params: { type: type, id: workout.data.id }}">
          {{ workout.getTitle() }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    props: ['type'],
    data() {
      return {
        workouts: undefined,
      }
    },
    beforeMount: function () {
      let workoutsByType = [];
      for (let i = 0; i < window.$workouts.length; i++) {
        if (window.$workouts[i].getWorkoutType().getCode() === this.type) {
          workoutsByType.push(window.$workouts[i]);
        }
      }
      this.workouts = workoutsByType;
    },
    methods: {},
  }
</script>

<style scoped>
</style>