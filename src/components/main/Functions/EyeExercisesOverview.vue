<template>
  <div class="l_wrapper l_wrapper--small">
    <h1 class="headline headline--main">Augenübungen</h1>
    <ul>
      <li class="list-item" v-for="eyeExercise in eyeExercises">
        <router-link v-bind:eyeExercise="eyeExercise" class="link u_icon--down l_flex l_flex--horizontal" :to="{ name: 'eye-exercise', params: { id: eyeExercise.data.id }}">
          {{ eyeExercise.getTitle() }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import * as messageTypes from '../../../classes/MessageTypes';

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    name: 'eye-exercises',
    props: [],
    data() {
      return {
        eyeExercises: [],
      }
    },
    beforeMount: function () {
      if (window.$eyeExercises.length > 0) {
        this.eyeExercises = window.$eyeExercises;
      } else {
        let self = this;
        EventBus.$on('eyeExercisesLoaded', function () {
          self.eyeExercises = window.$eyeExercises;
        });
      }

    },
    methods: {}
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

</style>