<template>
  <div class="l_wrapper l_wrapper--small l_flex">
    <p v-on:click="goBack()" class="btn btn--12 back-button">zurück</p>
    <section v-if="workout" class="exercise">
      <div class="slider" v-if="online">
        <div class="slider__wrapper" :style="{ width : 100 * images + '%', transform: 'translateX(-' + transform + '%)'}">
          <img class="slider__image" v-for="index in images" :src="workout['getImage' + index + 'URL']()" :style="{width : 100 / images + '%'}">
        </div>
        <div class="slider__index">
          <span v-for="index in images" class="slider__bullet" :class="{'slider__bullet--active': index === activeIndex}"></span>
        </div>
        <span class="slider__control slider__control--left u_icon--up" v-on:click="slidePrev()"></span>
        <span class="slider__control slider__control--right u_icon--down" v-on:click="slideNext()"></span>
      </div>
      <div class="slider" v-else>
        <div class="slider__wrapper">
          <img class="slider__image" src="assets/img/offline.jpg">
        </div>
      </div>
      <div class="exercise__description">
        <p v-html="workout.getDescription()"></p>
        <h3 class="exercise__subhead">Dauer:</h3>
        <p v-html="workout.getDuration()"></p>
      </div>
    </section>
  </div>
</template>

<script>
  let prepareSlider = function(self) {
    for (let i = 1; i < 6; i++) {
      if (self.workout.data.hasOwnProperty('image' + i + 'URL')) {
        self.images = i;
      } else {
        break;
      }
    }
  };

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    props: ['type', 'id'],
    data() {
      return {
        workout: undefined,
        images: 0,
        activeIndex: 1,
        transform: '0',
        online: false,
      }
    },
    methods: {
      goBack: function() {
        window.history.back();
      },
      slideNext: function() {
        if(this.activeIndex !== this.images) {
          let value = 100 / this.images;
          this.transform = parseInt(this.transform) + value;
          this.activeIndex++;
        }
      },
      slidePrev: function() {
        if(this.activeIndex !== 1) {
          let value = 100 / this.images;
          this.transform = parseInt(this.transform) - value;
          this.activeIndex--;
        }
      }
    },
    beforeMount: function () {
      for (let i = 0; i < window.$workouts.length; i++) {
        if (window.$workouts[i].getID() === this.id) {
          this.workout = window.$workouts[i];
          this.workout.loadImage1(1, 1, undefined, undefined, 'jpg', {
            onOk: result => {
              this.online = true;
            }, onError: error => {
              this.online = false
            }
          }, true);
          prepareSlider(this);
        }
      }

      window.addEventListener('online', () => {
        this.online = true;
      });
    },
  }
</script>

<style scoped>
  .exercise {
   margin-top: 2rem;
  }
  .exercise__description {
    font-size: 1.4rem;
    line-height: 1.2;
    margin-top: 2rem;
  }
  .exercise__subhead {
    display: block;
    margin-top: 1rem;
    margin-bottom: .5rem;
    font-weight: 400;
  }
  .back-button {
    margin-right: auto;
  }
  .slider {
    margin-left: -1rem;
    margin-right: -1rem;
    position: relative;
    overflow: hidden;
  }
  .slider__wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: transform .3s ease-in-out;
  }
  .slider__image {
    width: 100%;
    height: auto;
  }
  .slider__index {
    position: absolute;
    bottom: 0;
    padding: .4rem 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .slider__bullet {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid var(--white);
    border-radius: 50%;
    margin: .4rem;
  }
  .slider__bullet--active {
    background: var(--white-50);
  }
  .slider__control {
    position: absolute;
    height: 100%;
    width: 20%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slider__control:before {
    transform: rotate(-90deg);
    font-size: 4rem;
    color: var(--darkgrey);
    transition: color .15s ease-in-out;
  }
  .slider__control:active:before {
    color: var(--lightgrey);
  }
  .slider__control--left {
    left: 0;
  }
  .slider__control--right {
    right: 0;
  }
</style>