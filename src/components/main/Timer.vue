<template>
  <div class="timer">
    <section class="timer__count-container">
      <span class="timer__count-wrapper">
        <h2 class="timer__label">Gesamt-Timer</h2>
        <p class="timer__count">00:00</p>
      </span>
      <span class="timer__count-wrapper">
        <h2 class="timer__label">Aktuelle Arbeits-/Pausenzeit</h2>
        <p class="timer__count">00:00</p>
      </span>
      <span class="timer__count-wrapper">
        <h2 class="timer__label">Gesamte Pausenzeit</h2>
        <p class="timer__count">00:00</p>
      </span>
    </section>

    <section class="timer__button-container">
      <div class="timer__button">Start</div>
      <span class="timer__button-wrapper">
        <div class="timer__button">Pause</div>
        <div class="timer__button">Stop</div>
      </span>
    </section>
  </div>
</template>

<script>

  export default {
    name: 'timer',
    props: [],
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>