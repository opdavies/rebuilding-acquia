<template>
  <button type="button" class="py-3 w-full flex flex-col items-center text-blue-300 text-xs font-bold no-underline hover:underline focus:underline hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">
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
svg
  @apply h-6 w-6 fill-current mb-2
</style>
