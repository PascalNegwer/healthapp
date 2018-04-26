import Vue from 'vue'
import Router from 'vue-router'
import cookie from './cookie.js'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['../components/Login.vue'], resolve)
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: function (resolve) {
        require(['../components/Signup.vue'], resolve)
      }
    },
    {
      path: '/',
      component: function (resolve) {
        require(['../components/MainWrapper.vue'], resolve)
      },
      beforeEnter: guardRoute,
      children: [
        {
          path: '/',
          name: 'home',
          component: function (resolve) {
            require(['../components/main/Home.vue'], resolve)
          },
        },
      ]
    },
    { path: '*', redirect: '/' }
  ]
});

function guardRoute(to, from, next) {
  let sessionToken = cookie.getCookie('sessionToken');
  let user = new Apiomat.FrontendUser();
  Apiomat.Datastore.setCachingStrategy(Apiomat.AOMCacheStrategy.CACHE_ELSE_NETWORK);
  Apiomat.Datastore.getInstance().setOfflineUsageForClass(Apiomat.FrontendUser, true);

  if (!sessionToken) {
    try {
      user.initDatastoreIfNeeded();
    } catch (e) {
      redirectToLogin(to, next);
      return;
    }

    user.requestSessionToken(true, {
      onOk: result => {
        cookie.setCookie('sessionToken', result['sessionToken']);
        router.push('/');
      },
      onError: error => {
        redirectToLogin(to, next);
      }
    });
  } else {
    user.setSessionToken(sessionToken);
    Apiomat.Datastore.configureWithUserSessionToken(user);
    user.loadMe({
      onOk: result => {
        next();
      },
      onError: error => {
        console.log(error);
        redirectToLogin(to, next);
      }
    }, true);

  }
}

function redirectToLogin(to, next) {
  next({path: '/login', query: {redirect: to.fullPath}});
}

export default router;