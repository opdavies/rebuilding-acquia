import Vue from 'vue'
import Router from 'vue-router'
import Applications from '@/views/Applications'
import Environments from '@/views/Environments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'applications',
      component: Applications,
    },
    {
      path: '/:id/environments',
      name: 'environments',
      component: Environments,
      props: true,
    }
  ]
})
