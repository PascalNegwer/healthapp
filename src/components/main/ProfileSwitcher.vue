<template>
    <div class="tiles l_flex l_flex--horizontal">

      <span v-for="profile in profiles" class="tiles__tile" v-bind:class="{'tiles__tile--active' : profile.active}">
        {{ profile.name }}
      </span>

      <div class="tiles__tile tiles__tile--dropdown" v-bind:class="[{'tiles__tile--active': open}, open ? 'u_icon--up' : 'u_icon--down']">
        <div class="dropdown-clicker" v-on:click="toggleDropdown(open)"></div>

        <div class="tiles__dropdown l_flex" v-bind:class="[{'tiles__dropdown--visible': open}, bg]">
          <span class="dropdown__tile">Profil 4</span>
          <span class="dropdown__tile u_icon--edit">Bearbeiten</span>
          <span class="dropdown__tile u_icon--add">Neu</span>
        </div>

      </div>
    </div>
</template>

<script>
  export default {
    mounted: function() {
      this.bg = document.documentElement.className;
      console.log(this.bg);
    },
    name: 'profile-switcher',
    props: [],
    data() {
      return {
        bg: '',
        open: false,
        profiles: [
          { 
            name: 'Standard',
            active: true,
          },
          { name: 'Nebenjob' },
          { name: 'Zuhause' }
        ]
      }
    },
    methods: {
      toggleDropdown(state) {
        if(state) {
          this.open = false;
        } else {
          this.open = true;
        }
      }
    }
  }
</script>

<style scoped>
  .tiles {
    margin-left: -.2rem;
    margin-right: -.2rem;
    font-size: 1.4rem;
    color: var(--lightgrey);
  }
  .tiles__tile {
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 1;
    width: 100%;
    text-align: center;
    background: var(--white-50);
    margin: 0 .1rem;
    text-transform: uppercase;
    padding: 2rem 1.3rem;
    -ms-word-break: break-all;
    word-break: break-all;
    line-height: 1.3;
    transition: background .15s ease-in-out, color .15s ease-in-out;
  }
  .tiles__tile--active, .dropdown__tile--active, .dropdown__tile:active {
    background: var(--lightgrey);
    color: var(--grey);
  }
  .tiles__tile--dropdown {
    width: calc(25% - .2rem);
    min-width: calc(25% - .2rem);
    font-size: 1.8rem;
    position: relative;
  }
  .tiles__dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    font-size: 1.4rem;
    width: calc(200% + .2rem);
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s ease-in-out, visibility .15s .15s;
    clip: rect(0, auto, auto, 0);
  }
  .tiles__dropdown--visible {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s ease-in-out, visibility;
  }
  .dropdown__tile {
    color: var(--lightgrey);
    text-align: right;
    font-weight: 400;
    background: var(--white-50);
    margin: .2rem 0 0 0;
    text-transform: uppercase;
    padding: .2rem 1.3rem 0 1.3rem;
    line-height: 3;
    transition: background .15s ease-in-out, color .15s ease-in-out;
  }
  .dropdown__tile:before {
    font-size: 2.4rem;
    line-height: 1.75;
    float: left;
  }
  .dropdown-clicker {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>