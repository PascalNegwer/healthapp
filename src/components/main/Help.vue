<template>
  <div class="l_wrapper l_wrapper--small l_flex">
    <h1 class="headline headline--main">hilfe</h1>
    <div class="help l_flex l_grow">
      <p class="help__info">Dieses Feature steht noch nicht zur Verfügung.</p>
    </div>
  </div>
</template>

<script>
  export default {
    beforeCreate: function() {
      document.documentElement.className = 'u_gradient-background--mixed';
    },
    name: 'help',
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
  .help {
    justify-content: center;
    align-items: center;
  }
  .help__info {
    font-size: 1.8rem;
    line-height: 2.5;
    text-align: center;
    width: 75%;
  }
</style>