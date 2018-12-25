import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import HeaderButtons from '@/components/HeaderButtons'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import TitleBlock from '@/components/TitleBlock'

Vue.component('header-buttons', HeaderButtons);
Vue.component('navbar', Navbar);
Vue.component('sidebar', Sidebar);
Vue.component('title-block', TitleBlock);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
