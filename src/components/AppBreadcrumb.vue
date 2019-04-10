<template>
  <div class="py-1 overflow-y-scroll">
    <ul class="flex -ml-3">
      <li class="flex items-center ml-3">
        <div class="flex flex-col-reverse">
          <span class="text-gray-700 uppercase text-sm">Organization</span>
          <span v-if="!selectedOrganisation" class="font-bold block mb-1">All</span>
          <router-link v-else :to="{name: 'applications'}" class="font-bold block mb-1 hover:text-blue-400 whitespace-no-wrap" v-text="selectedOrganisation"></router-link>
        </div>
        <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M5.94 19.73L15.6 10 5.94.27A.88.88 0 0 0 5.3 0a.89.89 0 0 0-.65 1.51L13.06 10l-8.41 8.49a.89.89 0 0 0 1.29 1.24z"/></svg>
      </li>

      <li class="flex items-center ml-3">
        <div class="flex flex-col-reverse">
          <span class="text-gray-700 uppercase text-sm">Application</span>
          <span v-if="!selectedOrganisation" class="font-bold block mb-1">All</span>
          <router-link v-else :to="{name: 'environments'}" class="font-bold block mb-1 hover:text-blue-400 whitespace-no-wrap" v-text="selectedApplication"></router-link>
        </div>
        <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M5.94 19.73L15.6 10 5.94.27A.88.88 0 0 0 5.3 0a.89.89 0 0 0-.65 1.51L13.06 10l-8.41 8.49a.89.89 0 0 0 1.29 1.24z"/></svg>
      </li>

      <li class="flex items-center ml-3">
        <div class="flex flex-col-reverse">
          <span class="text-gray-700 uppercase text-sm">Environment</span>
          <span class="font-bold block mb-1">{{ selectedEnvironment || '--' }}</span>
        </div>
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
    selectedOrganisation: function () {
      if (!this.application) {
        return 'All'
      }

      return 'Rebuilding Acquia'
    },

    selectedApplication: function () {
      if (!this.application) {
        return null
      }

      return this.application.name
    },

    selectedEnvironment: function () {
      if (!this.application) {
        return null
      }

      if (!this.environment) {
        return 'All'
      }

      return this.environment.name
    }
  }
}
</script>
