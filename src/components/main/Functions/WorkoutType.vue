<template>
  <div>
    <h1>WorkoutType</h1>
    <ul>
      <li class="list-item" v-for="workout in workouts">
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
        workouts: [],
      }
    },
    methods: {},
    beforeMount: function () {
      Apiomat.Workout.getWorkouts(undefined, {
        onOk: workouts => {
          for (let i = 0; i < workouts.length; i++) {
            let workout = workouts[i];
            workout.loadWorkoutType({
              onOk: workoutType => {
                if (workoutType.getCode() === this.type) {
                  this.workouts.push(workout);
                }
              }
            });
          }
        },
        onError: error => {
          console.log(error);
          EventBus.$emit('newMessage', {message: 'Oops! Etwas ist schief gegangen.', type: messageTypes.ERROR});
        }
      }, true);
    },
  }
</script>

<style scoped>
</style>