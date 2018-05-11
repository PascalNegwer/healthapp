<template>
  <div class="l_wrapper l_wrapper--small l_flex">
    <p v-on:click="goBack()" class="btn btn--12 back-button">zurück</p>
    <div v-if="loading">Loading</div>
    <section v-else class="exercise l_flex">
      <div class="exercise__gif" :style="{ backgroundImage:  'url(' + eyeExercises.getImageURL() + ')'}">
      </div>
      <p class="exercise__description">{{ eyeExercises.getDescription() }}</p>
    </section>
  </div>
</template>

<script>
  import * as messageTypes from '../../../classes/MessageTypes';

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    name: 'eye-exercise',
    props: ['id'],
    data() {
      return {
        loading: true,
        eyeExercises: undefined,
      }
    },
    methods: {
      goBack: function() {
        window.history.back();
      },
    },
    beforeMount: function() {
      Apiomat.EyeExercise.getEyeExercises('id == id(' + this.id + ')', {
        onOk: eyeExercises => {
          this.eyeExercises = eyeExercises[0];
          this.loading = false;
        },
        onError: error => {
          console.log(error);
          EventBus.$emit('newMessage', {message: 'Oops! Etwas ist schief gegangen.', type: messageTypes.ERROR});
        }
      }, true);
    }
  }
</script>

<style scoped>
  .l_flex {
    flex-grow: 0;
    flex-shrink: 1;
  }
  .exercise {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .exercise__gif {
    flex-shrink: 1;
    width: 100%;
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .exercise__description {
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.2;
    margin-top: 2rem;
  }
  .back-button {
    margin-right: auto;
    margin-bottom: 2rem;
  }
</style>