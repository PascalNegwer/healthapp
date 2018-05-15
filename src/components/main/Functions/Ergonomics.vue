<template>
  <div class="l_wrapper l_wrapper--small">
    <h1 class="headline headline--main">Arbeitsplatz einrichten</h1>
    <div class="setup l_flex">
      <div class="setup__wrapper">
        <img class="setup__image"src="assets/img/setup.png">
        <span class="setup__clickarea setup__clickarea--a"></span>
        <span class="setup__clickarea setup__clickarea--b"></span>
        <span class="setup__clickarea setup__clickarea--c"></span>
        <span class="setup__clickarea setup__clickarea--d"></span>
        <span class="setup__clickarea setup__clickarea--e"></span>
        <span class="setup__clickarea setup__clickarea--f"></span>
        <span class="setup__clickarea setup__clickarea--g"></span>
        <span class="setup__clickarea setup__clickarea--h"></span>
        <span class="setup__clickarea setup__clickarea--i"></span>
        <span class="setup__clickarea setup__clickarea--j"></span>
      </div>
      <p class="setup__info u_icon--info">Tippe für weitere Informationen</p>
    </div>
  </div>
</template>

<script>
  export default {
    beforeCreate: function() {
      document.documentElement.className = 'u_gradient-background--purple';
    },
    name: 'ergonomics',
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
  .setup__image {
    width: 100%;
    height: auto;
  }
  .setup__wrapper {
    margin-left: -1rem;
    margin-right: -1rem;
    position: relative;
  }
  .setup__info {
    display: inline-block;
    font-size: 1.4rem;
    line-height: 2;
    color: var(--white);
    margin: 0 auto;
    padding: 2rem 0 0 0;
  }
  .setup__info:before {
    padding-right: 1rem;
    font-size: 1.8rem;
    line-height: 1.5;
    float: left;
  }
  .setup__clickarea {
    display: block;
    position: absolute;
    background: red;
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    opacity: .2;
  }
  .setup__clickarea--a {
    left: -3%;
    top: 14%;
  }
  .setup__clickarea--b {
    left: 19%;
    top: 29%;
  }
  .setup__clickarea--c {
    left: 70%;
    top: 14%;
  }
  .setup__clickarea--d {
    left: 70%;
    top: 35%;
  }
  .setup__clickarea--e {
    left: 39%;
    top: 41%;
  }
  .setup__clickarea--f {
    left: 70%;
    top: 53%;
  }
  .setup__clickarea--g {
    left: 16%;
    top: 54%;
  }
  .setup__clickarea--h {
    left: 37%;
    top: 64%;
  }
  .setup__clickarea--i {
    left: 70%;
    top: 76%;
  }
  .setup__clickarea--j {
    left: 44%;
    top: 86%;
  }
</style>