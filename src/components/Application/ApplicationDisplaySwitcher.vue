<template>
  <div>
    <div class="bg-grey-100 rounded overflow-hidden">
      <button type="button" class="p-2 focus:outline-none focus:bg-blue-300 focus:text-white" :class="[mode == 'grid' ? 'bg-blue-100 text-white' : 'text-grey-darkest']" @click="$emit('display-changed', 'grid')">
        <svg class="h-5 w-5 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__grid"></use></svg>
        <span class="visuallyhidden">Grid</span>
      </button>

      <button type="button" class="p-2 focus:outline-none focus:bg-blue-300 focus:text-white" :class="[mode == 'list' ? 'bg-blue-100 text-white' : 'text-grey-darkest']" @click="$emit('display-changed', 'list')">
        <svg class="h-5 w-5 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__list"></use></svg>
        <span class="visuallyhidden">List</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: String
  }
}
</script>
