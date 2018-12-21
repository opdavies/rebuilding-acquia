<template>
  <div id="app">
    <environments :project="projects[0]"></environments>
  </div>
</template>

<script>
import Environments from './components/Environments'

export default {
  components: {
    Environments
  },

  data() {
    return {
      projects: [
        {
          name: 'Rebuilding Acquia',
          type: 'Drupal',
          level: 'Enterprise',
          environments: {
            dev: {
              name: 'Dev',
              url: 'dev.rebuilding-acquia.com',
              label: 'develop'
            },
            stage: {
              name: 'Stage',
              url: 'stg.rebuilding-acquia.com',
              label: 'master'
            },
            prod: {
              name: 'Prod',
              url: 'rebuilding-acquia.com',
              label: 'tags/2018-12-21'
            },
          },
        },
      ],
    }
  }
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
