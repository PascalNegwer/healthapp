import Vue from 'vue'
import Router from 'vue-router'
import CookieHelper from './helper/CookieHelper.js'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['./components/Login.vue'], resolve)
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: function (resolve) {
        require(['./components/Signup.vue'], resolve)
      }
    },
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(['./components/Home.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    { path: '*', redirect: '/' }
  ]
});

function guardRoute(to, from, next) {
  let sessionToken = CookieHelper.getCookie('sessionToken');

  if (!sessionToken) {
    redirectToLogin(to, next);
    return
  }

  let user = new Apiomat.FrontendUser();
  user.setSessionToken(sessionToken);
  Apiomat.Datastore.configureWithUserSessionToken(user);
  user.loadMe({
    onOk: next(),
    onError: redirectToLogin(to, next)
  });
}

function redirectToLogin(to, next) {
  next({path: '/login', query: {redirect: to.fullPath}});
}

export default router;