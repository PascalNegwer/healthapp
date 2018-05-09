<template>
  <div class="l_wrapper l_wrapper--small">
    <h1>Augenübungen</h1>
    <ul>
      <li v-for="eyeExercise in eyeExercises">
        <router-link v-bind:eyeExercise="eyeExercise" class="" :to="{ name: 'eye-exercise', params: { id: eyeExercise.data.id }}">
          {{ eyeExercise.getTitle() }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import * as messageTypes from '../../../classes/MessageTypes';

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    name: 'eye-exercises',
    props: [],
    data() {
      return {
        eyeExercises: undefined,
      }
    },
    beforeMount: function () {
      Apiomat.EyeExercise.getEyeExercises(undefined, {
        onOk: eyeExercises => {
          this.eyeExercises = eyeExercises;
        },
        onError: error => {
          console.log(error);
          EventBus.$emit('newMessage', {message: 'Oops! Etwas ist schief gegangen.', type: messageTypes.ERROR});
        }
      }, true);
    },
    methods: {}
  }
</script>

<style scoped>
</style>