<template>
  <div class="timer">
    <section class="timer__count-container">
      <span class="timer__count-wrapper">
        <h2 class="timer__label">Gesamt-Timer</h2>
        <p class="timer__count">
          <span class="timer__hours">00</span>
          :
          <span class="timer__minutes">00</span>
          :
          <span class="timer__seconds">00</span>
        </p>
      </span>
      <span class="timer__count-wrapper">
        <h2 class="timer__label">Aktuelle Arbeits-/Pausenzeit</h2>
        <p class="timer__count">
          <span class="timer__hours">00</span>
          :
          <span class="timer__minutes">00</span>
          :
          <span class="timer__seconds">00</span>
        </p>
      </span>
      <span class="timer__count-wrapper">
        <h2 class="timer__label">Gesamte Pausenzeit</h2>
        <p class="timer__count">
          <span class="timer__hours">00</span>
          :
          <span class="timer__minutes">00</span>
          :
          <span class="timer__seconds">00</span>
        </p>
      </span>
    </section>

    <transition name="turn">

      <section v-if="running" key="double" class="timer__button-container">
        <div class="timer__button-wrapper timer__button-wrapper--small">
          <div class="timer__button btn btn--18 btn--round">
            <p>Pause</p>
          </div>
        </div>
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
      }
    },
    methods: {
      start() {
        this.running = true;
      },
      stop() {
        this.running = false;
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
  }
  .timer__button-container {
    display: flex;
    justify-content: center;
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
</style>