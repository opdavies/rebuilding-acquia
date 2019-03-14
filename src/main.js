import App from './App.vue'
import HeaderButtons from '@/components/HeaderButtons'
import Navbar from '@/components/Navbar'
import routes from './routes'
import Sidebar from '@/components/Sidebar'
import TitleBlock from '@/components/TitleBlock'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.component('header-buttons', HeaderButtons);
Vue.component('navbar', Navbar);
Vue.component('sidebar', Sidebar);
Vue.component('title-block', TitleBlock);

Vue.use(VueRouter);

new Vue({
  render: h => h(App),

  router: new VueRouter(routes)
}).$mount('#app')
