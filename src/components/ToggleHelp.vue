<template>
  <div class="hidden lg:block">
    <button type="button" class="text-blue text-sm font-hairline flex items-center hover:underline focus:underline focus:outline-none" @click="$emit('toggle')">
      <svg class="h-5 w-5 mr-1 text-blue-dark fill-current" role="presentation"><use xlink:href="icons.symbol.svg#actions__info"></use></svg>
      {{ hidden ? 'Show quick help' : 'Hide quick help' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    hidden: Boolean,
  },
}
</script>
