<template>
  <div class="l_wrapper l_wrapper--small l_flex">
    <p v-on:click="goBack()" class="btn btn--12 back-button">zurück</p>
    <section v-if="eyeExercise" class="exercise l_flex">
      <div v-if="online" class="exercise__gif" :style="{ backgroundImage:  'url(' + eyeExercise.getImageURL() + ')'}">
      </div>
      <div v-else class="exercise__gif" style="background-image:  url('assets/img/offline.jpg')">
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
        eyeExercise: undefined,
        online: false,
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
          this.eyeExercise.loadImage(undefined, undefined, undefined, undefined, undefined, {
            onOk: result => {
              this.online = true;
            }, onError: error => {
              this.online = false
            }
          }, true);
        }
      }

      window.addEventListener('online', () => {
        this.online = true;
      });
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