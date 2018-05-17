<template>
  <div class="functions-wrapper">
    <transition name="t_no-mode-translate">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import * as messageTypes from '../../../classes/MessageTypes';
  import EyeExercisesOverview from './EyeExercisesOverview.vue';

  export default {
    components: {EyeExercisesOverview},
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    name: 'functions',
    props: [],
    data() {
      return {
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .functions-wrapper {
    height: 100%;
  }
</style>