import Applications from '@/views/Applications'
import Environment from '@/views/Environment'
import Environments from '@/views/Environments'
import Router from 'vue-router'
import Vue from 'vue'

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
    },
    {
      path: '/:id/environments/:environmentName',
      name: 'environment',
      component: Environment,
      props: true,
    }
  ]
})
