<template>
  <div class="l_wrapper l_wrapper--small">
    <h1 class="headline headline--main">Arbeitsplatz einrichten</h1>
    <div class="setup l_flex">
      <div class="setup__wrapper">
        <div class="overlay l_flex" :class="{'overlay--visible': overlayVisible}">
          <div class="overlay__head u_icon--info l_flex l_flex--horizontal">
            <h3 class="overlay__headline">{{ title[key] }}</h3>
            <span class="overlay__close-button u_icon--close" v-on:click="hideOverlay()"></span>
          </div>
          <div class="overlay__content">
            <p class="overlay__text">{{ description[key] }}</p>
          </div>
        </div>
        <img class="setup__image" src="assets/img/setup.png">
        <span class="setup__clickarea setup__clickarea--a" v-on:click="showOverlay('a')"></span>
        <span class="setup__clickarea setup__clickarea--b" v-on:click="showOverlay('b')"></span>
        <span class="setup__clickarea setup__clickarea--c" v-on:click="showOverlay('c')"></span>
        <span class="setup__clickarea setup__clickarea--d" v-on:click="showOverlay('d')"></span>
        <span class="setup__clickarea setup__clickarea--e" v-on:click="showOverlay('e')"></span>
        <span class="setup__clickarea setup__clickarea--f" v-on:click="showOverlay('f')"></span>
        <span class="setup__clickarea setup__clickarea--g" v-on:click="showOverlay('g')"></span>
        <span class="setup__clickarea setup__clickarea--h" v-on:click="showOverlay('h')"></span>
        <span class="setup__clickarea setup__clickarea--i" v-on:click="showOverlay('i')"></span>
        <span class="setup__clickarea setup__clickarea--j" v-on:click="showOverlay('j')"></span>
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
        description: {
          a: 'Grüne Farbe in der Umgebung kann Ihre Kreativität anregen.',
          b: 'Lebendige Pflanzen können die Produktivität in der Arbeitsatmosphäre steigern.',
          c: 'Viel Tageslicht im Büro verbessert Ihren Schlaf und erhöht Ihre Aktivität und Lebensqualität.',
          d: 'Musik kann Ihre Stimmung heben und Ihnen zu entspannter Konzentration verhelfen. Allerdings kann sie Ihre Leistung bei geistig anspruchsvollen Aufgaben auch verringern.',
          e: 'Der Monitor/Laptop sollte sich auf Augenhöhe befinden (wenn nötig, stellen Sie den Laptop auf eine Unterlage).',
          f: 'Hände, Handgelenk und Unterarme sollten eine gerade Linie bilden und parallel zum Boden liegen.',
          g: 'Wenn Sie an Ihre Liebsten denken, werden Stress und negative Gedanken reduziert.',
          h: 'Studien haben belegt, dass ein unordentlicher Schreibtisch das kreative Denken anregt.',
          i: 'Nutzen Sie einen alternativen Stuhl oder einen Stehtisch, um Schmerzen durch langes Sitzen zu vermeiden.',
          j: 'Die Füße mit der gesamten Sohle auf dem Boden ruhen lassen (nutzen Sie eine Fußablage, wenn Sie den Boden nicht erreichen).',
        },
        title: {
          a: 'Farbe',
          b: 'Pflanzen',
          c: 'Licht',
          d: 'Musik',
          e: 'Monitor',
          f: 'Haltung',
          g: 'Schreibtisch',
          h: 'Schreibtisch',
          i: 'Stuhl',
          j: 'Haltung',
        },
        key: undefined,
        overlayVisible: false,
      }
    },
    methods: {
      showOverlay: function (key) {
        this.key = key;
        this.overlayVisible = true;
      },
      hideOverlay: function() {
        this.overlayVisible = false;
      }
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
    background: transparent;
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

  .overlay {
    position: absolute;
    width: 90%;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    background: var(--white-90);
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s ease-in-out, visibility 0s .15s;
    z-index: 2000;
    border: 1px solid var(--purple);
    padding: 1rem;
  }
  .overlay--visible {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s ease-in-out;
  }
  .overlay__head {
    padding: .5rem .5rem 1.5rem .5rem;
    align-items: center;
    border-bottom: 1px solid var(--grey);
  }
  .overlay__head:before {
    color: var(--purple);
    margin-right: 2rem;
    font-size: 3.2rem;
  }
  .overlay__headline {
    font-size: 2rem;
    font-family: 'Comfortaa', sans-serif;
    font-weight: 300;
    color: var(--grey);
    line-height: 1;
    display: block;
    padding-top: .4rem;
  }
  .overlay__close-button {
    display: block;
    margin-left: auto;
    color: var(--grey);
  }
  .overlay__close-button:before {
    font-size: 3.2rem;
  }
  .overlay__content {
    padding: 1rem;
  }
  .overlay__text {
    color: var(--grey);
    font-size: 1.6rem;
    line-height: 1.5;
  }
</style>