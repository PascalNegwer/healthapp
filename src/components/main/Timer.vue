<template>
  <div class="timer l_flex">
    <section class="timer__count-container">
      <div class="timer__count-wrapper">
        <h2 class="timer__label">Gesamte Arbeitszeit</h2>
        <p class="timer__count">
          <span class="timer__hours">00</span>
          :
          <span class="timer__minutes">00</span>
          :
          <span class="timer__seconds">00</span>
        </p>
      </div>
      <div class="timer__count-wrapper">
        <h2  v-if="paused" class="timer__label">Aktuelle Pausenzeit</h2>
        <h2  v-else class="timer__label">Aktuelle Arbeitszeit</h2>
        <p class="timer__count timer__count--small">
          <span class="timer__hours">00</span>
          :
          <span class="timer__minutes">00</span>
          :
          <span class="timer__seconds">00</span>
        </p>
      </div>
      <div class="timer__count-wrapper">
        <h2 class="timer__label">Gesamte Pausenzeit</h2>
        <p class="timer__count timer__count--small">
          <span class="timer__hours">00</span>
          :
          <span class="timer__minutes">00</span>
          :
          <span class="timer__seconds">00</span>
        </p>
      </div>
    </section>

    <transition name="turn" mode="out-in">

      <section v-if="running" key="double" class="timer__button-container">
        <transition name="turn" mode="out-in">
          <div v-if="paused" key="resume" class="timer__button-wrapper timer__button-wrapper--small">
            <div class="timer__button btn btn--18 btn--round" v-on:click="resume()">
              <p>Weiter</p>
            </div>
          </div>
          <div v-else key="pause" class="timer__button-wrapper timer__button-wrapper--small">
            <div class="timer__button btn btn--18 btn--round" v-on:click="pause()">
              <p>Pause</p>
            </div>
          </div>
        </transition>
        <div class="timer__button-wrapper timer__button-wrapper--small">
          <div class="timer__button btn btn--18 btn--round" v-on:click="stop()">
            <p>Stop</p>
          </div>
        </div>
      </section>

      <section v-else key="single" class="timer__button-container">
        <div class="timer__button-wrapper" >
          <div class="timer__button btn btn--18 btn--round" v-on:click="start()">
            <p>Start</p>
          </div>
        </div>
      </section>

    </transition>
  </div>
</template>

<script>

  export default {
    name: 'timer',
    props: [],
    data() {
      return {
        running: false,
        paused: false,
      }
    },
    methods: {
      start() {
        this.running = true;
      },
      stop() {
        this.running = false;
        this.paused = false;
      },
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      },
      saveData() {

      },
      queue() {

      },
      startCounting(counter) {

      }
    }
  }
</script>

<style scoped>
  .timer {
    position: relative;
    flex-grow: 1;
  }
  .timer__button-container {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }
  .timer__button-wrapper {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .timer__button-wrapper--small {
    width: 40%;
    display: block;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .timer__button {
    background: var(--white-25);
  }
  .timer__button:active {
    background: var(--primary-color);
  }
  .timer__count-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .timer__count-wrapper {
    text-align: center;
  }
  .timer__label {
    font-size: 1.8rem;
    font-weight: 300;
    color: var(--white-50);
    margin-bottom: .8rem;
  }
  .timer__count {
    font-family: 'Comfortaa', sans-serif;
    font-weight: 300;
    font-size: 5.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 3.2rem;
  }
  .timer__count--small {
    font-size: 3.6rem;
  }
</style>