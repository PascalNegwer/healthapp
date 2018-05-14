<template>
  <div class="l_wrapper l_wrapper--small l_flex">
    <p v-on:click="goBack()" class="btn btn--12 back-button">zurück</p>
    <div v-if="loading">Loading</div>
    <section v-else class="exercise">
      <div class="slider">
        <div class="slider__wrapper" :style="{ width : 100 * images + '%', transform: 'translateX(-' + transform + '%)'}">
          <img class="slider__image" v-for="index in images" :src="workout['getImage' + index + 'URL']()" :style="{width : 100 / images + '%'}">
        </div>
        <div class="slider__index">
          <span v-for="index in images" class="slider__bullet" :class="{'slider__bullet--active': index === activeIndex}"></span>
        </div>
        <span class="slider__control slider__control--left u_icon--up" v-on:click="slidePrev()"></span>
        <span class="slider__control slider__control--right u_icon--down" v-on:click="slideNext()"></span>
      </div>
      <p class="exercise__description" v-html="workout.getDescription()"></p>
    </section>
  </div>
</template>

<script>

  let prepareSlider = function(self) {
    for (let i = 1; i < 6; i++) {
      if (self.workout.data.hasOwnProperty('image' + i + 'URL')) {
        self.images = i;
        console.log(self.workout.data['image' + i + 'URL']);
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
        loading: true,
        images: 0,
        activeIndex: 1,
        transform: '0',
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
          this.loading = false;
          prepareSlider(this);
        }
      }
    },
  }
</script>

<style scoped>
  .exercise {
   margin-top: 2rem;
  }
  .exercise__description {
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.2;
    margin-top: 2rem;
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
    width: 200%;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: transform .3s ease-in-out;
  }
  .slider__image {
    width: 50%;
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