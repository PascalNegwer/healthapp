<template>
  <div class="l_wrapper l_wrapper--small l_flex">
    <p v-on:click="goBack()" class="btn btn--12 back-button">zurück</p>
    <section v-if="eyeExercise" class="exercise l_flex">
      <div class="loader" v-bind:class="{'loader--active': loading}">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </div>
      <div v-if="online" class="exercise__gif" :style="{ backgroundImage:  'url(' + eyeExercise.getImageURL() + ')'}" v-bind:class="{'content--hidden': loading}">
      </div>
      <div v-else class="exercise__gif" style="background-image:  url('assets/img/offline.jpg')" v-bind:class="{'content--hidden': loading}">
      </div>
      <p class="exercise__description">{{ eyeExercise.getDescription() }}</p>
    </section>
  </div>
</template>

<script>
  import * as messageTypes from '../../../classes/MessageTypes';

  let setEyeExercise = function(self) {
    for (let i = 0; i < window.$eyeExercises.length; i++) {
      if (window.$eyeExercises[i].getID() === self.id) {
        self.loading = true;
        self.eyeExercise = window.$eyeExercises[i];
        self.eyeExercise.loadImage(undefined, undefined, undefined, undefined, undefined, {
          onOk: result => {
            self.online = true;
            setTimeout(() => {
              self.loading = false;
            }, 500);
          }, onError: error => {
            self.online = false;
            self.loading = false;
          }
        }, true);
      }
    }
  };

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
        loading: false,
      }
    },
    methods: {
      goBack: function() {
        window.history.back();
      },
    },
    beforeMount: function() {

      if (window.$eyeExercises.length > 0) {
        setEyeExercise(this);
      } else {
        let self = this;
        EventBus.$on('eyeExercisesLoaded', function () {
          setEyeExercise(self);
        });
      }

      window.addEventListener('online', () => {
        this.online = true;
        this.loading = true;
        setTimeout(function () {
          this.loading = false;
        }.bind(this), 500);
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
    position: relative;
  }
  .exercise__gif {
    flex-shrink: 1;
    width: 100%;
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transition: opacity .15s ease-in-out;
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
  .loader {
    top: 33%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    transition: opacity .15s ease-in-out;
  }
  .loader--active {
    visibility: visible;
    opacity: 1;
  }
  .content--hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>