import Applications from '@/views/Applications'
import Environment from '@/views/Environment'
import Environments from '@/views/Environments'

export default {
  routes: [
    {
      path: '/',
      name: 'applications',
      component: Applications
    },
    {
      path: '/:id/environments',
      name: 'environments',
      component: Environments,
      props: true
    },
    {
      path: '/:id/environments/:environmentName',
      name: 'environment',
      component: Environment,
      props: true
    }
  ]
}
