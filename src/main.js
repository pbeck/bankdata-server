import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import Buefy from 'buefy';

import 'buefy/dist/buefy.css';

import './assets/css/style.css';

Vue.config.productionTip = false

// Vue.use(VueRouter)

Vue.use(Buefy);

const vue = new Vue({
  router,
  render: h => h(App)
})

vue.$mount('#app')
