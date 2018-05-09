<template>
  <div class="l_wrapper l_wrapper--small">
    <h1>Augenübungen</h1>
  </div>
</template>

<script>
  import * as messageTypes from '../../../classes/MessageTypes';

  export default {
    beforeCreate: function () {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    name: 'eye-exercise',
    props: ['id'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
</style>