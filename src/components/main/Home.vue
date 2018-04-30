<template>
    <div class="l_wrapper--small">
        <h1>homescreen</h1>
        <profile-switcher></profile-switcher>
    </div>
</template>

<script>
  import ProfileSwitcher from './ProfileSwitcher.vue';

  export default {
    beforeCreate: function() {
      document.documentElement.className = 'u_gradient-background--blue';
    },
    name: 'home',
    components: {
      ProfileSwitcher,
    },
    props: [],
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
</style>