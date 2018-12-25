import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import HeaderButtons from '@/components/HeaderButtons'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

Vue.component('header-buttons', HeaderButtons);
Vue.component('navbar', Navbar);
Vue.component('sidebar', Sidebar);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
