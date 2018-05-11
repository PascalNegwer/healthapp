<template>
  <div>
    <div v-for="eyeExercise in eyeExercises">
      <img :src="eyeExercise.getImageURL(100)" style="display: none"/>
    </div>
    <div v-for="workout in workouts">
      <img :src="workout.getImage1URL(100)" style="display: none"/>
      <img :src="workout.getImage2URL(100)" style="display: none"/>
      <img :src="workout.getImage3URL(100)" style="display: none"/>
      <img :src="workout.getImage4URL(100)" style="display: none"/>
      <img :src="workout.getImage5URL(100)" style="display: none"/>
    </div>
  <transition name="t_no-mode-translate">
      <router-view>
      </router-view>
  </transition>
  </div>
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
        }
      }, true);
      Apiomat.EyeExercise.getEyeExercises(undefined, {
        onOk: eyeExercises => {
          for (let i = 0; i < eyeExercises.length; i++) {
            let eyeExercise = eyeExercises[i];
            window.$eyeExercises.push(eyeExercise);
            this.eyeExercises.push(eyeExercise);
          }
        }
      }, true);
    },
  }
</script>

<style scoped>

</style>