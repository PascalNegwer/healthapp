<template>
  <div class="l_wrapper l_wrapper--small l_flex">
    <h1 class="headline headline--main">{{ workoutType }}</h1>
    <ul>
      <li class="list-item" v-for="workout in workouts">
        <router-link class="link u_icon--down l_flex l_flex--horizontal" :to="{ name: 'workout', params: { type: type, id: workout.data.id }}">
          {{ workout.getTitle() }}
        </router-link>
      </li>
    </ul>
    <p v-on:click="goBack()" class="btn btn--12 back-button">zurück</p>
  </div>
</template>

<script>
  let setWorkouts = function(self) {
    let workoutsByType = [];
    for (let i = 0; i < window.$workouts.length; i++) {
      if (window.$workouts[i].getWorkoutType() === self.type) {
        workoutsByType.push(window.$workouts[i]);
      }
    }
    self.workouts = workoutsByType;
  };

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    props: ['type'],
    data() {
      return {
        workouts: [],
        workoutType: '',
      }
    },
    methods: {
      goBack: function() {
        window.history.back();
      },
    },
    beforeMount: function () {
      if (window.$workouts.length > 0) {
        setWorkouts(this);
      } else {
        let self = this;
        EventBus.$on('workoutsLoaded', function () {
          setWorkouts(self);
        });
      }

      switch (this.type) {
        case 'neck':
          this.workoutType = 'Nacken';
          break;
        case 'head':
          this.workoutType = 'Kopf';
          break;
        case 'legs':
          this.workoutType = 'Beine';
          break;
        case 'arms':
          this.workoutType = 'Arme';
          break;
        case 'back':
          this.workoutType = 'Rücken';
          break;
      }
    },
  }
</script>

<style scoped>
  .link {
    font-family: Comfortaa, sans-serif;
    font-size: 1.6rem;
    justify-content: space-between;
    padding-right: 14%;
    align-items: center;
    transition: opacity .15s ease-in-out;
    line-height: 3;
  }
  .link:active, .link:active:before {
    opacity: .5;
  }
  .link:before {
    transition: opacity .15s ease-in-out;
    order: 1;
    transform: rotate(-90deg);
    font-size: 2rem;
  }
  .list-item {
    width: 100%;
  }
  .back-button {
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;
  }
</style>