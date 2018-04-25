import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import router from './router.js';

Vue.use(VeeValidate);
//Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

(function () {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js')
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
