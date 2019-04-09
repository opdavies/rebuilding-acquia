<template>
  <div class="border-b-3 border-grey-300">
    <div class="bg-white px-4 lg:px-6 py-5 border-t border-grey-200 flex justify-between items-center">
      <div class="w-full md:w-auto flex flex-col">
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
