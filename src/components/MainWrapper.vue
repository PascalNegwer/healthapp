<template>
  <transition name="t_no-mode-translate">
      <router-view>
      </router-view>
  </transition>
</template>

<script>
  import Home from './main/Home.vue';
  import Dashboard from './main/Dashboard.vue';
  import FunctionsWrapper from './main/Functions/FunctionsWrapper.vue';
  import Account from './main/Account.vue';
  import Help from './main/Help.vue';
  import Lawstuff from './main/Lawstuff.vue';

  export default {
    name: 'mainWrapper',
    components: {Home, Dashboard, FunctionsWrapper, Account, Help, Lawstuff},
    data() {
      return {
        eyeExercises: [],
        workouts: [],
      }
    },
    methods: {},
    beforeMount: function () {
      Apiomat.Workout.getWorkouts(undefined, {
        onOk: workouts => {
          for (let i = 0; i < workouts.length; i++) {
            let workout = workouts[i];
            window.$workouts.push(workout);
            this.workouts.push(workout);
          }
          EventBus.$emit('workoutsLoaded');
        }
      }, true);
      Apiomat.EyeExercise.getEyeExercises(undefined, {
        onOk: eyeExercises => {
          for (let i = 0; i < eyeExercises.length; i++) {
            let eyeExercise = eyeExercises[i];
            window.$eyeExercises.push(eyeExercise);
            this.eyeExercises.push(eyeExercise);
          }
          EventBus.$emit('eyeExercisesLoaded');
        }
      }, true);
    },
  }
</script>

<style scoped>

</style>