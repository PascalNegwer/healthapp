<template>
    <div>
        <h1>login</h1>
        <div v-if="loading">
            <h1>Loading</h1>
        </div>
        <div v-else>
            <div v-if="error">
                {{ error.statusCode }}: {{ error.message }}
            </div>
            <form v-on:submit.prevent="login">
                <input v-model="user.data.userName" placeholder="E-Mail-Adresse">
                <input v-model="user.data.password" placeholder="Passwort">
                <button type="submit">Einloggen</button>
            </form>
            Noch kein Account? <router-link to="/signup">Hier registrieren!</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        props: ['user'],
        data() {
            return {
              loading: false,
              error: undefined,
            }
        },
        methods: {
          login() {

          }
        }
    }
</script>

<style>
</style>