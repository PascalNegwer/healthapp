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
      },
      beforeEnter: exceptLoggedIn,
    },
    {
      path: '/signup',
      name: 'signup',
      component: function (resolve) {
        require(['../components/Signup.vue'], resolve)
      },
      beforeEnter: exceptLoggedIn,
    },
    {
      path: '/',
      component: function (resolve) {
        require(['../components/MainWrapper.vue'], resolve)
      },
      beforeEnter: loggedInOnly,
      children: [
        {
          path: '/',
          name: 'home',
          component: function (resolve) {
            require(['../components/main/Home.vue'], resolve)
          },
          beforeEnter: loggedInOnly,
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: function (resolve) {
            require(['../components/main/Dashboard.vue'], resolve)
          },
          beforeEnter: loggedInOnly,
        },
        {
          path: '/functions',
          name: 'functions',
          component: function (resolve) {
            require(['../components/main/Functions.vue'], resolve)
          },
          beforeEnter: loggedInOnly,
        },
        {
          path: '/account',
          name: 'account',
          component: function (resolve) {
            require(['../components/main/Account.vue'], resolve)
          },
          beforeEnter: loggedInOnly,
        },
        {
          path: '/help',
          name: 'help',
          component: function (resolve) {
            require(['../components/main/Help.vue'], resolve)
          },
          beforeEnter: loggedInOnly,
        },
        {
          path: '/lawstuff',
          name: 'lawstuff',
          component: function (resolve) {
            require(['../components/main/Lawstuff.vue'], resolve)
          },
          beforeEnter: loggedInOnly,
        },
      ]
    },
    {path: '*', redirect: '/'}
  ]
});

function exceptLoggedIn(to, from, next) {
  EventBus.$emit('clearFlashMessages');
  let sessionToken = cookie.get('sessionToken');

  if (sessionToken) {
    let user = new Apiomat.FrontendUser();
    user.setSessionToken(sessionToken);
    Apiomat.Datastore.configureWithUserSessionToken(user);

    user.loadMe({
      onOk: result => {
        next(false);
      },
      onError: error => {
        next();
      }
    }, true);
  } else {
    next();
  }
}

function loggedInOnly(to, from, next) {
  EventBus.$emit('clearFlashMessages');
  let sessionToken = cookie.get('sessionToken');
  let user = new Apiomat.FrontendUser();

  Apiomat.Datastore.setCachingStrategy(Apiomat.AOMCacheStrategy.CACHE_ELSE_NETWORK);
  Apiomat.Datastore.getInstance().setOfflineUsageForClass(Apiomat.FrontendUser, true);

  if (!sessionToken) {
    try {
      user.initDatastoreIfNeeded();
    } catch (error) {
      next(false);
      return;
    }

    user.requestSessionToken(true, {
      onOk: result => {
        cookie.set('sessionToken', result['sessionToken']);
        next();
      },
      onError: error => {
        next('/login');
      }
    });
  } else {
    user.setSessionToken(sessionToken);
    Apiomat.Datastore.configureWithSessionToken(sessionToken);
    user.loadMe({
      onOk: result => {
        next();
      },
      onError: error => {
        if (to.path === '/login' || to.path === '/signup') {
          next();
        } else {
          next('/login');
        }
      }
    }, true);
  }
}

export default router;