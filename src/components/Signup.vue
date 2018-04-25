<template>
    <transition name="fade">
    <div>
        <h1>signup</h1>
        Account schon da? <router-link to="/login">Hier einloggen</router-link>
    </div>
    </transition>
</template>

<script>
    export default {
        name: 'signup',
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>