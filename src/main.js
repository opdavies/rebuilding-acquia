import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Navbar from '@/components/Navbar'

Vue.component('navbar', Navbar);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
