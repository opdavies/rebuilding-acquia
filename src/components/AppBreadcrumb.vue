<template>
  <div>
    <ul class="flex -ml-3">
      <li class="flex items-center ml-3">
        <div class="flex flex-col-reverse">
          <span class="uppercase text-sm">Organisation</span>
          <span class="font-bold block mb-1" v-text="selectedOrganisation"></span>
        </div>
        <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M5.94 19.73L15.6 10 5.94.27A.88.88 0 0 0 5.3 0a.89.89 0 0 0-.65 1.51L13.06 10l-8.41 8.49a.89.89 0 0 0 1.29 1.24z"/></svg>
      </li>

      <li class="flex items-center ml-3">
        <div class="flex flex-col-reverse">
          <span class="uppercase text-sm">Application</span>
          <span class="font-bold block mb-1" v-text="selectedApplication"></span>
        </div>
        <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M5.94 19.73L15.6 10 5.94.27A.88.88 0 0 0 5.3 0a.89.89 0 0 0-.65 1.51L13.06 10l-8.41 8.49a.89.89 0 0 0 1.29 1.24z"/></svg>
      </li>

      <li class="flex items-center ml-3">
        <div class="flex flex-col-reverse">
          <span class="uppercase text-sm">Environment</span>
          <span class="font-bold block mb-1">{{ selectedEnvironment || '--' }}</span>
        </div>
        <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M19 4.5l-9 11-9-11h18z"/></svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    application: Object,
    environment: {
      type: Object,
      required: false
    }
  },

  computed: {
    selectedApplication: function () {
      if (!this.application) {
        return 'All'
      }

      return this.application.name
    },

    selectedEnvironment: function () {
      if (!this.environment) {
        return null
      }

      return this.environment.name
    },

    selectedOrganisation: function () {
      if (!this.application) {
        return 'All'
      }

      return 'Rebuilding Acquia'
    }
  }
}
</script>
