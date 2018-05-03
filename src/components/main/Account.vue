<template>
    <div class="l_wrapper l_wrapper--small">
        <div class="l_flex content">
        <h1 class="headline headline--h1">Accountdaten</h1>
        <p class="description--inputbox">Name</p>
        <input class="inp inp--18" placeholder="Name">
        <p class="description--inputbox">Vorname</p>
        <input class="inp inp--18" placeholder="Vorname">
        <p class="description--inputbox">E-Mail</p>
        <input class="inp inp--18" v-model="$user.data.userName" type="email" placeholder="E-Mail-Adresse" required>
        <button class="btn btn--18" type="submit">Speichern</button>
        </div>
    </div>
</template>

<script>
  export default {
    beforeCreate: function() {
      document.documentElement.className = 'u_gradient-background--mixed';
    },
    name: 'account',
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
    .btn {
        width: 65%;
        margin-top: 4vh;
        margin-bottom: 4vh;
        margin-left: auto;
    }
    .inp {
        margin: 1rem 0 2rem 0;
    }
    .headline {
        margin-bottom: 2.5rem;
    }
</style>