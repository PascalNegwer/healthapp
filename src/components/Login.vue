<template>
    <div>
        <h1>login</h1>
        <form v-on:submit.prevent="onSubmit">
            <input v-model="username" placeholder="E-Mail-Adresse">
            <input v-model="password" placeholder="Passwort">
            <button type="submit">Einloggen</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        props: ['user'],
        data() {
            return {
              username: '',
              password: '',
            }
        },
        methods: {
          onSubmit() {
            /* track sessions automatically */
            Countly.track_sessions();
            /* track pageviews automatically */
            Countly.track_pageview();

            let user = new Apiomat.FrontendUser();
            user.setUserName(this.username);
            user.setPassword(this.password);
            Apiomat.Datastore.configureWithCredentials(user);

            user.save({
              onOk: function () {
                console.log("Saved succesfully FrontendUser");
                /* track the event at analytics */
                Countly.q.push(['add_event', {key: "create FrontendUser"}]);
                /* Now you can create objects of your class with this new user.*/
              },
              onError: function (error) {
                this.error = true;
                console.log("Some error occured: (" + error.statusCode + ")" + error.message);
              }.bind(this)
            });

            user.requestSessionToken();

            console.log(user);

            this.user = user;
          }
        }
    }
</script>

<style>

</style>