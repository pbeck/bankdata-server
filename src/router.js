import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Home from '@/components/Home'
import Login from '@/components/Login.vue';
import Callback from '@/components/Callback'
import NotFound from '@/components/NotFound.vue'

//import AuthenticatedPing from '@/components/AuthenticatedPing.vue';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/services/auth';

Vue.use(Router)

const PUBLIC_PATHS = ['/', '/login'];

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/callback',
    name: 'callback',
    component: Callback
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '*', 
    name: 'Not Found',
    component: NotFound
  }
  /*
  {
    path: '/ping',
    name: 'AuthenticatedPing',
    component: AuthenticatedPing,
  },
  */
];

// TODO: Might cause issues with heroku?
// https://gist.github.com/hone/24b06869b4c1eca701f9
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

const unAuthenticatedAndPrivatePage = (path) => (!PUBLIC_PATHS.includes(path)
    && !(ACCESS_TOKEN in window.localStorage)
    && !(REFRESH_TOKEN in window.localStorage));

router.beforeEach((to, from, next) => {
  if (unAuthenticatedAndPrivatePage(to.path)) {
    next(`/login?next=${to.path}`);
  } else {
    next();
  }
});

export default router;
