<template>
  <div class="text-sm flex items-center">
    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1.71 6.86h3.21A2.49 2.49 0 0 1 7 7.67a2.68 2.68 0 0 1 .42 2.19A4.1 4.1 0 0 1 7 11.1a3.55 3.55 0 0 1-.77 1.09A2.6 2.6 0 0 1 5 13a5.92 5.92 0 0 1-1.41.17H2.12l-.45 2.26H0l1.71-8.57m1.41 1.36L2.4 11.8h.31a6.55 6.55 0 0 0 1.91-.22c.52-.17.86-.75 1-1.75.14-.83 0-1.31-.44-1.44a5.52 5.52 0 0 0-1.59-.18zm11.15-1.36h3.21a2.52 2.52 0 0 1 2.05.81A2.75 2.75 0 0 1 20 9.86a4.12 4.12 0 0 1-.38 1.24 3.69 3.69 0 0 1-.76 1.09 2.65 2.65 0 0 1-1.28.79 6.07 6.07 0 0 1-1.42.17h-1.49l-.45 2.26h-1.67l1.72-8.55m1.4 1.36L15 11.8h.31a6.58 6.58 0 0 0 1.92-.22c.51-.17.85-.75 1-1.75.14-.83 0-1.31-.43-1.44a5.64 5.64 0 0 0-1.6-.18zm-7-3.63h1.65l-.44 2.27h1.49a3 3 0 0 1 1.82.51c.41.31.53.92.36 1.81l-.8 4h-1.68l.77-3.79a1.06 1.06 0 0 0-.08-.85c-.12-.17-.4-.25-.82-.25H9.61l-1 4.9H7l1.7-8.6" data-name="Layer 2"/></svg>
    <span class="ml-1">{{ phpVersion }}</span>
  </div>
</template>

<script>
import ApiClient from '@/api-client.js'

export default {
  mixins: [ApiClient],

  props: {
    application: Object
  },

  computed: {
    phpVersion: function () {
      if (this.application.type !== 'drupal') {
        return null
      }

      return this.getVersion('php', this.getEnvironment(this.application.id, 'prod'))
    }
  }
}
</script>
