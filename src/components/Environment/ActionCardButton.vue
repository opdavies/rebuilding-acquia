<template>
  <button type="button" class="w-full flex flex-col items-center py-3 text-blue-300 text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-200 focus:bg-grey-lighter focus:outline-none block">
    <slot></slot>
    <span class="block" v-text="label"></span>
  </button>
</template>

<script>
export default {
  props: {
    label: { type: String }
  }
}
</script>

<style scoped>
  svg {
    @apply h-6 w-6 fill-current mb-2
  }
</style>
