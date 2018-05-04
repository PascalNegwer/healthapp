<template>
  <div class="l_wrapper l_wrapper--small">
    <h1 class="headline headline--main">Account</h1>
    <section class="l_section">
      <h2 class="headline">Accountdaten</h2>
      <form class="l_flex">
        <p class="label">Name</p>
        <input class="inp" v-model="$user.data.lastName" placeholder="Name">
        <p class="description--inputbox">Vorname</p>
        <input class="inp" v-model="$user.data.firstName" placeholder="Vorname">
        <p class="description--inputbox">E-Mail</p>
        <input class="inp" v-model="$user.data.userName" type="email" placeholder="E-Mail-Adresse" readonly>
        <button class="btn" type="submit">Speichern</button>
      </form>
    </section>
    <span class="l_divider"></span>
  </div>
</template>

<script>
    import * as messageTypes from '../../classes/MessageTypes'

    export default {
        beforeCreate: function () {
            document.documentElement.className = 'u_gradient-background--mixed';
        },
        name: 'account',
        props: [],
        data() {
            return {}
        },
        methods: {
            save: function () {


                this.$user.save({
                    onOk: result => {
                        EventBus.$emit('newMessage', {
                            message: 'Deine Accountdaten wurden erfolgreich geändert', type: messageTypes.SUCCESS
                        });
                    },
                    onError: error => {
                        switch (error.statusCode) {
                            case 0:
                            case 615:
                                EventBus.$emit('newMessage', {
                                    message: 'Oops! Scheint als hättest du keine Internetverbindung.',
                                    type: messageTypes.WARNING
                                });
                                break;
                            default:
                                console.log(error);
                                EventBus.$emit('newMessage', {
                                    message: 'Oops! Unbekannter Fehler.', type: messageTypes.ERROR
                                });
                        }
                    },
                });
            }
        }
    }
</script>

<style scoped>
    .btn {
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