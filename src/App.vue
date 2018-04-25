<template>
    <div>
        <div class="container app-content">
            <router-view></router-view>
        </div>
        <!-- <router-link to="/about">About</router-link> -->

        <button v-on:click="save()">save</button>

        <button v-on:click="test()">signup</button>
    </div>
</template>

<script>
  // function signup()
  // {
  //     let user = new Apiomat.FrontendUser();
  //     user.setEmail("pascal");
  //     user.setPassword("secret");
  //     Apiomat.Datastore.configureWithCredentials(user);
  //
  //     let saveCB = {
  //         onOk: function() {
  //             statusField.innerHTML = "Saved user successfully";
  //             loadTasks();
  //         },
  //         onError: function(error) {
  //             statusField.innerHTML = "Some error occured. "+ error.statusCode + " --> " + error.message;
  //         }
  //     };
  //     user.loadMe({
  //         onOk: function() {
  //             statusField.innerHTML = "Succefully logged in";
  //             loadTasks();
  //         },
  //         onError: function(error) {
  //             statusField.innerHTML= "No user there. Will create new one...";
  //             user.save(saveCB);
  //         }
  //     });
  // };
  import Login from './components/Login.vue';
  import Signup from './components/Signup.vue';

  export default {
    components: {Login, Signup},
    name: 'App',
    data() {
      return {
        message: 'test',
        sessionToken: '',
        user: undefined
      }
    },
    methods: {
      save() {
        /* track sessions automatically */
        // Countly.track_sessions();
        /* track pageviews automatically */
        // Countly.track_pageview();
        /* Create a new member/user of your app */
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

        if (this.error) {
          return;
        }
        this.user = user;
      },
      test() {
        //https://epdemo.apiomat.enterprises/yambas/oauth/token
        //this.user.requestSessionToken(true, {
        //    onOk : function(result) {
        //        console.log(result);
        //        console.log(result.getSessionToken());
        //        /* Now you can do sth with loaded object */
        //        /* track the event at analytics */
        //        Countly.q.push(['add_event',{key:"load FrontendUser" }]);
        //    }.bind(this),
        //    onError : function(error) {
        //        console.log('ne');
        //
        //        /* handle error */
        //    }
        //});


        //console.log(this.user.getSessionToken());
        Apiomat.Datastore.configureWithSessionToken('45f43f36-d74f-4664-917d-bf35b58ba219');

        this.user = new Apiomat.FrontendUser();
        this.user.setSessionToken('45f43f36-d74f-4664-917d-bf35b58ba219');

        this.user.loadMe({
          onOk: function () {
            console.log('ye');
            /* Now you can do sth with loaded object */
            /* track the event at analytics */
            Countly.q.push(['add_event', {key: "load FrontendUser"}]);
          }.bind(this),
          onError: function (error) {
            console.log('ne');

            /* handle error */
          }
        });

        this.user.getProfiles();
        // Apiomat.Datastore.configureWithCredentials();
        //Apiomat.FrontendUser.getFrontendUsers(undefined, {
        //    onOk: function(users) {
        //        console.log(users);
        //        this.message = users[0].getEmail();
        //    }.bind(this),
        //    onError: function(error) {
        //        console.log('errör');
        //    }
        //});
      }
    }
  }
</script>

<style>

</style>