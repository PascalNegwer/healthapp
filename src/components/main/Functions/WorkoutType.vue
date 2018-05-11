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
      Apiomat.Workout.getWorkouts(undefined, {
        onOk: workouts => {
          for (let i = 0; i < workouts.length; i++) {
            let workout = workouts[i];
            workout.loadWorkoutType({
              onOk: workoutType => {
                if (workoutType.getCode() === this.type) {
                  this.workouts.push(workout);
                  this.workoutType = workoutType.getName();
                }
              }
            });
          }
        },
        onError: error => {
          console.log(error);
          EventBus.$emit('newMessage', {message: 'Oops! Etwas ist schief gegangen.', type: messageTypes.ERROR});
        }
      }, true);
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