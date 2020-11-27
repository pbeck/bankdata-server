import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store';

import Buefy from 'buefy';

import 'buefy/dist/buefy.css';

import './assets/css/style.css';

Vue.config.productionTip = false

// Vue.use(VueRouter)

Vue.use(Buefy);

const vue = new Vue({
  router,
  store,
  render: h => h(App)
})

vue.$mount('#app')
