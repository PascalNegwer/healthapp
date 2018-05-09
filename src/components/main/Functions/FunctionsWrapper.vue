<template>
  <div class="l_wrapper l_wrapper--small">
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

<style>
</style>