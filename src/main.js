import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import router from './utils/router.js'

Vue.use(VeeValidate);
Vue.config.productionTip = false;

window.EventBus = new Vue();
Vue.prototype.$user = new Apiomat.FrontendUser();

Apiomat.Datastore.getInstance().setOfflineUsageForClass(Apiomat.FrontendUser, true);
Apiomat.Datastore.getInstance().setOfflineUsageForClass(Apiomat.Day, true);
Apiomat.Datastore.getInstance().setOfflineUsageForClass(Apiomat.Period, true);
Apiomat.Datastore.getInstance().setOfflineUsageForClass(Apiomat.EyeExercise, true);
Apiomat.Datastore.getInstance().setOfflineUsageForClass(Apiomat.Workout, true);
Apiomat.Datastore.setCachingStrategy(Apiomat.AOMCacheStrategy.NETWORK_ELSE_CACHE);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

(function () {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./serviceworker.js')
      .then(
        function () {
          console.log('Service Worker Registered');
        },
        function (e) {
          console.log(e);
        }
      );
  }
})();
