import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

Vue.component('navbar', Navbar);
Vue.component('sidebar', Sidebar);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
