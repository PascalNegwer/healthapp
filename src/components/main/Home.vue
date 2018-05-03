<template>
    <div class="l_wrapper l_wrapper--small">
      <h1>homescreen</h1>
      <timer></timer>
      <!--<profile-switcher></profile-switcher>-->
    </div>
</template>

<script>
  import ProfileSwitcher from './ProfileSwitcher.vue';
  import Timer from './Timer.vue';

  export default {
    beforeCreate: function() {
      document.documentElement.className = 'u_gradient-background--blue';
    },
    name: 'home',
    components: {
      ProfileSwitcher,
      Timer,
    },
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