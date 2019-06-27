<template>
  <div class="border-b-3 border-gray-300">
    <div class="px-4 py-5 flex justify-between items-center bg-white border-t border-gray-200 lg:px-6">
      <div class="w-full flex flex-col md:w-auto">
        <app-breadcrumb :application="application" :environment="environment"></app-breadcrumb>
      </div>

      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb'

export default {
  props: {
    application: Object,
    environment: {
      type: Object,
      required: false
    }
  },

  components: {
    AppBreadcrumb
  }
}
</script>
