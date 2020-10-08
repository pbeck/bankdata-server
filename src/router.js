import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Callback from '@/components/Callback'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

export default new Router({
  // TODO: Might cause issues with heroku?
  // https://gist.github.com/hone/24b06869b4c1eca701f9

  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '*', 
      name: 'Not Found',
      component: NotFound
    }
  ]
})
