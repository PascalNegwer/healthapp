<template>
  <div class="l_wrapper l_wrapper--small">
    <h1 class="headline headline--main">Account</h1>
    <section class="l_section">
      <h2 class="headline">Accountdaten</h2>
      <form class="l_flex">
        <p class="label">Name</p>
        <input class="inp inp--18" placeholder="Name" readonly>
        <p class="label">Vorname</p>
        <input class="inp inp--18" placeholder="Vorname" readonly>
        <p class="label">E-Mail</p>
        <input class="inp inp--18" v-model="$user.data.userName" type="email" placeholder="E-Mail-Adresse" readonly>
        <button class="btn btn--18" type="submit">Speichern</button>
      </form>
    </section>
    <span class="l_divider"></span>
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
        margin-top: 2.4rem;
        margin-left: auto;
    }
    .inp {
        margin: 1rem 0 2rem 0;
    }
    .label {
      font-weight: 300;
      color: var(--lightgrey);
      font-size: 1.4rem;
    }
</style>