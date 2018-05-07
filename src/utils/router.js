import Vue from 'vue'
import Router from 'vue-router'
import cookie from './cookie.js'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import MainWrapper from '../components/MainWrapper.vue'
import Home from '../components/main/Home.vue'
import Dashboard from '../components/main/Dashboard.vue'
import Functions from '../components/main/Functions.vue'
import Account from '../components/main/Account.vue'
import Help from '../components/main/Help.vue'
import Lawstuff from '../components/main/Lawstuff.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: exceptLoggedIn,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      beforeEnter: exceptLoggedIn,
    },
    {
      path: '/',
      component: MainWrapper,
      beforeEnter: loggedInOnly,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          beforeEnter: loggedInOnly,
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
          beforeEnter: loggedInOnly,
        },
        {
          path: '/functions',
          name: 'functions',
          component: Functions,
          beforeEnter: loggedInOnly,
        },
        {
          path: '/account',
          name: 'account',
          component: Account,
          beforeEnter: loggedInOnly,
        },
        {
          path: '/help',
          name: 'help',
          component: Help,
          beforeEnter: loggedInOnly,
        },
        {
          path: '/lawstuff',
          name: 'lawstuff',
          component: Lawstuff,
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
    Vue.prototype.$user.setSessionToken(sessionToken);
    Apiomat.Datastore.configureWithUserSessionToken(Vue.prototype.$user);

    Vue.prototype.$user.loadMe({
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

  if (!sessionToken) {
    try {
      Vue.prototype.$user.initDatastoreIfNeeded();
    } catch (error) {
      next(false);
      return;
    }

    Vue.prototype.$user.requestSessionToken(true, {
      onOk: result => {
        cookie.set('sessionToken', result['sessionToken']);
        next();
      },
      onError: error => {
        next('/login');
      }
    });
  } else {
    Vue.prototype.$user.setSessionToken(sessionToken);
    Apiomat.Datastore.configureWithSessionToken(sessionToken);
    Vue.prototype.$user.loadMe({
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