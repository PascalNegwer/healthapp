<template>
  <transition name="t_no-mode-translate">
    <router-view></router-view>
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
      return {}
    },
    methods: {},
    beforeMount: function () {
      Apiomat.Workout.getWorkouts(undefined, {
        onOk: workouts => {
          for (let i = 0; i < workouts.length; i++) {
            let workout = workouts[i];
            workout.loadWorkoutType({}, true);
            workout.loadImage1(undefined, undefined, undefined, undefined, undefined,undefined, true);
            workout.loadImage2(undefined, undefined, undefined, undefined, undefined,undefined, true);
            workout.loadImage3(undefined, undefined, undefined, undefined, undefined,undefined, true);
            workout.loadImage4(undefined, undefined, undefined, undefined, undefined,undefined, true);
            workout.loadImage5(undefined, undefined, undefined, undefined, undefined,undefined, true);
            window.$workouts.push(workout);
          }
        }
      }, true);
      Apiomat.EyeExercise.getEyeExercises(undefined, {
        onOk: eyeExercises => {
          for (let i = 0; i < eyeExercises.length; i++) {
            let eyeExercise = eyeExercises[i];
            eyeExercise.loadImage(undefined, undefined, undefined, undefined, undefined,undefined, true);
            window.$eyeExercises.push(eyeExercise);
          }
        }
      }, true);
    },
  }
</script>

<style scoped>

</style>