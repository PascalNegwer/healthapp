<template>
  <div>
    <h1>Workout</h1>
  </div>
</template>

<script>
  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    props: ['type', 'id'],
    data() {
      return {
        workout: undefined,
      }
    },
    methods: {},
    beforeMount: function () {
      Apiomat.Workout.getWorkouts('id == id(' + this.id + ')', {
        onOk: workouts => {
          this.workout = workouts[0];
          this.loading = false;
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
</style>