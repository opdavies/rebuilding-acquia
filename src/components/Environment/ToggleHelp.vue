<template>
  <div class="hidden lg:block">
    <button type="button" class="text-blue-300 text-sm font-hairline flex items-end hover:underline focus:underline focus:outline-none" @click="$emit('toggle')">
      <svg class="mr-1 h-5 w-5 text-blue-300 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__info"></use></svg>
      {{ hidden ? 'Show quick help' : 'Hide quick help' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    hidden: Boolean
  }
}
</script>
