<template>
  <div class="l_wrapper l_wrapper--small l_flex">
    <p v-on:click="goBack()" class="btn btn--12 back-button">zurück</p>
    <div v-if="loading">Loading</div>
    <section v-else class="exercise l_flex">
      <div class="exercise__gif" :style="{ backgroundImage:  'url(' + eyeExercise.getImageURL(100) + ')'}">
      </div>
      <p class="exercise__description">{{ eyeExercise.getDescription() }}</p>
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
        eyeExercise: undefined,
      }
    },
    methods: {
      goBack: function() {
        window.history.back();
      },
    },
    beforeMount: function() {
      for (let i = 0; i < window.$eyeExercises.length; i++) {
        if (window.$eyeExercises[i].getID() === this.id) {
          this.eyeExercise = window.$eyeExercises[i];
          this.loading = false;
          return
        }
      }
      this.loading = false;
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