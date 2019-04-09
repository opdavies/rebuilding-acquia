<template>
  <div class="border border-gray-400 rounded shadow bg-white overflow-hidden">
    <div class="border-t-4 border-teal">
      <div class="border-b border-gray-400">
        <div class="px-3 py-4">
          <div class="flex flex-row-reverse">
            <div class="flex-1">
              <h2 class="text-gray-600 text-base mb-1">{{ title }}</h2>
              <div class="text-xs text-gray-600">{{ description }}</div>
            </div>

            <div class="mr-3">
              <slot name="icon"></slot>
            </div>
          </div>
        </div>
      </div>

      <div>
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
svg {
  @apply h-8 w-8 fill-current text-teal
}
</style>
